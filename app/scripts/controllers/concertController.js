/**
 * Created by flunky on 30.09.14.
 */
Concertember.ConcertController = Ember.ObjectController.extend({
    // the initial value of the `search` property
    search: '',

    actions: {
        query: function() {
            // the current value of the text field
            var query = this.get('search');
            this.transitionToRoute('search', { query: query });
        }
    }
});