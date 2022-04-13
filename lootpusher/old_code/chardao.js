const MongoClient = require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;

const mongoURL = 'mongodb+srv://mongoviope:ug9pszLmcRsKLhNa@cluster0.rcsfm.mongodb.net/lootPusher?retryWrites=true&w=majority';
const dbName = 'lootPusher';

function connect() {
    let client = new MongoClient(mongoURL,{useUnifiedTopology: true});
    return new Promise((resolve,reject) => {
        client.connect(function(err) {
            if (err) reject(err);
            else {
                let db=client.db(dbName);
                resolve({client,db:client.db,chars:db.collection('characters'),items:db.collection('items'),mods:db.collection('mods'),stats:db.collection('stats')});
            }
        });
    })
}

module.exports = {
    
    verify(char){
        if (!char.name) return "Name is required";  // error string
        char._id=char.id;
        delete char.id;
        // What else?
        return null; // null indicates ok
    },

    // This method should be called for each character before it is returned to the client
    toClient(char){

        /* no need for this I guess
        char.id=char._id;
        delete book._id;
        book.author='';
        if (book.authorObject && book.authorObject.length) {
            let ao=book.authorObject[0];
            book.author=ao.lastName+", "+ao.firstName;
            delete book.authorObject;
        }
        return char;
        */
    },

    getAll(){
        console.log("Get all")
        return new Promise((resolve,reject) => {
            
            connect().then(({client,chars}) => {
                chars.aggregate([
                    {$lookup: {from: "items",localField: "charId",foreignField: "_id",as: "itemObject"}},
                    ]).toArray((err,data) => {
                        if (err) console.log("ERROR",err);
                        data.forEach(char => this.toClient(char));
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
                    const db=client.db('characters')
                    db.collection('characters').aggregate([
                        {$match:{_id:id}},
                        {$lookup: {from: "items",localField: "charId",foreignField: "_id",as: "itemObject"}},
                        ]).toArray((err,data) => {
                            if (err) console.log("ERROR",err);
                            data.forEach(char => this.toClient(char));
                            client.close();
                            resolve(data[0]);
                    })
                }
            })
        });
    },

    create(char){
        console.log("CREATE",char);
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('characters');
                    book._id=new ObjectID().toHexString();
                    db.collection('characters').insertOne(book,(err,info) =>{
                        console.log(err,info);
                        client.close();
                        resolve(this.toClient(char));
                    });
                }
            })
        });
   },

   update(char){
    console.log("CREATE",char);
    return new Promise((resolve,reject) => {
        const client = new MongoClient(url,{useUnifiedTopology: true});
        client.connect((err) => {
            if (err) console.log(err);
            else {
                const db=client.db('characters');
                let id=char._id;
                db.collection('characters').updateOne({_id:id},{$set:char},(err,info) => {
                    console.log(err,info);
                    client.close();
                    resolve(this.toClient(char));
                })
            }
        })
    });
    },

    delCharacter(id){
        return new Promise((resolve,reject) => {
            const client = new MongoClient(url,{useUnifiedTopology: true});
            client.connect((err) => {
                if (err) console.log(err);
                else {
                    const db=client.db('characters');
                    db.collection('characters').deleteOne({_id:id},function(err,info){
                        
                        // here needs to be nested delete for each item, mod and stat connected to character
                        console.log(err,info);
                        client.close();
                        resolve({ok:'Deleted'});
                    })
                }
            })
        });
    }

}