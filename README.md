# mjen9803-tracker
# <u>READ ME File</u>

## 'CrossFit By Mali - Web Application'

### Introduction

This READ ME file has been created for the Web Application 'CrossFit By Mali'. 
This project includes a backend code for a minimal web server, has a single page architecture for the front end, is responsive on mobile and desktop devices, saves the data to the user's browser for persisent access between sessions (Local Storage), uses GitHub for version control and code repository hosting and is simple to set up and configure on a local computer. 
This file goes into detail on how these elements have been implemented in the development of this Web Application.

### Project Description

This project is a Web Application for a gym called 'CrossFit By Mali'. It is a tracking application that not only marks the users booked classes, but also provides metrics dependent on the number of sessions they book into. Through simple navigation and accessible guidelines, the web app showcases options to book classes, edit bookings, clear recent bookings, return to view recent bookings, alter classes to meet certain metrics, etc. 

The target audience for this web application would be members of the gym 'CrossFit By Mali' who would like to book their classes at the gym, view their metrics and set goals for themeselves dependent on these metrics. Users are able to track their progress through editing class attendence to meet certain metrics goals. 

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

#### Dependencies

Dependencies are external libraries or packages that a project relies on to function correctly (Package Management Basics - Learn Web Development | MDN, 2023).

The main dependency being used in this web application is "Express 4.18.2". This is a popular web application framework for Node.js. It provides a set of features that support web applications and API's. It simplifies the process of handling HTTP requests. Some of the main features include routing, middleware, templating, static file serving and error handling (Kean, 2021). How to install Express 4.18.2 can be found in the 'installation' section of this file.

Another dependency being used in this web application is "Parcel 2.8.3" which supports bundling and buildin web assets. It simplifies the process of setting up a build system for a web application. How to install this dependency can be found in the 'installation' section of this file. 

Package.json is a file used in node.js projects to define the project's dependencies, however it is not a dependency itself. 

When a node.js project is created, it can be ran using 'npm init'. This generates a package.json file in the project's directory. This file would contain information about the project such as its name, author, description and dependencies (if there is any). Package.json is a configuration file that manages and installs dependencies required for a node.js project (Gabby T, 2022).

#### Installation

The following are installations used to support the development of this Web Application. The following section outlines the application configuration.

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
*npm install*
4. Start the web server using:
*npm start*
5. Open your web browser and visit 'http://localhost:1234' to view web application.

Note: node.js and npm (Node Package Manager) must be installed on machine before installation steps can be complete (Downloading and Installing Node.js and Npm | Npm Docs, 2023). Steps to do this are below:
1. Visit official Node.js website: https://nodejs.org/en
2. Download installer
3. Run installer and follow installation wizard instructions
4. Open terminal and type following commands 
- *node -v*
- *npm -v*

Note: package.json is not something that is installed directly, it is a file that you create to manage node.js. As briefly discussed in the 'dependencies' section - to create a package.json file we can do the following.
1. Open terminal
2. Run the command:
- *npm init*
3. Provide information about project
4. Npm will then generate a 'package.json' file with specified metadata.
5. To install the dependencies listed in 'package.json' file you can run the command:
- *npm install*

Further Note: package-lock.json file is automatically generated when the command above 'npm install' is called. It provides deterministic and repoducible builds by locking some of the installed dependencies. It allows for faster and more reliable installations, and allows files to be enables offline or when the device is disconnected from internet connection (Package-Lock.json | Npm Docs, 2023). 

Installing Dependencies (Express) (Week 6 Content: DECO2017 Advanced Web Design, 2015):
1. Open VS code terminal
2. Run this command: 
- *npm install express*
3. In the server.js file import express file 
- *const express = require('express')*
4. Initialise express framework 
- *const app = express();*
5. Serve static files from public folder
- *app.use(express.static('public'));*
5. Serve the index file for the root path 
- *app.get('/', function(req, res) {
 res.sendFile(__dirname + '/public/index.html')
})*
6. Start the server & log a message to the console
- *let server = app.listen(8888, function(){
 console.log("App server is running on port 8888");
});*
7. Run the command
- *node server.js*
8. Open browser & test
9. Add changes to git and commit 
10. In 'package.json' file add new property called 'start':
-  *"scripts": {
    "start": "node server.js"
  },*
11. Start web server
- *npm run start*

