// Code sample for ASP.NET Core on .NET Core
// From command prompt, run:
// dotnet add package Twilio.AspNet.Core

using Twilio.AspNet.Common;
using Twilio.AspNet.Core;
using Twilio.TwiML;
using System;
using System.Net;
//using Twilio.AspNet.Mvc;

namespace TwilioReceive.Controllers
{
    public class SmsController : TwilioController
    {
        public TwiMLResult Index(SmsRequest incomingMessage)
        {
            var messagingResponse = new MessagingResponse();

            Console.WriteLine("Searching: '" + incomingMessage.Body + "'\n");

            // Running script that googles the query
            System.Diagnostics.Process.Start("CMD.exe", "/C python pygooglesearch.py '" + incomingMessage.Body + "'");

            // Reads the query result from .txt
            string resultText = System.IO.File.ReadAllText(@"C:\Users\gabri\Desktop\TwilioReceive\result.txt");

            //attach the 
            messagingResponse.Message(resultText);

            return TwiML(messagingResponse);
        }
    }
}
