/**
 * Created by flunky on 03.10.14.
 */
DragNDrop = Ember.Namespace.create();

DragNDrop.cancel = function (event) {
    event.preventDefault();
    return false;
};

DragNDrop.Dragable = Ember.Mixin.create({
    attributeBindings: 'draggable',
    draggable: 'true',
    dragStart: function (event) {
        var dataTransfer = event.originalEvent.dataTransfer;
        var concertId = this.get('parentView.content.id');

        var concertListName = this.get('parentView.parentView.content.content.name');
        //this.get('elementId')
        dataTransfer.setData('concertId', concertId);
        dataTransfer.setData('concertListName', concertListName);
    }
});

DragNDrop.Droppable = Ember.Mixin.create({
    dragEnter: DragNDrop.cancel,
    dragOver: DragNDrop.cancel,
    drop: function (event) {
        var concertId = event.originalEvent.dataTransfer.getData('concertId');
        var concertListName = event.originalEvent.dataTransfer.getData('concertListName');
        //var transferedObject = Ember.View.views[viewId];
        var store = this.get('controller').get('store');

        var targetArray = this.get('childViews')[0].content.content;


        store.find('concert', concertId).then(function (concert) {

            targetArray.pushObject(concert);
            targetArray.save();
            var concerts = store.find('concerts', 'concerts_1').then(function (concerts) {

                concerts.get(concertListName).then(function (someConcert) {

                    someConcert.removeObject(concert)
                    someConcert.save();
                });
            });


        });


        //transferedObject.destroy();
        event.preventDefault();
        console.log("Dropping");
        return false;
    }
});

Concertember.Box = Ember.View.extend(DragNDrop.Dragable);
Concertember.DropTarget = Ember.View.extend(DragNDrop.Droppable);