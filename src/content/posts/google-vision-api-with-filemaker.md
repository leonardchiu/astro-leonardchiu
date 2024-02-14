---
title: "Google Vision API with FileMaker"
pubDate: 2021-10-10
author: "Leonard Chiu"
tags: ["filemaker", "tech"]
image:
  url: "../blogs/Cloud_Vision_Filemaker.jpg"
  alt: ""
slug: "google-vision-api-with-filemaker"
---

## Google Vision API with FileMaker

## Google Cloud Vision API

### Current situation

With the pandemic on-going, many countries are implementing contact tracing measures so that in the event a cluster is identified, government agencies can use the data to conduct contact tracing to isolate people that have visited the cluster and quarantine them. This is to prevent further spread of the virus.

### Solution implemented in SG

SG Government was fast to implement a QR code system to allow scanning via smart phone to submit a form for collection of data. Every QR code is unique to the location and i would say it this system works well. Internet browsers on our smart phone these days are fairly secure and we can save our details on the browser’s cache and reusing our particular is easy on subsequent scans. I believe this adoption of QR code technology will pave the way for much more of such usage as demonstrated in China. The Chinese have widely adopted QR code technologies for many years. These technologies are so entrenched into their society now that it is almost impossible to travel through China without using their QR code systems. In my recent visit to China to attend a tech conference, every single companies have some form of implementation of QR code technology as part of their solution. At that point of time, I find getting these solutions into SG are difficult as QR codes are not a part of Singaporeans culture. However with this widely mandated system, I find that Singapore will have more opportunities to adopted technologies by our Chinese counterparts. I am going to pick up a project that utilize QR codes as the main driver for the solution. Look out for it.

### What's the challenge with QR code

Of course we cannot expect 100% adoption rate at such short time frame. There are still bound to have Singaporeans that are unwilling to use their smart phone to scan a QR code. Also there are our old folks that are not savvy enough to use their smart phone to scan and submit the form. Hence a small percentage still requires the old fashion way of scanning NRIC. The barcode on our Singapore NRIC is pretty basic, encoding with just barcode 39 format. What is retrieve is just the alphanumeric NRIC number. It might be good enough for the government, as they can assess to the national database to extract the details of each NRIC but it may not be good enough for other usage that can’t assess to the national database. The above QR code system deployed is very good, especially now with the Government introducing link with the current SingPass system. But it still didn’t solve the problem of the small percentage of Singaporeans that can’t scan the QR code.

### What did I do?

So while I have more time now due to Circuit Breaker, I decided to play with Optical Character Recognition (OCR) technology to try to capture details from NRIC. The idea is simple: scanning NRIC with any smart phone and extract the predetermined data from NRIC for further processing. There are a few big players in the market that provide OCR engine for end users to use for development. 2 big names are Microsoft Azure and Google Cloud Platform (GCP). There is also a 3rd pretty popular provider called OCR.SPACE. OCR.space has a very simple API to hit. Basically just populate a query with provided API key and hit the end point to return a json file with data. Within an hour, I can return a result but I find the results are not great. Misses and hits are about 50/50 percent for NRIC. Hence I continue to look at other platforms. After a little research, I find that Google provides a pretty generous free tier for experimenting as compared to Microsoft Azure and Google seems to be in the forefront of ML and AI imaging technology hence i decided to give Google a shot.

### Details of the prototype

As this is just a simple prototype, I used Filemaker as the front end for the app as I wanted the solution to be on the smart phone to utilize the camera as a scanner. Filemaker is perfect for this as I can whip up a quick hosted solution within a few hours. Next working with Google Cloud Platform.Google Cloud Platform (GCP) offers such a vast services that just digging through the documentation is challenging. After a day of scouring through their documentations, I finally pin point how to go about it. I am not going to go through the technical details here as there a lot of information online where there are explanations on how to “technically” set it up. I am going to explain it in layman terms so that someone new to programming can connect the logic dots first and hopefully make their research easier going forward. In short, Google adopted Oauth2.0 to authenticate an user before any calls can be made to their end point. This is the screen that you often see when we try to use google services and google ask you to give google permission to allow a website or app to gain access to your details. Once you give consent, Google will send an Authorization Code back to the app or website that is access ing your google services. With the Authorization Code, you can use it to call GCP again to request for an Access Key and Refresh Key. Access Key is the “API key” for you make the call to Google with the image to get their Cloud Vision Engine to OCR your image and return with a json data file so that you can use the return json file to extract the info you need. The initial Access key Google provides will expire after 3600 seconds (1 hour) after which, you will have to use the refresh key to request for a new Access Key. This will keep repeating until the user (you) revoke the authorization or the refresh key is not used for 6 months. Hence you will have to write code to detect if the Access Key if still avail and call for a new Access Key with the Refresh Key if it has expired.

### So what so useful?

For example by scanning the front of the NRIC will can extract the full name include dialect characters (if it is supported by Google Vision), NRIC number, date of birth and race. The back of the NRIC will yield the address and postal code. These data can then be use to do automated tasks. Example, fill a form, create an file or simply for recording purpose. The average time for Google to return and extract the data, takes less than half a second hence it is extremely fast and productivity to process large number of NRIC. As you can see, this OCR app is useful not only for NRIC, you can code it to recognize driving license, images, receipts and other documents that requires to extract text out. Only caveat is that for each type of document, the format must stay the same in other for you to code correctly to extract the required data. Oh and for those that is wondering how much better compared to the first contender OCR.SPACE? Google returns about 90% ~ 95% accurate data if the scan is of uniform lighting across the NRIC which is awesome!

### Conclusion

So as you all can see, this is an useful little app that can be helpful in many application. The takeaway is that once you are able to authenticate with Google. There are plenty of other services available as GCP for you to explore. Bear in mind that GCP is not a free service and if you exceed the limit, Google will charge you at the credit card you sign up the developer account with. I will be exploring more of GCP services in this blog and detail them here once I done them. These are little hobbies of mine when I have spare time. Find some time and try it!

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NTkzNjE1MjddfQ==
-->
