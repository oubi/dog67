"use strict";
cc._RFpush(module, '26311ZiUO5FB5dDDftE7PBn', 'JS_CameraFollow');
// Script\JS_CameraFollow.js

cc.Class({
    "extends": cc.Component,

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
        target: {
            "default": null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        if (!this.target) {
            return;
        }

        var follow = cc.follow(this.target, cc.rect(0, 0, 2000, 2000));
        this.node.runAction(follow);
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();