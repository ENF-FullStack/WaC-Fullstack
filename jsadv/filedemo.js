var fs=require("fs");

// Is this nice?
fs.open("test.txt","a",function(err,fd){
	if (err) console.log("Error with opening");
	else {
		fs.write(fd,"Some",function(err){
			if (err){
				console.log("Error in writing");
				return;
			}
			else{
				fs.close(fd,function(err){
					if (err) console.log("Error in closing");
				});
			}
		});
	}
});



// Let's capsulate asynchronous functionality into a promise
function open(fn){
	return new Promise(function(resolve,reject){
		fs.open(fn,"a",function(err,fd){
			if (err) reject(err);
			else resolve(fd);
		});
	});
}

function write(fd,tx){
	return new Promise(function(resolve,reject){
		fs.write(fd,tx,function(err){
			if (err) reject(err);
			else resolve();
		});
	});
}

function close(fd){
	return new Promise(function(resolve,reject){
		fs.close(fd,function(err){
			if (err) reject(err);
			else resolve(err);
		});
	});
}

// This is not nice either
open("test2.txt")
	.then(fd => {
		write(fd,"Data")
			.then(() => close(fd))
			.catch(err => console.log("Error",err));
	})
	.catch(err => console.log("ERROR",err));



// Perhaps this is how it should be....	
async function create(){
	let fd=await open("test3.txt");
	await write(fd,"More");
	await close(fd);
}

create();









