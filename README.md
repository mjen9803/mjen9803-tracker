# mjen9803-tracker
# <u>READ ME File</u>

## 'CrossFit By Mali - Web Application'

## Table of Contents

### Introduction

This READ ME file has been created for the Web Application 'CrossFit By Mali'. 
This project includes a backend code for a minimal web server, has a single page architecture for the front end, is responsive on mobile and desktop devices, saves the data to the user's browser for persisent access between sessions (Local Storage), uses GitHub for version control and code repository hosting and is simple to set up and configure on a local computer. 
This file goes into detail on how these elements have been implemented in the development of this Web Application.

### Project Description

This project is a Web Application for a gym called 'CrossFit By Mali'. It is a tracking application that not only marks the users booked classes, but also provides metrics dependent on the number of sessions they book into. Through simple navigation and accessible guidelines, the web app showcases options to book classes, edit bookings, clear recent bookings, return to view recent bookings, alter classes to meet certain metrics, etc. 

### Getting Started

#### Usage

Usage and how to use the project once it is set up can be viewed in the navigation section of the read me (below). The navigation section utilises images and steps to demonstrate instructions and support users in interacting with the Web Application. 

#### Prerequisites

Before running this Web Application, it is important that you obtain the following prerequisites installed and set up on your device.

- Operating System: Windows 10, macOS, Linux, iOS, Android OS, Microsoft Windows.
- (Western Governors University, 2021)

- Programming Language: JavaScript
- (Sruthi Veeraraghavan, 2015)

- Software Tools: Git (version control system) and Visual Studio Code (recommended code editor).

- Hardware Requirements: Min 4GB RAM, 2GHz processor, and 10GB free disk space.
- (System Requirements - Google Web Designer Help, 2019)

The core prerequisites are familiarity with HTML, CSS and JavaScript Languages.

### Dependencies

Dependencies are external libraries or packages that a project relies on to function correctly (Package Management Basics - Learn Web Development | MDN, 2023).

The main dependency being used in this web application is "Express 4.18.2". This is a popular web application framework for Node.js. It provides a set of features that support web applications and API's. It simplifies the process of handling HTTP requests. Some of the main features include routing, middleware, templating, static file serving and error handling (Kean, 2021). How to install Express 4.18.2 can be found in the 'installation' section of this file.

Another dependency being used in this web application is "Parcel 2.8.3" which supports bundling and buildin web assets. It simplifies the process of setting up a build system for a web application. How to install this dependency can be found in the 'installation' section of this file. 

Package.json is a file used in node.js projects to define the project's dependencies, however it is not a dependency itself. 

When a node.js project is created, it can be ran using 'npm init'. This generates a package.json file in the project's directory. This file would contain information about the project such as its name, author, description and dependencies (if there is any). Package.json is a configuration file that manages and installs dependencies required for a node.js project (Gabby T, 2022).

#### Installation

The following are installations used to support the development of this Web Application. 

Install Git
1. Sign into GitHub Account
2. Create new repository and make sure it is public
3. Open VS code and open source control menu (sign into GitHub)
4. Open cloned repository 
5. Open VS terminal and stage new file to repo (git add.html)
6. Commit files to repository & add messages
7. May be prompted to set up name and email address (git config --global user.email "you@example.com"
git config --global user.name "Your Name")
8. Use 'git push' to upload changes

To run this web application locally the following steps must be followed (Adding Locally Hosted Code to GitHub - GitHub Docs, 2023). 
1. Clone the repository to your local machine using the following:
git clone https://github.com/mjen9803/mjen9803-tracker.git
2. Navigate to the project directory:
cd mjen9803-tracker
3. Install project dependencies using 'package.json' file:
npm install
4. Start the web server using:
npm start
5. Open your web browser and visit 'http://localhost:1234' to view web application.

Note: node.js and npm (Node Package Manager) must be installed on machine before installation steps can be complete (Downloading and Installing Node.js and Npm | Npm Docs, 2023). Steps to do this are below:
1. Visit official Node.js website: https://nodejs.org/en
2. Download installer
3. Run installer and follow installation wizard instructions
4. Open terminal and type following commands 
- node -v
- npm -v

Note: package.json is not something that is installed directly, it is a file that you create to manage node.js. As briefly discussed in the 'dependencies' section - to create a package.json file we can do the following.
1. Open terminal
2. Run the command:
- npm init
3. Provide information about project
4. Npm will then generate a 'package.json' file with specified metadata.
5. To install the dependencies listed in 'package.json' file you can run the command:
- npm install

