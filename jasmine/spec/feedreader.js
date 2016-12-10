/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This is our second test in this suite - it is a test that loops
         * through each feed in the allFeeds object and ensures it has a URL
         * defined and that the URL is not empty.
         */
        it('url is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        /* This is the last test in this suite - it is a test that loops
         * through each feed in the allFeeds object and ensures it has a name
         * defined and that the name is not empty.
         */
        it('name is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });
    /* This is our second test suite - a test suite just contains
     * a related set of tests. This suite is all about the menu functionality
     * in our application.
     */
    describe('The menu', function() {
        /* This is our first test in this suite - it tests to make sure that
         * the menu elemental is hidden by default.
         */
        it('is hidden', function() {
            expect($(document.body).hasClass('menu-hidden')).toBe(true);
        });
        /* This is the second test in this suite - it is a test that ensures
         * the menu changes visibility when the menu icon is clicked. This
         * test has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('displays when clicked and hides when clicked again', function() {
            $('a.menu-icon-link').click();
            expect(document.body.className).not.toContain('menu-hidden');
            $('a.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
        });
    });
    /* This is our third test suite - a test suite just contains
     * a related set of tests. This suite is all about the loadFeed for our
     * Initial Entries in our application.
     */
    describe('Initial Entries', function() {
        /* This is our only test in this suite - it tests to ensure when the
         * loadFeed function is called and completes its work, there is at
         * least a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        it('there is at least one entry in the feed container', function() {
            entry = $('.feed').contents().find('.entry').size();
            expect(entry).not.toBe(0);
        });
    });
    /* This is our fourth and last test suite - a test suite
     * contains a related set of tests.  This suite is about
     * the new feed selection"
     */
    describe('New Feed Selection', function() {
        /* This is our only test in this suite - it tests to
         * ensures when a new feed is loaded by the
         * loadFeed function that the content actually changes.
         */
        beforeEach(function(done) {
            loadFeed(1, function() {
                feed = $('.feed').html();
                done();
            });
        });
        it('content changes when a new feed is loaded', function(done) {
            loadFeed(0, function() {
                expect($('.feed').html()).not.toEqual(feed);
                done();
            });
        });
    });
}());
