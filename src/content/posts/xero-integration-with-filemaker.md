---
title: "Xero integration with Filemaker"
pubDate: 2022-01-12
author: "Leonard Chiu"
image:
  url: "../blogs/Xero_Filemaker.png"
  alt: ""
slug: "xero-integration-with-filemaker"
---

## Xero Integration with FileMaker

### What is Xero?

Xero is an online accounting software that have grown in popularity among SMEs in Singapore due to it ease of use and low pricing. Xero is also fully compliant with IRAS (Inland Revenue Authority of Singapore) on their tax filings format. Making users of Xero easy to file their quarterly GST and annual income tax filings. It is fully cloud based hence users do not need to install any softwares onto their company's machines. Making accessing and maintenance easy. Xero's user interface is plain and simple, hence appeals to local administrative staffs even though they are not accounting trained.

### Why the need to integrate?

One of the company that I developed their custom Filemaker solution is using Xero as their accounting app. The current practise is tedious as users need to log into Xero to create an invoice after a job is completed. Job processes are managed by the custom Filemaker app hence there are a lot of double data entry for each job. I was tasked to looked through their solution and identified that it will be excellent to connect both Filemaker and Xero together. This will make each job a single flow of completion without having to log into both apps.

### How difficult it is to connect both?

After doing a complete analysis of the work flows, I dive right into Xero's documentations on the API integrations. I could not have stumble into it at the most correct time. Xero just migrated to Oauth 2.0 from 1.0 which is much more secure. Should I have done it 6 months earlier, I will then have to re-code to compile to the new standards. Xero's documentation were pretty well written and I have no problem understanding quickly. Basically the Oauth2.0 is somewhat standard across all APIs, if you look at my previous post on Google Cloud Vision, they work about the same. In fact it is simpler, because there is no need to send images to Xero. All we are sending are JSON files to trigger a creation of invoice based on the information of the job.

### Scopes

The general idea is reduce the step to log into Xero to create an invoice for each job that was completed through their custom Filemaker app. The integration starts with each user authenticating with Xero using their Xero credentials in the custom Filemaker app. After which, at a certain stage of the job flow, Filemaker will make an API POST request to Xero with the information of the job via a JSON file. This will programmatically create an invoice in Xero with the job details and return an invoice number to be inserted into a compulsory field in the Filemaker app. This reduce the total time taken to create an invoice for each job by an estimate of 2 minutes. Furthermore, human errors to copy the invoice number back to the Filemaker app is totally removed.

### Benefits of this custom integration

The company that was using this custom app was doing on average about 100 jobs daily. Hence the total daily time saved was 3 man hours which is beneficial to the company in the long run. As such the monetary saving and error reduction to the company is important especially in difficult times (Covid 19) now. Any competitive edges they can get helps.

### How to go about getting integration like this?

There are many Filemaker Developers that offer ready made plugins that will integrate any accounting apps to Filemaker. They cost between SGD2,000 to SGD6,000 however the integration are not easy off the bat hence I will always suggest company to look for a senior freelance developer to work with in the long run so that they can digitise their ideas quickly.

### Conclusion

Softwares are getting smarter quickly with the opening up of APIs to allow different softwares to communicate and solve problems quickly. The problem of the ground now is access to developers to help SMEs to move forward. Shoot me a message if anyone needs further advise on this matter.
