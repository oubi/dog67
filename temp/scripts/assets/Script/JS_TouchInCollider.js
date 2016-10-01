"use strict";
cc._RFpush(module, 'c2317TdaJ5JuoU6fUtd3u9g', 'JS_TouchInCollider');
// Script\JS_TouchInCollider.js

cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        actor: {
            'default': null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        this.initListener();
    },

    initListener: function initListener() {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;

        // console.log(this.actor);
        var collider = this.actor.getComponent(cc.BoxCollider);
        // console.log(collider);

        var listener = {
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: function onTouchBegan(touch, event) {
                var touchLoc = touch.getLocation();
                if (cc.Intersection.pointInPolygon(touchLoc, collider.world.points)) {
                    console.log('Hit');
                } else {
                    console.log('Not hit');
                }

                return true;
            }
        };

        cc.eventManager.addListener(listener, this.node);
    },

    onDisable: function onDisable() {
        cc.director.getCollisionManager().enabled = false;
        cc.director.getCollisionManager().enabledDebugDraw = false;
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();