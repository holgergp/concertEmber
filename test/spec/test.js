/* global describe, it */

(function () {
    'use strict';

    describe('The Concerts controller', function () {
        emq.globalize();
        Concertember.setupForTesting();
        Concertember.injectTestHelpers();
        setResolver(Ember.DefaultResolver.create({ namespace: Concertember }));

        moduleFor('controller:concerts', 'Concerts Controller');

        // get the controller instance
        var ctrl = this.subject();


        it('should run here few assertions', function () {
            // check the properties before the action is triggered
            equal(ctrl.get('newConcert'), 'You need to write tests');


            ctrl.send('addConcert', 'Testing Rocks!');

            // finally we assert that our values have been updated
            // by triggering our action.
            equal(ctrl.get('propA'), 'Testing is cool');
            equal(ctrl.get('propB'), 'Testing Rocks!');
        });

    });
})();
