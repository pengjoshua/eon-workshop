/**
 * Created by josh on 2/17/16.
 */


var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "pub-c-5a5f3514-32a6-49a0-94d9-ea376729f959",
    subscribe_key : "sub-c-d784e128-da7d-11e5-9511-0619f8945a4f"
});


var number = 100;
function publish() {
    number += (Math.random() - 0.5);
    var message = { eon: {"value" : number} };
    console.log("sending",message);
    pubnub.publish({
        channel   : 'random1',
        message   : message,
    });
}
setInterval(publish,3*1000); //every three seconds


