using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.Threading;

namespace Tailspin.SpaceGame.Web.UITests
{
    class SeleniumTest
    {
        [Test]
        [Category("UITests")]
        public void VisitMicrosoft_CheckWindowsMenu()
        {

            IWebDriver driver = new ChromeDriver();
            driver.Navigate().GoToUrl("https://www.microsoft.com/");
            Thread.Sleep(10000);
            var Windows_text = driver.FindElement(By.Id("uhf-g-nav")).TagName;
            Assert.AreEqual("nav", Windows_text);
            driver.Quit();
        }
    }
}