/* global describe, it */
var ok = function(a,b){
    //FIXME hgp normally provided by the qunit helper
};

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
            //Concertember.reset();
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
  /**  after(function () {
        Ember.run(function () {
            Concertember.reset();
        });
    });**/

    describe('The Concerts controller', function () {
        //emq.globalize();
        Concertember.setupForTesting();
        Concertember.injectTestHelpers();




        it('should have an empty new concert at the beginning', function () {
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

                Concertember.reset();

            });
        });
        it('should have one loveconcert at the beginning', function (done) {
            var allConcerts;
            Ember.run(function () {
                // Won't actually load until the end of the run-block.

                //http://stackoverflow.com/questions/19716232/how-to-unit-test-controller-which-uses-this-getstore
                var ctrl = Concertember.__container__.lookup('controller:concert');


                ctrl.store.find('concerts', 'concerts_1').then(function (concerts) {

                    allConcerts = concerts.get('allConcerts').then(function (allConcerts) {
                        chai.expect(allConcerts).to.not.be.undefined;
                        chai.expect(allConcerts.content.length).to.equal(1);

                        done();
                    });

                });
                Concertember.reset();

            });

        });

        it('should add one loveconcert ', function (done) {
            Ember.run(function () {
                // Won't actually load until the end of the run-block.

                //http://stackoverflow.com/questions/19716232/how-to-unit-test-controller-which-uses-this-getstore
                var ctrl = Concertember.__container__.lookup('controller:concert');

                ctrl.get('newConcert').artist = "test";
                ctrl.get('newConcert').venue = "testVenue";
                ctrl.get('newConcert').dateString = "10.01.2015";
                ctrl.send('addConcert');
                var concerts;
                ctrl.store.find('concerts', 'concerts_1').then(function (_concerts) {
                    concerts=_concerts;
                    concerts.get('allConcerts').then(function (allConcerts){
                        chai.expect(allConcerts).to.not.be.undefined;
                        chai.expect(allConcerts.content.length).to.equal(2);
                        //Ugly hack to prevent ember data from fiddling with 'inflight objects' something async happening here
                        //Concertember.reset();
                        done();
                    });

                });


            });


        });

    });
})();