Further Note: package-lock.json file is automatically generated when the command above 'npm install' is called. It provides deterministic and repoducible builds by locking some of the installed dependencies. It allows for faster and more reliable installations, and allows files to be enables offline or when the device is disconnected from internet connection (Package-Lock.json | Npm Docs, 2023). 

Installing Dependencies (Express) (Week 6 Content: DECO2017 Advanced Web Design, 2015):
1. Open VS code terminal
2. Run this command: 
- npm install express
3. In the server.js file import express file 
- const express = require('express')
4. Initialise express framework 
- const app = express();
5. Serve static files from public folder
- app.use(express.static('public'));
5. Serve the index file for the root path 
- app.get('/', function(req, res) {
 res.sendFile(__dirname + '/public/index.html')
})
6. Start the server & log a message to the console
- let server = app.listen(8888, function(){
 console.log("App server is running on port 8888");
});
7. Run the command
- node server.js
8. Open browser & test
9. Add changes to git and commit 
10. In 'package.json' file add new property called 'start':
-  "scripts": {
    "start": "node server.js"
  },
11. Start web server
- npm run start

Note: before we sync changes with git we have installed an additional file called '.gitignore'. This will organise any folders that should not be uploaded to git, which could take up unnecessary space and bandwidth. 
1. Visit: https://github.com/github/gitignore/blob/main/Node.gitignore
2. Copy template into file and save
3. Commit new changes to git:
- git push

Install Parcel
Parcel is a web application that makes the process of building and bundling web application assets such as JavaScript, CSS and HTML much easier. It automates the bundling process and provides a straightforward configuration setup (Yang, 2022). The main purposes and features of Parcel include (Week 8 Content: DECO2017 Advanced Web Design, 2015):
- Minimal Configuration
- Supports various asset types
- Dependency Resolution
- Fast and efficient
- Incorporates Hot Module Replacement (HMR) which allows for updates to the application in the browser as the code is edited.
- Provides a plugin system
The steps to install are as follows:
1. Install using following command
- npm install --save-dev parcel
2. Delete main entry point (remove line)
- "main": "index.js",
3. Add following scripts to package.json file
- "prestart": "parcel build ./public/index.html",
"dev": "parcel serve ./public/index.html"
4. Update the folder to server static files in server.js file
- app.use(express.static(__dirname + '/dist'));
5. Change the file to serve for the root directory
- res.sendFile(__dirname + '/dist/index.html')
6. Test
- npm run dev

Install SCSS
SCSS (Sass) is a commonly used preprocessor that extends the capabilities of regular CSS. It's main features are as follows (Magnolia International Ltd, 2020):
- Enhanced readbility
- Allows for defined variables to reuse (allowing consistency)
- Allows you to nest CSS selectors within eachother
- Allows you to use mixins for reusable blocks of CSS
The steps to install are as follows (Week 8 Content: DECO2017 Advanced Web Design, 2015):
1. Install using the following command
- npm install sass
2. Make a file in public folder called style.scss (includes typography, layout, etc.)
3. Import modules into main scss file (if necessary)
4. Run in server
- npm run dev
5. Begin styling with CSS
6. Save file and test
- npm run dev

#### Technologies Used

Programming Languages
- HTML (HyperText Markup Language)
- CSS (Cascading Style Sheets)
- JavaScript

Front-End Frameworks/Libraries
- Express 4.18.2
- Parcel 2.8.3

Back-End Technologies:
- Node.js
- Express.js

Databases:
- Not applicable for current model (more detail in future innovations section of this file)

Build Tools:
- Parcel 2.8.3

Version Control:
- Git

Deployment:
For the purpose of the assignment given, the website does not currently have to be deployed online with a live domain. However, it is being hosted on a website called GitHub pages. 
GitHub allows repositories to turn into websites. It does not require a database. GitHub has saved the application through the HTML. GitHub can be used support the development of successful websites, and GitHub pages can make these applications easier to share world wide. GitHub Pages uses Static Website Hosting, which allows the repository to be turned into a website by serving static files (HTML, CSS, JavaScript, etc) directly from the repository. Some of the benefits of this is that it allows for free hosting, version control, continuous deployment, custom domains, etc. 
Hosting the application on GitHub Pages is a form of deployment as it makes the Web Application accessible on the internet, however it is a specific type of deployment which only focusses on static websites (Adding Locally Hosted Code to GitHub - GitHub Docs, 2023). 

Testing:
- User Interface Testing
- Performance Testing
- Accessibility Testing
- Functional Testing

Licence
Not currently applicable with the current system. May be necessary in future developments. 

