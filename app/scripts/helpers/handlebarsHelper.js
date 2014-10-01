Ember.Handlebars.registerBoundHelper('formatDate', function (date) {
    return moment(date).format('DD.MM.YYYY');
});