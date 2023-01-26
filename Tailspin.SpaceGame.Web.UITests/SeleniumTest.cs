using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using System;
using System.Threading;

namespace TechFabricSln.Test
{
    class SeleniumTest
    {
        private IWebDriver driver;

        //[Test]
        //[Category("UITests")]
        //public void VisitMicrosoft_CheckWindowsMenu()
        //{
        //    driver = new ChromeDriver();
        //    driver.Navigate().GoToUrl(Environment.GetEnvironmentVariable("SITE_URL2"));
        //    Thread.Sleep(10000);
        //    var Windows_text = driver.FindElement(By.Id("uhf-g-nav")).TagName;
        //    Assert.AreEqual("nav", Windows_text);
        //    driver.Quit();
        //}

        [Test]
        [Category("UITests")]
        public void Confirm_LoggedUser()
        {

            driver = new ChromeDriver();
            //driver.Navigate().GoToUrl("https://localhost:49385/");
            driver.Navigate().GoToUrl(Environment.GetEnvironmentVariable("SITE_URL"));
            Thread.Sleep(10000);
            // Locate the link by its ID and then click the link.
            ClickElement(FindElement(By.Id("loginBtn")));

            // Locate the resulting modal.
            IWebElement modal = FindElement(By.Id("loginBtn"));

            Thread.Sleep(3000);

            string userName = "Diomedes_frias";
            driver.FindElement(By.Id("userName")).SendKeys(userName);

            //Thread.Sleep(2000);

            driver.FindElement(By.Id("password")).SendKeys("123456");

            //Thread.Sleep(3000);
            // Locate the link by its ID and then click the link.
            ClickElement(FindElement(By.Id("login-btn-accept")));

            Thread.Sleep(5000);

            var userNameLabel = driver.FindElement(By.Id("userNameLabel")).Text;

            Assert.AreEqual(userName, userNameLabel);
            driver.Quit();
        }


        //[Test]
        //[Category("UITests")]
        //public void Validate_AMount()
        //{

        //    driver = new ChromeDriver();
        //    //driver.Navigate().GoToUrl("https://localhost:61126/");
        //    driver.Navigate().GoToUrl(Environment.GetEnvironmentVariable("SITE_URL"));
        //    Thread.Sleep(3000);
        //    // Locate the link by its ID and then click the link.
        //    ClickElement(FindElement(By.Id("login-btn")));

        //    // Locate the resulting modal.
        //    IWebElement modal = FindElement(By.Id("login-btn"));

        //    Thread.Sleep(3000);

        //    string userName = "Diomedes_frias";
        //    driver.FindElement(By.Id("userName")).SendKeys(userName);

        //    //Thread.Sleep(2000);

        //    driver.FindElement(By.Id("password")).SendKeys("123456");

        //    //Thread.Sleep(3000);
        //    // Locate the link by its ID and then click the link.
        //    ClickElement(FindElement(By.Id("login-btn-accept")));

        //    Thread.Sleep(5000);

        //    var userNameLabel = driver.FindElement(By.Id("userNameLabel")).Text;

        //    Assert.AreEqual(userName, userNameLabel);
        //    driver.Quit();
        //}





        private IWebElement FindElement(By locator, IWebElement parent = null, int timeoutSeconds = 10)
        {
            // WebDriverWait enables us to wait for the specified condition to be true
            // within a given time period.
            return new WebDriverWait(driver, TimeSpan.FromSeconds(timeoutSeconds))
                .Until(c => {
                    IWebElement element = null;
                    // If a parent was provided, find its child element.
                    if (parent != null)
                    {
                        element = parent.FindElement(locator);
                    }
                    // Otherwise, locate the element from the root of the DOM.
                    else
                    {
                        element = driver.FindElement(locator);
                    }
                    // Return true once the element is displayed and able to receive user input.
                    return (element != null && element.Displayed && element.Enabled) ? element : null;
                });
        }

        private void ClickElement(IWebElement element)
        {
            // We expect the driver to implement IJavaScriptExecutor.
            // IJavaScriptExecutor enables us to execute JavaScript code during the tests.
            IJavaScriptExecutor js = driver as IJavaScriptExecutor;

            // Through JavaScript, run the click() method on the underlying HTML object.
            js.ExecuteScript("arguments[0].click();", element);
        }
    }
}