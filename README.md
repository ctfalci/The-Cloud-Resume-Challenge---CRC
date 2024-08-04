# The Cloud Resume Challenge - A Tweaked version 🙂.

## READ THIS FIRST
#### Check out this tweaked version of the CRC to help you enhance and level up your career from 0️⃣ to ☁️ computing with these awesome projects, divided into chunks for better comprehension and applicability. This approach will help you develop your skills and become a well-rounded tech professional. For effective learning, please divide the project over 2 months and set weekly goals to work on it accordingly. My recommendation is to spend 2 weeks on each of 4 sections (e.g., sections 1-4 in the first 2 weeks, sections 5-8 in the second 2 weeks). This will give you plenty of time to digest the content and learn. Taking written notes is also crucial to your development.


### 1. Certification 
Your resume needs to have the AZ-900 certification on it. This is an introductory certification that orients you on the Azure cloud – if you have a more advanced Azure cert, that’s fine but not expected. You can sit this exam online for $100 USD.
There's plenty of resources, but the Microsoft's self-paced [training](https://learn.microsoft.com/en-us/training/courses/az-900t00) and the glorious content of the [Azure guru John Savill](https://www.youtube.com/watch?v=pY0LnKiDwRA&list=PLlVtbbG169nED0_vMEniWBQjSoxTsBYS3) you should be fine.


### 2. HTML
Your resume needs to be written in HTML. Not a Word doc, not a PDF. [Here](https://www.youtube.com/watch?v=mU6anWqZJcc) is an example of what I mean.

### 2.1 CSS
Your resume needs to be styled with CSS. No worries if you’re not a designer – neither am I. It doesn’t have to be fancy. But we need to see something other than raw HTML when we open the webpage.
But to don't waste your time, I added a smart step here, download a template and edit yourself [accordingly](https://www.jotform.com/blog/25-free-html-resume-templates-for-your-successful-online-job-application-82756/)) to your needs 🖖

### 2.3 Static Website
Your HTML resume should be deployed online as an [Azure Storage static website using this tutorial.](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website) or this one if you're more [visual and prefer videos](https://www.youtube.com/watch?v=gYpNC_tdbQQ)

### 2.4 HTTPS
The Azure Storage website URL should use HTTPS for security. You will need to use Azure CDN to help with this. This ['Tut' should help you crack the code](https://dev.to/balop3e/hosting-a-static-website-on-azure-storage-with-azure-cdn-3788)

### 3. DNS
Point a custom DNS domain name to the Azure CDN endpoint, so your resume can be accessed at something like `my-c00l-resume-website.com`. You can use Azure DNS or any other DNS provider for this. A domain name usually costs about ten bucks to [register, but namecheap's name already says, it's cheap, then that's my $0.02](https://www.namecheap.com/).

### 4. Javascript
Your resume webpage should include a visitor counter that displays how many people have accessed the site. You will need to write a bit of Javascript to make this happen. [Here](https://example.com) is a helpful [tutorial to get you started in the right direction](freecodecamp.org).

### 5. Database
The visitor counter will need to retrieve and update its count in a database somewhere. I suggest you use the Table API of Azure’s CosmosDB for this. (Use serverless capacity mode for the database and you’ll pay essentially nothing, unless you store or retrieve much more data than this project requires.)

### 6. API
Do not communicate directly with CosmosDB from your Javascript code. Instead, you will need to create an API that accepts requests from your web app and communicates with the database. I suggest using Azure Functions with an HTTP trigger for this. They will be free or close to free for what we are doing.

### 7. Python
You will need to write a bit of code in the Azure Function; you could use more Javascript, but it would be better for our purposes to explore Python – a common language used in back-end programs and scripts – and its Azure SDK. [Here](https://example.com) is a good, free Python tutorial.

### 8. Tests
You should also include some tests for your Python code. [Here](https://example.com) are some resources on writing good Python tests.

### 9. Infrastructure as Code
You should not be configuring your API resources – the Azure Function, the CosmosDB – manually, by clicking around in the Azure console. Instead, define them in an Azure Resource Manager (ARM) template on a Consumption plan. This is called “infrastructure as code” or IaC. It saves you time in the long run.

### 10. Source Control
You do not want to be updating either your back-end API or your front-end website by making calls from your laptop, though. You want them to update automatically whenever you make a change to the code. (This is called continuous integration and deployment, or CI/CD.) [Create a GitHub repository for your backend code.](github.com)

### 11. CI/CD (Back end)
Set up GitHub Actions such that when you push an update to your ARM template or Python code, your Python tests get run. If the tests pass, the ARM application should get packaged and deployed to Azure.

### 12. CI/CD (Front end)
Create a second GitHub repository for your website code. Create GitHub Actions such that when you push new website code, the Azure Storage blob automatically gets updated. (You may need to purge your Azure CDN endpoint in the code as well.) Important note: **DO NOT** commit Azure credentials to source control! Bad hats will find them and use them against you!

### 13. Blog Post
Finally, in the text of your resume, you should link a short blog post describing some things you learned while working on this project. [Dev.to](https://dev.to) or [Hashnode](https://hashnode.com) are great places to publish if you don’t have your own blog.

And that’s the gist of it! For strategies, tools, and further challenges to help you get hired in cloud, check out the [Azure edition of the Cloud Resume Challenge book](https://cloudresumechallenge.dev/docs/the-challenge/azure/).
