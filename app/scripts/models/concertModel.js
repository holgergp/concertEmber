var attr = DS.attr;
var belongsTo = DS.belongsTo;
var hasMany = DS.hasMany;


Concertember.Concerts = DS.Model.extend({
    loveConcerts: hasMany('concert', {async: true}),
    maybeConcerts: hasMany('concert', {async: true}),
    allConcerts: hasMany('concert', {async: true})
});
Concertember.Concert = DS.Model.extend({
    artist: attr('string'),
    venue: attr('string'),
    //fixme hgp this should be proper date or moment
    date: attr('string'),
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


        var concertDateString = this.get('date');
        if (isConcertAboutToHappen(concertDateString)) {
            return 'bg-warning';
        }
        else if (isConcertOverdue(concertDateString)) {
            return 'bg-danger';
        }
        else {
            return 'bg-primary';
        }


    }.property('date')

});


Concertember.Concert.FIXTURES = [
    {
        id: 'concert_1',
        artist: 'Blind Guardian',
        venue: 'Philipshalle',
        date: moment().subtract(2, 'days').format('DD.MM.YYYY')

        //.format('DD.MM.YYYY')

    },
    {
        id: 'concert_2',
        artist: 'The Saddest Landscape',
        venue: 'Turock',
        date: moment().format('DD.MM.YYYY')


    },
    {
        id: 'concert_3',
        artist: 'Spaceman Spiff',
        venue: 'FFT',
        date: moment().format('DD.MM.YYYY')


    }
];


Concertember.Concerts.FIXTURES = [
    {
        id: 'concerts_1',
        loveConcerts: ['concert_1'],
        allConcerts: ['concert_2'],
        maybeConcerts: ['concert_3']
    }
];