#### License

#### Application Configuration

#### Deployment Procedures

### How to Navigate Website

The website is very simple to navigate and can be mostly done through a step to step booking process. This navigation is produced naturally for the user through the variety of choices they have to make through the booking process. This process can be seen below.

1. Users must select day they would like to train. Options are:
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
There is also an option to select the 'hide' button underneath each day. This removes the list below and makes the booking system neater and more accessible to users. 

<!-- Screenshot 1 -->

2. Once users have selected 1+ days to train they must select their time to train. 
Options are:
- 6am
- 7am
- 8am
- 5pm
- 6pm

3. Once they have selected 1+ checkboxes (times) to train a container will pop up below. This container obtains a 'book' button. Users will click this button to book classes for the week. 

<!-- Screenshot 2 -->

4. The first pop up will appear with metrics. These metrics are unique to the individual booking, calculated depending on the number of checkboxes selected. This can be seen via the JavaScript file under the section 'Metrics Calculations'. This is one of the tracking elements for this application. This allows users to book their classes dependent on how many calories they want to burn, reps they want to complete or kilometres they want to run for the week. From this, the user is provided with the following options.

<!-- Screenshot 3 (Pop up 1) -->

- Edit (Will take the user directly back to the original page to alter the booking. They can add classes, remove classes, or change times. This has been programmed that the book button will disapear until a change has been made to the original booking. When a change has been made, the 'book' button will reappear.)
- Confirm (Will take the user to the second pop up which confirms the booking has been submitted.)

5. If the user has selected 'Confirm' as per the previous step, they will be taken to the second pop up which confirms the booking has been submitted. The user then has the following options.

<!-- Screenshot 4 (Second pop up) -->

- Close (Will close the pop ups, refresh the page to start position, BUT save the checkboxes selected previously. I have done this through the use of local storage. This means the user can return to the page at a later date to see which classes have been selected.)

<!-- Screenshot 5 (refresh but save checkbox) -->

- Bookings List (Will again, utilise Local Storage elements to print a list of the selected classes for the week. This information will be displayed on a third pop up.)

6. If the user has selected 'Bookings List' as per the previous step, they will be taken to the third pop up which presents a list of the selected classes. The user then has the following options.

<!-- Screenshot 6 (pop up 3) -->

- Close (Same as above. Will close the pop ups, refresh the page to start position, BUT save the checkboxes selected previously. I have done this through the use of local storage. This means the user can return to the page at a later date to see which classes have been selected.)
- Clear Recent Bookings (If the user would like to start their booking process again, they can make the decision to clear their recent bookings. This again, uses local storage to not only reset whatever has been saved to the browser, but also uses Event Listeners to refresh the page through clicking on the button. If they click this button they will be taken to the beginning, and will start this navigation process again.)

<!-- Screenshot 7 (refreshed/reset page) -->

Furthermore, I have utilised buttons and a step by step process through pop ups to form the navigation for my tracking website. 

### Justifications for Implementation Decisions

There are design decisions that were made throughout the implementation process to both improve aesthetic apeal, and to assist in accessibility/navigation. To make these decisions user feedback and testing has been undertaken, and considerations from Mid-Fidelity design comments have come into consideration. 

Firstly, a logo is used at the top of the header as a design pattern. Although this usually indicates a hyperlink to the homepage, user feedback indicated and the logo plus the home button on the navigation bar were together not necessary. So to simplify the design, the only link to the home page is through the navigation bar.

Secondly, markers suggested removing thick dark lines from around text, borders, navigation bars, etc; to allow for a more 'professional' look. This was the main reasoning for choosing the dotted border, as it allowed for a more sleek and realistic website look. 

Thirdly, user feedback suggested that the links underneath my headings as per original designs was both messy and unnecessary. Nevertheless, it was still important that I sourced where all of my images were from, and gave users the ability to click on the image and see further information. Thus, rather than having a hyperlink to an external page, the user can click on the image and be automatically taken to the page it is sourced from, then easily return back to my website.

Fourthly, in my designs, there were some pages with multiple images next to each other in each page. Although in my original designs this did look cohesive, with the other design changes I made, when I actually coded my website it did not match well. I feel as though the website now looks a lot neater and clean. 

Fifthly, when it comes to the website being both responsive and dynamic, I was able to ensure the website was able to be minimised without having to change the structure of the navigation bar. On reflection, if I had more time to complete this project, and to undertake heavy testing, I would make a pop out navigation bar to give users both options, depending on what screen they are using. Until then, I was able to make all text, headings, images and the navigation bar dynamic.

