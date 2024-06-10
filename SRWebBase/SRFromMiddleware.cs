using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.DependencyInjection;
using SRWebBase.Models.Controls;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SRWebBase
{
    public class SRFromMiddleware
    {
        private readonly RequestDelegate _next;

        public SRFromMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context, IMemoryCache memoryCache, IServiceProvider serviceProvider, ITaskManager taskManager)
        {
            //bool found  = false;
            context.Session.SetString("SRFromMiddleware", "SRFromMiddleware");
            taskManager.TaskInfos.TryAdd(context.Session.Id, new TaskInfo());
 
            string? path = context.Request.Path.Value;
            if("/".Equals(path))
            {
                System.Diagnostics.Debug.WriteLine("[/]: Reqeust!");
                //var controllerName = path!.Split('/')[1]; // 假设路由格式为 /api/{controller}/{action}
                //if (string.IsNullOrEmpty(controllerName))
                //{
                //    controllerName = "Home";
                //}

                var controllerName = "Home";
                // 通过反射获取控制器类型
                var controllerType = Assembly.GetEntryAssembly()!.GetType($"WebApplication3.Controllers.{controllerName}Controller");

                if (controllerType != null && typeof(BaseController).IsAssignableFrom(controllerType))
                {

                    using (var scope = context.RequestServices.CreateScope())
                    {

                        Form? from = memoryCache.Get<Form>(context.Session.Id);

                        if (from != null)
                        {
                            context.Items["@Model"] = from;
                        }
                        else
                        {
                            var formType = Assembly.GetEntryAssembly()!.GetType($"WebApplication3.Models.Windows.{controllerName}Form");
                            if (formType != null)
                            {
                                var serviceInstance = ActivatorUtilities.CreateInstance(serviceProvider, formType);

                                if (serviceInstance != null)
                                {
                                    // found = true;
                                    memoryCache.Set<Form>(context.Session.Id, (Form)serviceInstance, TimeSpan.FromSeconds(600));

                                    context.Items["@Model"] = serviceInstance;
                                }
                            }
                        }

                    }

                }
            }
            else
            {
                System.Diagnostics.Debug.WriteLine("Reqeust!  " + path);
            }
            
            await _next(context);

            //_logger.LogInformation($"index session:{HttpContext.Session.Id}");
            // Call the next middleware in the pipeline


        }
    }
}
