
let options={
    protocol: "mysql",
    host: 'localhost',
    port: 3306,
    user     : "librarian",
    password : "test123",
    database : 'books'
}

let mysql=require("mysql");

let pool=mysql.createPool(options);

pool.getConnection(function(err,conn){
	if (err){
		if (conn) conn.release();
		console.log("Error ",err);
		return;
	}
    /*
	let author={firstName:'John',lastName:'Steinbeck'};
	conn.query("INSERT INTO author SET ?",author,function(err,data){
		//console.log(err,data);
		console.log("Inserted id",data.insertId);
	});
    */
	conn.query("SELECT * from author where id=?",[2],function(err,rows,fields){
		console.log(rows);
		conn.release();
		pool.end(function(err){
			if (err) console.log(err);
		});
	});
});


