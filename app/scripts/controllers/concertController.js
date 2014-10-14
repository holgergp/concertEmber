/**
 * Created by flunky on 30.09.14.
 */
Concertember.ConcertController = Ember.ObjectController.extend({

    // the initial value of the `search` property
    newConcert: {
        artist: '',
        venue: '',
        //date: moment().format('DD.MM.YYYY')
        dateString: moment().format('DD.MM.YYYY')
    },


    actions: {
        addConcert: function () {


            var newConcert = this.get('newConcert');
            if (!newConcert) {
                return;
            }
            if(_.isBlank(newConcert.artist)||_.isBlank(newConcert.venue)||_.isBlank(newConcert.dateString)){
                //'Validation'
                return;
            }
            var addedConcert = this.store.createRecord('concert', {
                artist: newConcert.artist,
                venue: newConcert.venue,
                // hgp validateme
                date: newConcert.dateString
            });

            addedConcert.save();

            var concerts = this.store.find('concerts', 'concerts_1').then(function (concerts) {

                concerts.get('allConcerts').then(function (allConcerts) {
                    allConcerts.pushObject(addedConcert);
                    allConcerts.save();
                });
                //this.store.commit();
            });

            // Clear the "New Concert" text field
            this.set('newConcert',

                {
                    artist: '',
                    venue: '',
                    dateString: moment().format('DD.MM.YYYY')
                        //.format('DD.MM.YYYY')
                }
            );
        },

        removeConcert: function (concert) {
            concert.deleteRecord();
            concert.save();

        }



    }
})
;