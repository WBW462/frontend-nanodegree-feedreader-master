# P6-Feed Reader Testing

To view use: <https://github.com/WBW462/frontend-nanodegree-feedreader-master>

# About

Front-End Web Developer Nanodegree Feed Reader Testing, is a project within the Udacity Front-End Web Developer Nanodegree. In this project, I am given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now I'm left with an application with an incomplete test suite.
# Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.  I use Jasmine to write several tests against a provided pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.  Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS, and JavaScript - an extremely important skill when changing teams or joining a new company.  Good tests provide the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.

# To Run

1. Download or fork the application from: <https://github.com/WBW462/frontend-nanodegree-feedreader-master>
2. Select index.html to start the app.

# To Use the Application:

Once you have selected index.html to start the app you will notice the application opens to the Udacity Blog.  There is a listing directly below with links to various articles having to do with Udacity.  In the upper left-hand corner, there is a Hamburger Menu icon that when click provides additional options for other feeds.  When you scroll to the bottom of the page you'll notice it's shaded grey and indicates at the beginning Jasmine 2.1.2.  Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.  It is in this section that Jasmine indicates whether your code will meet expectations.

Looking at this section you will notice a green heading that states "7 specs, 0 failures".  This indicates seven specifications were tested and none failed. These tests are broken down into suites and so you'll notice the first suite is titled "RSS Feeds" and it has three specifications "are defined", "url is defined", and "name is defined".  Looking at the jasmine/spec/feedreader.js file you'll notice these suites described along with the specifications or tests listed.  Because these specifications are met or tests have passed, Jasmine shows green and "7 specs, 0 failures".

You can modify these specifications or tests to see how they indicate your specifications or tests are not being met.  For example, if you modify line 22 from: expect(allFeeds).toBeDefined(); to: expect(feeds).toBeDefined(); and refresh the application it will now be red and will show "7 specs, 1 failure".  You can continue making such changes to see how it will affect the various tests.

# More Information:

This work is of mine own, modifying provided assets and researching ideas and problems from other Udacity students and Udacity instructors in the discussion forums, and various websites, such as MDN, Google, Stack Overflow, JShint, http://jasmine.github.io/, etc.
