/**
 * Created by flunky on 01.10.14.
 */
Concertember.ConcertCollectionView = Ember.CollectionView.extend({
    //contentBinding: 'controller',
    //controllerBinding: "App.myController",
    itemViewClass: Ember.View.extend({
            alertClass: function () {

                var isConcertOverdue = function (concertDateString) {
                    return  moment(concertDateString,'DD.MM.YYYY').isBefore(moment());
                };

                var isConcertAboutToHappen = function (concertDateString) {
                    return moment().add(15, 'days').isAfter(moment(concertDateString,'DD.MM.YYYY')) && !isConcertOverdue(concertDateString);
                };

                var isConcertDateFine = function (concertDateString) {
                    return  !isConcertAboutToHappen(concertDateString) && !isConcertOverdue(concertDateString);
                };


                var concertDateString = this.get('content.date');
                if (isConcertAboutToHappen(concertDateString)) {
                    return 'bg-warning';
                }
                else if (isConcertOverdue(concertDateString)) {
                    return 'bg-danger';
                }
                else {
                    return 'bg-primary';
                }


            }.property('content.date')
        }
    )
})
;