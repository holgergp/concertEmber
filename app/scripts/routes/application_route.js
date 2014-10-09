Concertember.ApplicationRoute = Ember.Route.extend({

    controllerName: 'concert',
    model: function () {
        return this.store.find('concerts', 'concerts_1');

    }

});

/**
Concertember.LoveConcertsRoute = Ember.Route.extend({
    model: function () {
        //FIXME hgp maybe simpler
        return this.store.find('concerts', 'concerts_1')
            .then(function (concerts) {

                return concerts.get('loveConcerts');
            });
    }
});


Concertember.AllConcertsRoute = Ember.Route.extend({
    model: function () {
        //FIXME hgp maybe simpler
        return this.store.find('concerts', 'concerts_1')
            .then(function (concerts) {

                return concerts.get('allConcerts');
            });
    }
});


Concertember.MaybeConcertsRoute = Ember.Route.extend({
    model: function () {
        //FIXME hgp maybe simpler
        return this.store.find('concerts', 'concerts_1')
            .then(function (concerts) {

                return concerts.get('maybeConcerts');
            });
    }
});**/