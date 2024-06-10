

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using SRWebBase.Models.Enum;
using SRWebBase.Models;
using static SRWebBase.Models.Controls.Control;
using SRWebBase.Models.Controls;
using System.Text.Json.Serialization;
using System.Text.Json;

namespace SRWebBase
{
    public class BaseController : Controller
    {
        private readonly IMemoryCache _memoryCache;
        private readonly ILogger _logger;
        private readonly ITaskManager _taskManager;
        public BaseController(ILogger logger, IMemoryCache memoryCache, ITaskManager taskManager)
        { 
            _logger = logger;
            _memoryCache = memoryCache;
            _taskManager = taskManager;
        }
        [HttpPost]
        public JsonResult AttributeValue([FromBody] AttributeValueModel attributeModel)
        {
            string sessionId = HttpContext.Session.Id;
            Task tsk = Task.Factory.StartNew(() =>
            {
                if (ModelState.IsValid)
                {
                    Form? from = _memoryCache.Get<Form>(sessionId);
                    from.ActiveControl(_taskManager.TaskInfos[sessionId].MsgBox!);

                    var control = from.Controls.Find(item => item.Id == attributeModel.Id);
                    if (control != null)
                    { 
                        control.SetAttributeValue(attributeModel.AttributeName, attributeModel.AttributeValue);
                    }
                    _taskManager.TaskInfos[sessionId].MessageBoxEvent.Set(TriggerSourceEnum.AutoExit);
                    _logger.LogDebug("");
                    _memoryCache.Set<Form>(sessionId, from, TimeSpan.FromSeconds(600));
                }
            });
            var exitInfo = _taskManager.TaskInfos[sessionId].MessageBoxEvent.Wait();

            return new JsonResult(new {
                success = true,
                message = "AttributeValue",
                exitType = (int)exitInfo.Item2! ,
                obj = _taskManager.TaskInfos[sessionId].MsgBox });
        }
        [HttpPost]
        public JsonResult Event([FromBody] EventModel eventModel)
        {
            string sessionId = HttpContext.Session.Id;
            Task tsk = Task.Factory.StartNew(() =>
            {
                if (ModelState.IsValid)
                {
                    Form? from = _memoryCache.Get<Form>(sessionId);

                    from.ActiveControl(_taskManager.TaskInfos[sessionId].MsgBox!);
                    if (eventModel.EventType == (int)EventType.MessageBoxClick)
                    {
                        _taskManager.TaskInfos[sessionId].WaitMsgEvent.Set();
                        _logger.LogError("_taskManager.TaskInfos[sessionId].WaitMsgEvent.Set( );");
                    }
                    else
                    {
                        if (eventModel.EventType == (int)EventType.FromOnload)
                        {
                            if (eventModel.Id == from.Id)
                            {
                                from.RunEvent(new EventObject((EventType)eventModel.EventType));
                            }
                        }
                        else
                        {
                            if (eventModel.Id == from.Id)
                            {
                                from.RunEvent(new EventObject((EventType)eventModel.EventType));
                            }
                            else
                            {
                                var control = from.Controls.Find(item => item.Id == eventModel.Id);
                                if (control != null)
                                {
                                    control.RunEvent(new EventObject((EventType)eventModel.EventType));
                                    _logger.LogError($"{JsonSerializer.Serialize(eventModel)}");
                                }
                            }

                        }
                        _taskManager.TaskInfos[sessionId].MessageBoxEvent.Set(TriggerSourceEnum.AutoExit);

                        _memoryCache.Set<Form>(sessionId, from, TimeSpan.FromSeconds(600));
                        _logger.LogError("Set TriggerSourceEnum.AutoExit");
                    } 
                }
            });
            var exitInfo = _taskManager.TaskInfos[sessionId].MessageBoxEvent.Wait();
            _logger.LogError("_taskManager.TaskInfos[sessionId].MessageBoxEvent.Wait();");
            return new JsonResult(new
            {
                success = true,
                message = "Event",
                exitType = (int)exitInfo.Item2!,
                obj = _taskManager.TaskInfos[sessionId].MsgBox
            });
        }
    }
}