Note: before we sync changes with git we have installed an additional file called '.gitignore'. This will organise any folders that should not be uploaded to git, which could take up unnecessary space and bandwidth. 
1. Visit: https://github.com/github/gitignore/blob/main/Node.gitignore
2. Copy template into file and save
3. Commit new changes to git:
- *git push*

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
- *npm install --save-dev parcel*
2. Delete main entry point (remove line)
- *"main": "index.js",*
3. Add following scripts to package.json file
- *"prestart": "parcel build ./public/index.html",
"dev": "parcel serve ./public/index.html"*
4. Update the folder to server static files in server.js file
- *app.use(express.static(__dirname + '/dist'));*
5. Change the file to serve for the root directory
- *res.sendFile(__dirname + '/dist/index.html')*
6. Test
- *npm run dev*

Install SCSS
SCSS (Sass) is a commonly used preprocessor that extends the capabilities of regular CSS. It's main features are as follows (Magnolia International Ltd, 2020):
- Enhanced readbility
- Allows for defined variables to reuse (allowing consistency)
- Allows you to nest CSS selectors within eachother
- Allows you to use mixins for reusable blocks of CSS
The steps to install are as follows (Week 8 Content: DECO2017 Advanced Web Design, 2015):
1. Install using the following command
- *npm install sass*
2. Make a file in public folder called style.*scss (includes typography, layout, etc.)*
3. Import modules into main scss file (if necessary)
4. Run in server
- *npm run dev*
5. Begin styling with CSS
6. Save file and test
- *npm run dev*

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

GitHub allows repositories to turn into websites. It does not require a database. GitHub has saved the application through the HTML. GitHub can be used support the development of successful websites, and GitHub pages can make these applications easier to share world wide. 

GitHub Pages uses Static Website Hosting, which allows the repository to be turned into a website by serving static files (HTML, CSS, JavaScript, etc) directly from the repository. Some of the benefits of this is that it allows for free hosting, version control, continuous deployment, custom domains, etc. 

Hosting the application on GitHub Pages is a form of deployment as it makes the Web Application accessible on the internet, however it is a specific type of deployment which only focusses on static websites (Adding Locally Hosted Code to GitHub - GitHub Docs, 2023). 

Testing:
- User Interface Testing
- Performance Testing
- Accessibility Testing
- Functional Testing

Licence
Not currently applicable with the current system. May be necessary in future developments. 

### How to Navigate Website

The website is very simple to navigate and can be mostly done through a step to step booking process. This navigation is produced naturally for the user through the variety of choices they have to make through the booking process. This process can be seen below.

1. Users must select day they would like to train. Options are:
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
There is also an option to select the 'hide' button underneath each day. This removes the list below and makes the booking system neater and more accessible to users. 

[Start Example](1.png)

2. Once users have selected 1+ days to train they must select their time to train. 
Options are:
- 6am
- 7am
- 8am
- 5pm
- 6pm

3. Once they have selected 1+ checkboxes (times) to train a container will pop up below. This container obtains a 'book' button. Users will click this button to book classes for the week. 

[Checkbox Selection Example](2.png)

4. The first pop up will appear with metrics. These metrics are unique to the individual booking, calculated depending on the number of checkboxes selected. This can be seen via the JavaScript file under the section 'Metrics Calculations'. This is one of the tracking elements for this application. This allows users to book their classes dependent on how many calories they want to burn, reps they want to complete or kilometres they want to run for the week. From this, the user is provided with the following options.

[Book Button to Pop Up 1 Example](3.png)

- Edit (Will take the user directly back to the original page to alter the booking. They can add classes, remove classes, or change times. This has been programmed that the book button will disapear until a change has been made to the original booking. When a change has been made, the 'book' button will reappear.)
- Confirm (Will take the user to the second pop up which confirms the booking has been submitted.)

5. If the user has selected 'Confirm' as per the previous step, they will be taken to the second pop up which confirms the booking has been submitted. The user then has the following options.

[Confirm Button to Pop Up 2 Example](4.png)

- Close (Will close the pop ups, refresh the page to start position, BUT save the checkboxes selected previously. I have done this through the use of local storage. This means the user can return to the page at a later date to see which classes have been selected.)

[Refresh But Save Selected Example](5.png)

- Bookings List (Will again, utilise Local Storage elements to print a list of the selected classes for the week. This information will be displayed on a third pop up.)

6. If the user has selected 'Bookings List' as per the previous step, they will be taken to the third pop up which presents a list of the selected classes. The user then has the following options.

[Bookings List Pop Up 3 Example](6.png)

