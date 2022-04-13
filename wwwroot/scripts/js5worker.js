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
		postMessage(value);
	}
}