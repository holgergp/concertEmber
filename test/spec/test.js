/* global describe, it */

(function () {
    'use strict';
// Run before each test case.
    beforeEach(function () {
        // Put the application into a known state, and destroy the defaultStore.
        // Be careful about DS.Model instances stored in App; they'll be invalid
        // after this.
        // This is broken in some versions of Ember and Ember Data, see:
        // https://github.com/emberjs/data/issues/847
        Ember.run(function () {
            Concertember.reset();
        });
        // Display an error if asynchronous operations are queued outside of
        // Ember.run.  You need this if you want to stay sane.
        Ember.testing = true;
    });

// Run after each test case.
    afterEach(function () {
        Ember.testing = false;
    });

// Optional: Clean up after our last test so you can try out the app
// in the jsFiddle.  This isn't normally required.
    after(function () {
        Ember.run(function () {
            Concertember.reset();
        });
    });

    describe('The Concerts controller', function () {
        //emq.globalize();
        Concertember.setupForTesting();
        Concertember.injectTestHelpers();


        var ctrl;

        it('should add one concert', function () {
            Ember.run(function () {
                // Won't actually load until the end of the run-block.

                //http://stackoverflow.com/questions/19716232/how-to-unit-test-controller-which-uses-this-getstore
                var ctrl = Concertember.__container__.lookup('controller:concert');

                /**ctrl = Concertember.ConcertController.create({
                    // We need a container to test views with linkTo.
                    container: Concertember.__container__,
                    content: {}
                });**/
                var newConcert = ctrl.get('newConcert');
                chai.expect(newConcert).to.not.be.undefined;
                chai.expect(newConcert.artist).to.equal('');

                var concerts = ctrl.store.find('concerts', 'concerts_1').then(function (concerts) {

                    concerts.get('allConcerts').then(function (allConcerts) {
                        chai.expect(allConcerts).to.not.be.undefined;
                        chai.expect(allConcerts.content.length).to.equal(0);


                        ctrl.get('newConcert').artist = "test";
                        ctrl.get('newConcert').venue = "testVenue";
                        ctrl.get('newConcert').dateString = "10.01.2015";
                        ctrl.send('addConcert');

                        var concerts = ctrl.store.find('concerts', 'concerts_1').then(function (concerts) {

                            concerts.get('allConcerts').then(function (allConcerts) {
                                chai.expect(allConcerts).to.not.be.undefined;
                                chai.expect(allConcerts.content.length).to.equal(1);
                            });
                        });
                    });
                });
                // finally we assert that our values have been updated
                // by triggering our action.
                /**assert.equal(ctrl.get('propA'), 'Testing is cool');
                 assert.equal(ctrl.get('propB'), 'Testing Rocks!');**/
            });
        });

    });
})();
