/**
 * Created by flunky on 30.09.14.
 */
Concertember.ConcertController = Ember.ObjectController.extend({
    // the initial value of the `search` property
    newConcert: {
        artist: '',
        venue: '',
        date: moment().format('D.M.YYYY')
    },

    actions: {
        addConcert: function () {
            // the current value of the text field


            // Get the todo title set by the "New Todo" text field
            var newConcert = this.get('newConcert');
            if (!newConcert) {
                return;
            }

            var addedConcert = this.store.createRecord('concert', {
                artist: newConcert.artist,
                venue: newConcert.venue,
                date: newConcert.date
            });

            addedConcert.save();

            var concerts = this.store.find('concerts', 'concerts_1').then(function (concerts) {

                concerts.get('allConcerts').then(function (allConcerts) {
                    allConcerts.pushObject(addedConcert);
                    allConcerts.save();
                });
                //this.store.commit();
            });

            // Clear the "New Todo" text field
            this.set('newConcert',

                {
                    artist: '',
                    venue: '',
                    date: moment().format('D.M.YYYY')
                }
            );
        },

        removeConcert: function (array, concert) {

        }



    }
})
;