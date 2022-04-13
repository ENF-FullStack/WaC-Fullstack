const MongoClient = require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'books';

function connect(){
    let client = new MongoClient(url,{useUnifiedTopology: true});
    return new Promise((resolve,reject) => {
        client.connect(function(err) {
            if (err) reject(err);
            else {
                let db=client.db(dbName);
                resolve({client,db:client.db,books:db.collection('books')});
            }
        });
    })
}


module.exports={
    verify(book){
        if (!book.title) return "Title is required";  // error string
        book._id=book.id;
        delete book.id;
        book.published=new Date(book.published);
        delete book.author;
        // What else?
        return null; // null indicates ok
    },

    // This method should be called for each book before it is returned to the client
    toClient(book){
        book.id=book._id;
        delete book._id;
        book.author='';
        if (book.authorObject && book.authorObject.length) {
            let ao=book.authorObject[0];
            book.author=ao.lastName+", "+ao.firstName;
            delete book.authorObject;
        }
        return book;
    },

    getAll(){
        console.log("Get all")
        return new Promise((resolve,reject) => {
            /*
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('books')
                    db.collection('books').aggregate([
                        {$lookup: {from: "authors",localField: "authorId",foreignField: "_id",as: "authorObject"}},
                        ]).toArray((err,data) => {
                            if (err) console.log("ERROR",err);
                            data.forEach(book => this.toClient(book));
                            client.close();
                            resolve(data);
                    })
                }
            })
            */
            
            connect().then(({client,books}) => {
                books.aggregate([
                    {$lookup: {from: "authors",localField: "authorId",foreignField: "_id",as: "authorObject"}},
                    ]).toArray((err,data) => {
                        if (err) console.log("ERROR",err);
                        data.forEach(book => this.toClient(book));
                        resolve(data);
                        client.close();
                })
            });
            
        });
    },

    get(id){
        console.log("GET",id);
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('books')
                    db.collection('books').aggregate([
                        {$match:{_id:id}},
                        {$lookup: {from: "authors",localField: "authorId",foreignField: "_id",as: "authorObject"}},
                        ]).toArray((err,data) => {
                            if (err) console.log("ERROR",err);
                            data.forEach(book => this.toClient(book));
                            client.close();
                            resolve(data[0]);
                    })
                }
            })
        });
    },

    getLoans(id){
        // If you wish you may add persons and loans to the database
        // in similar manner they were added to mysql
        return new Promise((resolve) => resolve([]));
    },

    create(book){
        console.log("CREATE",book);
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('books');
                    book._id=new ObjectID().toHexString();
                    db.collection('books').insertOne(book,(err,info) =>{
                        console.log(err,info);
                        client.close();
                        resolve(this.toClient(book));
                    });
                }
            })
        });
   },

    update(book){
        console.log("CREATE",book);
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('books');
                    let id=book._id;
                    db.collection('books').updateOne({_id:id},{$set:book},(err,info) => {
                        console.log(err,info);
                        client.close();
                        resolve(this.toClient(book));
                    })
                }
            })
        });
    },

    deleteBook(id){
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('books');
                    db.collection('books').deleteOne({_id:id},function(err,info){
                        console.log(err,info);
                        client.close();
                        resolve({ok:'Deleted'});
                    })
                }
            })
        });
    }
}