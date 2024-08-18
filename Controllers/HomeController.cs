using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Betslip.Models;

namespace Betslip.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [Route("mybets")]
    public IActionResult UnSettled() => View();

    [Route("receipt", Name = "Betslip_Receipt")]
    public IActionResult Receipt() => View();

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
