using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
 
using SRWebBase;
using System.Diagnostics;
 
using WebApplication3.Models;
 
 
 

namespace WebApplication3.Controllers
{ 
    public class HomeController : BaseController
    {
        private readonly IMemoryCache _memoryCache;
        private readonly ILogger<HomeController> _logger;
        public HomeController(ILogger<HomeController> logger, IMemoryCache memoryCache, ITaskManager taskManager) : base(logger, memoryCache, taskManager)

        {
            _memoryCache = memoryCache;
            _logger = logger; 
        }

        public IActionResult Index( )
        {
            var model = HttpContext.Items["@Model"];
            return View(model);
        }
        
       
        public IActionResult Privacy()
        { 
            return View( );
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
