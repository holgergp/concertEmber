Concertember.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)


    controllerName: 'concert',
    model: function() {
        return this.store.find('concerts','concerts_1'); // returns a promise that will resolve
        // with the record representing Trek Glowacki
    }
    /**model: function () {

       var newConcert = {
            artist: '',
            venue: '',
            //date: moment().format('D.M.YYYY')
        };
        var allConcerts = [
            {
                artist: 'Blind Guardian',
                venue: 'Philipshalle',
              //  date: '2013-02-08'

            }
        ];
        var loveConcerts = [
            {
                artist: 'The Saddest Landscape',
                venue: 'Turock',
                //date: '2014-10-02'

            }
        ];
        var maybeConcerts = [
            {
                artist: 'Spaceman Spiff',
                venue: 'FFT',
                //date: '2015-02-08'

            }
        ];



        return {
            loveConcerts: loveConcerts,
            allConcerts: allConcerts,
            maybeConcerts: maybeConcerts

        };
    }*/
});
