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
                resolve({client,db:client.db,authors:db.collection('authors')});
            }
        });
    })
}


module.exports={
    verify(author){
        if (!author.lastName) return "Lastname is required";  // error string
        author._id=author.id;
        delete author.id;
        // What else?
        return null; // null indicates ok
    },

    // This method should be called for each book before it is returned to the client
    toClient(author){
        author.id=author._id;
        delete author._id;
        return author;
    },

    getAll(){
        console.log("Get all")
        return new Promise((resolve,reject) => {
            connect().then(({client,authors}) => {
                authors.find({}).toArray((err,data) => {
                    data.forEach(author => this.toClient(author));
                    client.close();
                    resolve(data);
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

    create(author){
        console.log("CREATE",author);
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('books');
                    author._id=new ObjectID().toHexString();
                    db.collection('authors').insertOne(author,(err,info) =>{
                        console.log(err,info);
                        client.close();
                        resolve(this.toClient(author));
                    });
                }
            })
        });
   },

    update(author){
        console.log("Update",author);
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('books');
                    let id=author._id;
                    db.collection('authors').updateOne({_id:id},{$set:author},(err,info) => {
                        console.log(err,info);
                        client.close();
                        resolve(this.toClient(author));
                    })
                }
            })
        });
    },

    deleteAuthor(id){
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('books');
                    db.collection('authors').deleteOne({_id:id},function(err,info){
                        if (err) console.log("ERRROR",err);
                        else console.log(info);
                        client.close();
                        resolve({ok:'Deleted'});
                    })
                }
            })
        });
    }
}