- Close (Same as above. Will close the pop ups, refresh the page to start position, BUT save the checkboxes selected previously. I have done this through the use of local storage. This means the user can return to the page at a later date to see which classes have been selected.)
- Clear Recent Bookings (If the user would like to start their booking process again, they can make the decision to clear their recent bookings. This again, uses local storage to not only reset whatever has been saved to the browser, but also uses Event Listeners to refresh the page through clicking on the button. If they click this button they will be taken to the beginning, and will start this navigation process again.)

[Refresh Step 1 Example](7.png)
[Refresh Step 2 Example](8.png)

Furthermore, I have utilised buttons and a step by step process through pop ups to form the navigation for my tracking website. 

### Importance of Accessibility

Accessibility is vital when it comes to the design, development and implementation of Web Applications so that they can be used by a wide audience, and remain both inclusive and ethical. The following are how design patterns and techniques have been used to allow for accessible and equal design. 

Firstly, vision impairment and equal access throughout this website has been a large consideration. Contrasting colours have been used to ensure there is a light background against dark text, making the paragraphing stand out more. This can be seen through using a dark blue against white, or a light gray against black. 

Secondly, I have made sure to have clear button names that are easy to understand and interupt. Therefore, if a text to speech function is utilised, those with vidual impairment will have equal access to the content on the site, and will be able to still book without additional assistance. 

Thirdly, I have used large headers with underlines and bold text to make the subject lines clear throughout the application. This makes it easier for viewers to quickly find the content and information they are looking for without scanning the rest of the application. 

Fourthly, I have utilised hover colour changing states for all buttons on the website, in particular the button options on the pop ups. This makes is clear where the users curor is placed, thus improving accessiility. This could also be effective with future developments, with the potential use of screen readers.

Finally, I have ensured that the website is both responsive and dynamic, so that users can choose what display screen they would like to view the website. This means that it can be minimised and expanded to certain dimensions and not ruin the entire structure and layout. Photos of these two display sizes can be found below.

[Desktop Device](desktop.png)
[Mobile Device](mobile.png)

### Comparisons between Mockups and Prototype

[Home Page Original Design](og1.png)

vs

[Start Page Final Design](1.png)

Design Alterations:
- Removed profile box (consideration for future development)
- Removed boxes for three options (booking, class history, metrics) - turned into pop ups instead - allowed for easier navigation
- Removed background image as it again looked too busy and distracting

[Booking Page Original Design](og2.png)

vs

[Booking Container Final Design](2.png)

Design Alterations:
- Removed 'Booking' heading and changed it to 'CrossFit By Mali' (kept design consistency but removed unnecessary headings)
- Wrote out full word for weekdays rather than just the first letter
- Made hover state a rectangle rather than a circle (fit better with full word)
- Removed 'comments for your coach' - users said it was unnecessary 
- Removed back arrow as there is no longer a home page - instead have 'close' button

[Metrics Page Original Design](mock4.png)

vs

[Metrics Pop Up Final Design](final5.png)

Design Alterations:
- Metrics are written in pop up - this allows users to view their metrics and alter bookings to meet certain goals for the week
- Removed boxes as having too many containers in a pop up looked too busy and distracting
- Removed background image as it again looked too busy and distracting

[Class History Page Original Design](og3.png)

vs

[Bookings List Pop Up Final Design](6.png)

Design Alterations:
- Used a pop up rather than external page
- Added 'clear recent bookings' button
- Removed 'previously attended classes' - users said it was unnecessary and didnt relate to data input
- Added 'edit' button to previous pop up - made more navigational sense as per user feedback
- Removed back arrow as there is no longer a home page - instead have 'close' button

### Changes from Web Design Mid-Fidelity Prototype to High-Fidelity Prototype & Justification

The main change I made between my mid-fidelity original design, to my final web application product, was that I utilised pop ups for the navigation rather than switching between different pages. Although I knew I was always going to use a single page architecture for the front end, I thought I would use my HTML to make it look like different pages were being used. After looking at the difference myself and through feedback from peers, I decided a pop up navigation would leave me with a much neater and aesthetically pleasing look. 

The main reason for changes between my original design and final web application, was due to a combination of user testing/feedback, peer feedback, accessibility tests, functionality tests, visual tests and tutor feedback from the original assessment. 

There are design decisions that were made throughout the implementation process to both improve aesthetic apeal, and to assist in accessibility/navigation. To make these decisions user feedback and testing has been undertaken, and considerations from Mid-Fidelity design comments have come into consideration. 

