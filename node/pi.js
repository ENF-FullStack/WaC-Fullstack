// Pi calculation with Monte Carlo -method
// Study Worker threads from the documentation
// Try to start the algrorithm as a Worker
// Instead of displaying the value in the thread,
// pass it to the main-thread to display
const threads=require('worker_threads')
 
var inside=0,total=0,count=0;
 

while(true){
	var x=Math.random();
	var y=Math.random();
	var r=Math.sqrt(x*x+y*y);
	if (r<=1) inside++;
	total++;
	var value=4*inside/total;
	count++;
	if (count>10000){
		count=0;
		threads.parentPort.postMessage("Current"+value);
		//console.log("current",value)
	}
}