Finally, with the drop down lists on the FAQs page, I thought it would be easier if I just had the user hover over the questions to retrieve their answers, rather than clicking. This allows the website to close the drop up lists after reading, creating a more cohesive design. 

Therefore, these are the design decisions made in the development of this project, and how they were implemented.

### Importance of Accessibility

Accessibility is vital when it comes to the design, development and implementation of websites. The following are how design patterns and techniques have been used to allow for accessible and equal design. 

Firstly, vision impairment and equal access throughout this website has been a large consideration. Contrasting colours have been used to ensure there is a light background against dark text, making the paragraphing stand out more, and allowing it to be easier to read. 

Secondly, I have included audio boxes in which read out the paragraphs through a text to speech function. This allows those with severe visual impairment to still have equal access to the content on the site. 

Thirdly, large headers with underlines have been used to make it clear the subject lines of each web page. This makes it easier for viewers to quickly find the content and information they are looking for without scanning the paragraphs. 

Fourthly, I have used hover colour changing for a few elements on my website, in particular the navigation bar, to make it clear where the users cursor is placed, thus improving accessibility. This could also be effective with future developments, with the potential use of screen readers. 

Fifthly, I have decided to use singular large images on each page, so everybody that views my website can see this in clear detail.

Finally, I have ensured that the website is both responsive and dynamic, so that users can choose what display screen they would like to view the website. This means it can be minimised and expanded to certain dimensions and not ruin the structure and layout.

### Comparisons between Mockups and Prototype

[Home Page Mockup](mock1.png)

vs

[Home Page Final](final3.png)

Design Alterations:
- Removing thick black lines around borders
- Removing unncessary search bar
- Removing unnessary like button
- Removing unncessary share button
- Thinner, more professional navigation bar
- Removing caption underneath video
- Removing blue container
- Adding dotted border
- Changing the responsivity design of the website

[History Page Mockup](mock2.png)

vs

[History Page Final](final2.png)

Design Alterations:
- Removing thick black lines around borders
- Removing unncessary search bar
- Removing unnessary like button
- Removing unncessary share button
- Thinner, more professional navigation bar
- Removing caption underneath image
- Removing blue container
- Adding dotted border
- Changing the responsivity design of the website
- Having one clear image rather than 3 small images

[Attractions Page Mockup](mock3.png)

vs

[Attractions Page Final](final1.png)

Design Alterations:
- Removing thick black lines around borders
- Removing unncessary search bar
- Removing unnessary like button
- Removing unncessary share button
- Thinner, more professional navigation bar
- Removing caption underneath image
- Removing blue container
- Adding dotted border
- Changing the responsivity design of the website

[Contact Us Page Mockup](mock4.png)

vs

[Contact Us Page Final](final5.png)

Design Alterations:
- Removing thick black lines around borders
- Removing unncessary search bar
- Removing unnessary like button
- Removing unncessary share button
- Thinner, more professional navigation bar
- Removing caption underneath image
- Removing blue container
- Adding dotted border
- Changing the responsivity design of the website
- Having one clear image rather than 2 small images
- Made the box a lighter grey colour


[FAQs Page Mockup](mock5.png)

vs

[FAQs Page Final](final6.png)

Design Alterations:
- Added a confirmation page as seen [here](final4.png)
- Removing thick black lines around borders
- Removing unncessary search bar
- Removing unnessary like button
- Removing unncessary share button
- Thinner, more professional navigation bar
- Removing caption underneath image
- Removing blue container
- Adding dotted border
- Changing the responsivity design of the website
- Spacing out the text and text boxes evenly (allowing for a more professional design)
- Drop up lists rather than drop down lists
- Centered text

### Changes from Web Design Mid-Fidelity Prototype to High-Fidelity Prototype & Justification

### Discussion of Further Iterations/Improvements

To conclude the discussion of current iterationss, I have reflected on future improvements that can be made in and with time.
- Second responsivity option - pop out navigation/scrolling option
- Extension of sharing option - connection to different social medias
- Extension of 'Let's talk Australia' - expanding on other tourist destinations surrounding Mollymook beach
- Attaching the 'Contact Us' information to an external data base so records can actually be collected and not just visually demonstrated
- Designing a more high end logo
- Adding a key word finder box
- Adding a feedback/suggestions section

TALK ABOUT THE FOLLOWING
- MAKING THE CODE SEMANTIC FOR FUTURE DEVELOPERS
- ADDING A BOOKING LIST USING LOCAL STORAGE
- HOW I USED FEEDBACK FROM A3 TO MAKE FINAL EDITS
- FUTURE COULD USE A DATABASE
- FUTURE CALLED DEPLOY ON AN EXTERNAL LIVE SERVER
- LICENSE

