/*
    Modify this implementation to send a random number on range 20-180 
    to connected clients at one second intervals
*/


module.exports=function(port){
	let ws = require("nodejs-websocket")
    let connections=[];
    let prev=100;

    function sendNew(){
		let next=Math.round(prev+Math.random()*20-10);
		if (next>180) next=180;
		if (next<20) next=20;
        connections.forEach(c => {
            c.sendText(String(next));
        })
        prev=next;
        setTimeout(sendNew,1000);
    }

    setTimeout(sendNew,1000);

	ws.createServer(function(conn) {
		connections.push(conn);
		console.log("New websocket connection");
        //conn.sendText("Hello");
		conn.on("text", function (str) {
			console.log("Received "+str)
		});
		conn.on("close", function (code, reason) {
			console.log("Closing websocket");
		})
		conn.on("error",function(err){
            let index=connections.indexOf(conn);
            connections.splice(index,1);
			console.log("Websocket error");
		});
	}).listen(port);
	console.log("WebSocket server listening port "+port);
}