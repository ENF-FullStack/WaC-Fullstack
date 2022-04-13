/*
    This script demonstrates some of the features of HTML5 JavaScript APIs.

    You will need to work little with the web-socket part:
    - The web-socket server is not complete (server-directory, websocket.js)
    - Initws just gives you basics so that you can test your server implementation
    - You should actually change the initDraw so that it makes the web socket connection
        and instead of generating random number it should draw the numbers it receives 
        from the server
*/

function init(){
	initDraw();
	initPi();
	initDragAndDrop();
	initWS();
}

function initWS(){
	var connection = new WebSocket("ws://localhost:9001"); 

	connection.onopen = function () { 
		console.log("Connection open, sending..."); 
		connection.send("Test data"); 
	}; 

	connection.onerror = function () { 
		console.log("Connection error"); 
	}; 

	connection.onmessage = function (event) { 
		console.log("Received: " + event.data); 
		document.getElementById("ws").innerHTML=event.data;
		connection.close();
	}; 

	connection.onclose = function (event) { 
		console.log("Connection closed"); 
	};
}

/* Update to use session storage to store arr allowing visits to other pages */
function initDraw(){
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(10,10);
	ctx.lineTo(10,180);
	ctx.lineTo(190,180);
	ctx.stroke();
	for(var i=10;i<200;i+=20){
		ctx.font="8pt Arial";
		ctx.fillText(i-10,i,190);
	}
	var arr=[100];
	if (sessionStorage["piirtodata"]){
		console.log("löytyi");
		arr=sessionStorage["piirtodata"].split(",");
	}
	function gotData(){
		var prev=Number(arr[arr.length-1]);
		var next=Math.round(prev+Math.random()*20-10);
		if (next>180) next=180;
		if (next<20) next=20;
		arr.push(next);
		sessionStorage["piirtodata"]=arr.join(",");
		ctx.clearRect(10,10,180,170);
		ctx.beginPath();
		var beg=arr.length>19 ? arr.length-19 : 0;
		ctx.moveTo(10,Number(arr[beg]));
		for(var i=beg;i<arr.length;i++){
			ctx.lineTo(10*(i-beg)+10,Number(arr[i]));
		}
		ctx.stroke();
		setTimeout(gotData,1000);
	}
	
	setTimeout(gotData,1000);
}

function initPi(){
	var piWorker=new Worker("/scripts/js5worker.js");
	var valCount=0;
	piWorker.onmessage=function(msg){
		document.getElementById("piValue").innerHTML="("+valCount+") "+msg.data.toString();
		valCount++;
		if (valCount>1000) piWorker.terminate();
	}
}


function initDragAndDrop() {
	var dropbox = document.getElementById("dropbox");
	dropbox.addEventListener("dragenter", stopDefault, false);
	dropbox.addEventListener("dragover", stopDefault, false);
	dropbox.addEventListener("drop", drop, false);
}

function drop(e) {
	e.stopPropagation();
	e.preventDefault();
	var dt = e.dataTransfer;	
	var files = dt.files;
	var file; 
	if (files.length>0){
		var file=files.item(0);
		var fileReader = new FileReader(); 
		fileReader.onload = function(e) { 
			document.getElementById("filecontent").innerHTML=e.target.result;
		}; 
		fileReader.readAsText(file); 
	}
}

function stopDefault(e) {
  e.stopPropagation();
  e.preventDefault();
}

/* -  Indexed db code ------------*/


var db;

/* Some sample data that will be placed to the db */
var customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];

function start() {
	window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
	var request = window.indexedDB.open("myPersonBase");
	request.onerror = function(event) {
		alert("error: " + event.target.errorCode);
	};
	request.onsuccess = function(event) {
		db = event.target.result;
		console.log("Database opened successfully");
		db.onerror = function(event) {
			alert("Database error: " + event.target.errorCode);
		};
	};
	
	request.onupgradeneeded = function(event) {
		console.log("Upgrading (creating) object store");
		db = event.target.result;
		var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
		console.log("Object store created");
		objectStore.createIndex("name", "name", { unique: false });
		console.log("Index created");
		objectStore.createIndex("email", "email", { unique: true });
		console.log("Another index created");
		for (var i in customerData) {
			objectStore.add(customerData[i]);
		}
		document.getElementById("dbresult").innerHTML="Values stored";
	};
}

function readOne() {
	var transaction = db.transaction(["customers"]);
	var store = transaction.objectStore("customers");
	var request = store.get("444-44-4444");
	request.onerror = function(event) {
		alert("error getting data: " + event.target.errorCode);
	};
	request.onsuccess = function(event) {
		document.getElementById("dbresult").innerHTML=JSON.stringify(event.target.result);
		console.log("Name for SSN 444-44-4444 is " + event.target.result.name);
	};
}

function readAll() {
	var store = db.transaction("customers").objectStore("customers");
	var customers = [];
 
	store.openCursor().onsuccess = function(event) {
		var cursor = event.target.result;
		if (cursor) {
			customers.push(cursor.value);
			cursor.continue();
		} else {
			document.getElementById("dbresult").innerHTML=JSON.stringify(customers);
			console.log("Got all customers: ");
			for (var i = 0; i < customers.length; i++) {
				console.log(customers[i].ssn + ": " + customers[i].name);
			}
		}
	};
}

function stop() {
	db.close();
	console.log("Database closed");
}


// A couple of new objects to be added
var customerData2 = [
  { ssn: "666-66-6666", name: "Bill2", age: 35, email: "bill2@company.com" },
  { ssn: "777-77-7777", name: "Donna2", age: 32, email: "donna2@home.org" }
];

function addMoreData() {
	var transaction = db.transaction(["customers"], "readwrite");
	transaction.oncomplete = function(event) {
		document.getElementById("dbresult").innerHTML="Added data";
	};
 
	var store = transaction.objectStore("customers");
	
	for (var i in customerData2) {
		var request = store.put(customerData2[i]);
		request.onsuccess = function(event) {
			console.log("Added data for: " + event.target.result);
		};
		request.onerror = function(event) {
			console.log("Put error: " + event.target.errorCode);
		};
	}
}

function deleteDB(){
	var req = indexedDB.deleteDatabase("myPersonBase");
	req.onsuccess = function () {
		console.log("Deleted database successfully");
	};
	req.onerror = function () {
		console.log("Couldn't delete database");
	};
	req.onblocked = function () {
		console.log("Couldn't delete database due to the operation being blocked");
	};
}

