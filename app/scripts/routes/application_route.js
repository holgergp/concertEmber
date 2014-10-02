Concertember.ApplicationRoute = Ember.Route.extend({

    controllerName: 'concert',
    model: function () {
        return this.store.find('concerts', 'concerts_1');

    }

});
