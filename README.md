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

#### Prerequisites

#### Installation

#### Technologies Used

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

2. Once users have selected 1+ days to train they must select their time to train. 
Options are:
- 6am
- 7am
- 8am
- 5pm
- 6pm

3. Once they have selected 1+ checkboxes (times) to train a container will pop up below. This container obtains a 'book' button. Users will click this button to book classes for the week. 

4. The first pop up will appear with metrics. These metrics are unique to the individual booking, calculated depending on the number of checkboxes selected. This can be seen via the JavaScript file under the section 'Metrics Calculations'. This is one of the tracking elements for this application. This allows users to book their classes dependent on how many calories they want to burn, reps they want to complete or kilometres they want to run for the week. From this, the user is provided with the following options.
- Edit (Will take the user directly back to the original page to alter the booking. They can add classes, remove classes, or change times. This has been programmed that the book button will disapear until a change has been made to the original booking. When a change has been made, the 'book' button will reappear.)
- Confirm (Will take the user to the second pop up which confirms the booking has been submitted.)

5. If the user has selected 'Confirm' as per the previous step, they will be taken to the second pop up which confirms the booking has been submitted. The user then has the following options.
- Close (Will close the pop ups, refresh the page to start position, BUT save the checkboxes selected previously. I have done this through the use of local storage. This means the user can return to the page at a later date to see which classes have been selected.)
- Bookings List (Will again, utilise Local Storage elements to print a list of the selected classes for the week. This information will be displayed on a third pop up.)

6. If the user has selected 'Bookings List' as per the previous step, they will be taken to the third pop up which presents a list of the selected classes. The user then has the following options.
- Close (Same as above. Will close the pop ups, refresh the page to start position, BUT save the checkboxes selected previously. I have done this through the use of local storage. This means the user can return to the page at a later date to see which classes have been selected.)
- Clear Recent Bookings (If the user would like to start their booking process again, they can make the decision to clear their recent bookings. This again, uses local storage to not only reset whatever has been saved to the browser, but also uses Event Listeners to refresh the page through clicking on the button. If they click this button they will be taken to the beginning, and will start this navigation process again.)

Furthermore, I have utilised buttons and a step by step process through pop ups to form the navigation for my tracking website. 

### Justifications for Implementation Decisions

There are a few main design decisions that I made throughout the implementation process not only to improve aesthetic apeal but also to assist you in further development and navigation support. To make these decisions user feedback and testing has been undertaken, and considerations from proposal and design marks have come into consideration.

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

### References

Canvas LMS. (2015). Retrieved November 9, 2022, from Sydney.edu.au website: https://canvas.sydney.edu.au/courses/44303/assignments/394774

CSS Horizontal Navigation Bar. (2022). Retrieved November 9, 2022, from W3schools.com website: https://www.w3schools.com/css/css_navbar_horizontal.asp

How To Create a Dropup Menu. (2022). Retrieved November 10, 2022, from W3schools.com website: https://www.w3schools.com/howto/howto_css_dropup.asp

wave line clip art png PNG image with transparent background png - Free PNG Images. (2019). Retrieved November 13, 2022, from TopPNG website: https://toppng.com/free-image/wave-line-clip-art-png-PNG-free-PNG-Images_110332

‌Mollymook Golf Club | Troon.com. (2022, November 13). Retrieved November 13, 2022, from Troon website: https://www.troon.com/locations/mollymook-golf-club/

‌Day, O. (2022). Mollymook Surf Beach. Retrieved November 13, 2022, from Visitnsw.com website: https://www.visitnsw.com/destinations/south-coast/jervis-bay-and-shoalhaven/mollymook/attractions/mollymook-surf-beach

‌Banks, K. (2019, April 17). Mollymook Milton Ulladulla news April 2019 | Mollymook News. Retrieved November 13, 2022, from Mollymookbeachwaterfront.com.au website: https://mollymookbeachwaterfront.com.au/mollymook-news/mollymook-milton-ulladulla-quarterly-e-news/mollymook-milton-ulladulla-e-news-april-2019/

‌Pigeon House Mountain Didthul walking track. (2022). Retrieved November 13, 2022, from NSW National Parks website: https://www.nationalparks.nsw.gov.au/things-to-do/walking-tracks/pigeon-house-mountain-didthul-walking-track

‌HTML input tag. (2022). Retrieved November 13, 2022, from W3schools.com website: https://www.w3schools.com/tags/tag_input.asp

‌