The main piece of feedback I received from my A2 marks, was that I should be using desktop real estate effectively. Therefore, I considered this for my final design, and spread the design out so that it looks aesthetically pleasing when on a desktop device and when making it responsive for a mobile device, everything stacks neatly on top of each other. 

The main piece of feedback I received from external users, was that I should give users the option to go back to their original booking and edit it at a later date. Therefore, I utilised local storage to save the user input, this means if the page is refreshed the browser memorises and recalls the checkboxes selected so that users can go back, check their bookings and edit at a later date.

In my original design, I did not consider local storage and how I was planning to use it in my final product. However, a change I have made between the original design and the final product, is utilising local storage for the following elements:
1. Remembering the checkboxes selected so that the user can return at a later date
2. Function to clear local storage (clear recent bookings) if they change their mind/want to begin booking system again
3. Allows the page to be refreshed at any point and have the checkboxes saved no matter what
4. Same function as above for multiple elements on the web app
5. Track which checkboxes have been checked (aka which classes have been booked) and display them as a list in a pop up

The 5th element in this list is a future development. This function is not currently functioning on the current prototype. This element requires further time and research to function correctly. Two models of this code can be found at the bottom of the JavaScript file. This code is commented out to make sure the rest of the JavaScript functions. Can be uncommented and continue development in future and with input from other web developers if needed. 

Finally, A logo has been added at the bottom of the Web Application. My original design did not incorporate a logo. I have utilised this as a design pattern, with the purpose of establishing brand identity. Because I have used pop ups rather than multiple pages, there was no need for this logo to link back to a 'home page', it is instead used for aesthetic appeal.

### User Testing & Feedback

I made sure to use a variety of user testing and feedback throughout my entire development process to ensure my website functioned to the highest standard, was easy to navigate and accessible to all users on a range of devices. I made sure to test functionality, accessibility, performance and user interface. One of the main techniques I used to test my web application was a Think Aloud Protocol. I gave users a task and they were instructed to complete the task whilst speaking aloud their process in doing so. I have provided a voice recording of one of my think aloud protocols. 

[Download Think Aloud Audio](https://drive.google.com/file/d/17u2S134GGwqSRFlZ910xV14EEv8R5pRk/view?usp=sharing)

### Discussion of Further Iterations/Improvements

To conclude the discussion of current iterations, I have reflected on future improvements that can be made in and with time.
1. Semantic Code
- For future developments, I would like to make my code completely Semantic HTML, as it would support future developers in determining the importance of context of sections in the code.
- Although I have used semantic elements in my code, I would like to improve on this and develop it even more in the future.

2. Booking List using Local Storage
- As discussed above, I would like to utilise local storage to make a booking list.
- This would mean the browser would memorise which checkboxes are selected, and display this in list form within a pop up.
- This is an element I would have added with further research and time to complete the project.
- I have written code for this element (which is coded out at the bottom of the JS file), however it is not currently functioning.
- I would like to make this function in the future.

3. Database
- In future developments I would create an external data base where user input would be saved.
- This would allow the owner of 'CrossFit By Mali' to have access to this information, supporting them in running their business.

4. Deploy on Live Server
- Although it is not necessary for this assignment, in the future it would be important to consider deploying the web application on a live server with a unique domain.

5. License
- Although not necessary for this assignment, a licence to run the web application will be a necessary consideration in future developments.

6. Screen Readers
- Future developments could look at how screen readers can be implemented into the code to improve accessibility even further. 

### Contributing

All contributions for future modifications are welcomed and appreciated. 

### Design Principles and Elements

I have been consistent with my design principles and elements from my designs into my mock ups and then into my final designs.

Firstly, the main principle I have used is contrast, particuarly through the use of colours. This allows my text to stand out against the background, improving accessibility factors.

Secondly, I have again used space. It continued to be important for me that the content on my website was not too close together. In this case, I have used many breaks in the code, and borders to ensure this was the case. 

Finally, I incorporated allignment and balance to maintain a professional looking website. I ensured that all of my images, text, headings and videos were aligned correctly and looked aesthetically pleasing. 

### Conclusion

To conclude, this web application will provide target users with all of the information they are seeking in regards to booking their classes and viewing metrics, with simple navigation, equal accessibility and responsive behaviour. 

Descriptive code comments have been utilised in the CSS, JavaScript and HTML files to ensure future prototypes and developments can be easily altered dependent on certain sections of the code. 

All images have been included in the file library within this Git repository, and have been referenced in APA style below. Please note; dates 'retrieved' is not accurate as references were transferred to APA 7th formatting at a later date.

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

