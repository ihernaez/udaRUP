define(['marionette',
        'templates',

        'rup/rup.tree'], function (Marionette, App) {

    var TreeDragDropCodeView = Marionette.LayoutView.extend({
        template: App.Templates.demoResponsive.app.components.tree.dragDrop.treeDragDropCodeTemplate
    });

    return TreeDragDropCodeView;
});
