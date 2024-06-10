using SRWebBase;
 

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSession(option => {
    option.IdleTimeout = TimeSpan.FromSeconds(600);
    option.Cookie.HttpOnly = true;
    option.Cookie.IsEssential = true;
});

// 配置日志记录
//builder.Logging.ClearProviders();
builder.Logging.AddDebug();
builder.Logging.AddConsole();
// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddMemoryCache();
 
builder.Services.AddSingleton<ITaskManager, TaskManager>(); 

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}




app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();
app.UseSession();
app.UseMiddleware<SRFromMiddleware>();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