### User Testing & Feedback

- THINK ALOUD PROTOCOL PUT AUDIO IN

### Contributing

### Design Principles and Elements

I have been consistent with my design principles and elements from my designs into my mock ups and then into my final designs.

Firstly, the main principle I have used is contrast, particuarly through the use of colours. This allows my text to stand out against the background, improving accessibility factors.

Secondly, I have again used space. It continued to be important for me that the content on my website was not too close together. In this case, I have used many breaks in the code, and borders to ensure this was the case. 

Finally, I incorporated allignment and balance to maintain a professional looking website. I ensured that all of my images, text, headings and videos were aligned correctly and looked aesthetically pleasing. 

### Conclusion

To conclude, this website will provide target users with all of the information they are seeking, with simple navigation, equal accessibility and responsive behaviour. 

Descriptive code comments have been utilised in the CSS and HTML files to ensure future prototypes and developments can be easily altered dependent on certain sections of the code. 

All images have been included in the file library within this replit document, and have been referenced in APA style below. Please note; dates 'retrieved' is not accurate as references were transferred to APA formatting at a later date.

### Acknowledgments

### References (APA 7th)

#### All references below are cited throughout the HTML, CSS and JavaScript files through the use of comments

How to include images in Visual Studio Code HTML (Example) | Treehouse Community. (2019, August 17). Treehouse. https://teamtreehouse.com/community/how-to-include-images-in-visual-studio-code-html#:~:text=So%20assuming%20you've%20created,src%22%20attribute%20within%20that%20tag.

Fitzgerald, A. (2023, May 26). How to Vertically & Horizontally Center an Image in HTML & CSS. Hubspot.com; HubSpot. https://blog.hubspot.com/website/center-an-image-in-html#:~:text=In%20your%20CSS%20code%2C%20find,the%20div)%20vertically%20and%20horizontally.

Western Governors University. (2021, April). 5 Most Popular Operating Systems. Western Governors University; Western Governors University. https://www.wgu.edu/blog/5-most-popular-operating-systems1910.html#close

Sruthi Veeraraghavan. (2015, May 17). Top 20 Best Programming Languages To Learn in 2023. Simplilearn.com; Simplilearn. https://www.simplilearn.com/best-programming-languages-start-learning-today-article

‌System requirements - Google Web Designer Help. (2019). Google.com. https://support.google.com/webdesigner/answer/3232604?hl=en

Package management basics - Learn web development | MDN. (2023, May 8). Mozilla.org. https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management

Gabby T. (2022, February 15). The Basics of Package.json. The NodeSource Blog - Node.js Tutorials, Guides, and Updates; The NodeSource Blog #shoptalk | The Enterprise Node CompanyTM Providing Enterprise Node.js Training, Support, Software & Consulting, Worldwide. https://nodesource.com/blog/the-basics-of-package-json/#:~:text=The%20package.,modules%2C%20packages%2C%20and%20more.

Downloading and installing Node.js and npm | npm Docs. (2023). Npmjs.com. https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

Adding locally hosted code to GitHub - GitHub Docs. (2023). GitHub Docs. https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github

Kean, K. (2021, December 11). What Is Express.js and Why Should You Use It? MUO; MUO. https://www.makeuseof.com/what-is-express/

Week 6 Content: DECO2017 Advanced Web Design. (2015). Sydney.edu.au. https://canvas.sydney.edu.au/courses/48447/pages/week-6-content?module_item_id=1922213

package-lock.json | npm Docs. (2023). Npmjs.com. https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json

Yang, K. (2022, September 28). How to Bundle a Web App with Parcel.js. Digitalocean.com; DigitalOcean. https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js

Week 8 Content: DECO2017 Advanced Web Design. (2015). Sydney.edu.au. https://canvas.sydney.edu.au/courses/48447/pages/week-8-content?module_item_id=1938316

Magnolia International Ltd. (2020). IMPORTANCE OF SCSS. Codeit.mk. https://codeit.mk/home/followUs/blog/IMPORTANCE-OF-SCSS.html#:~:text=SCSS%20allows%20variables%20%E2%80%94%20Avoid%20repeating,than%20repeating%20the%20color%20value.

Adding locally hosted code to GitHub - GitHub Docs. (2023). GitHub Docs. https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github

‌

‌

‌

‌

‌
‌

‌
‌
‌
‌
‌
‌

‌



‌



‌
‌

