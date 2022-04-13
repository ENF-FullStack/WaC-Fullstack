/*
git pull origin trainer
npm i --save mongodb
*/

const MongoClient = require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'books';
const client = new MongoClient(url,{useUnifiedTopology: true});

client.connect(function(err) {
    if (err) console.log('Cannot connect',err);
    else{
        const db = client.db(dbName);
        //db.dropDatabase();
        
        const coll=db.collection('authorsx');
        const bookColl=db.collection('booksx');
        
        let authors=[
            {_id:'606d5a6201c3881b6c0e50bb',lastName:'Tolkien',firstName:'J.R.R'},
            {_id:'606d5a6201c3881b6c0e50bc',lastName:'Vonnegut',firstName:'Kurt'},
            {_id:'606d5a6201c3881b6c0e50bd',lastName:'Hemingway',firstName:'Ernst'}
        ];

        let books=[
            {_id:new ObjectID().toHexString(),title:'Hobbit',authorId:'606d5a6201c3881b6c0e50bb',description:'There and back',price:12.45,published:new Date(1950,4,2)},
            {_id:new ObjectID().toHexString(),title:'Player Piano',authorId:'606d5a6201c3881b6c0e50bc',description:'Engineers for-ever',price:11.30,published:new Date(1953,5,2)},
            {_id:new ObjectID().toHexString(),title:'Two Towers',authorId:'606d5a6201c3881b6c0e50bb',description:'Balls in towers',price:15.30,published:new Date(1951,5,2)},
            {_id:new ObjectID().toHexString(),title:'For whom the bels toll',authorId:'606d5a6201c3881b6c0e50bd',description:'Spanish civil war',price:10.30,published:new Date(1961,5,2)},
        ];
        
                        
        coll.insertMany(authors,function(err,info){
            console.log(err,info);
            bookColl.insertMany(books,function(err,info){
                console.log(err,info);
                bookColl.aggregate([
                    {$lookup: {from: "authors",localField: "authorId",foreignField: "_id",as: "authorObject"}},
                    ]).toArray(function(err,data){
                        data.forEach(book => {
                            book.author='';
                            if (book.authorObject.length) {
                                let ao=book.authorObject[0];
                                book.author=ao.lastName+", "+ao.firstName;
                                delete book.authorObject;
                                console.log(book);
                            }
                        })
                        client.close();
                    })
            })
        })
        
        
        

        /*
        bookColl.aggregate([
//            {$match : {_id :hobbit}},
            {$lookup: {from: "authors",localField: "authorId",foreignField: "_id",as: "authorObject"}},
            ]).toArray(function(err,data){
                data.forEach(book => {
                    book.author='';
                    if (book.authorObject.length) {
                        let ao=book.authorObject[0];
                        book.author=ao.lastName+", "+ao.firstName;
                        delete book.authorObject;
                        console.log(book);
                    }
                })
                client.close();
        })
        */
        
        
        /*
        coll.find({}).toArray(function(err,data){
            console.log(err,data);
            client.close();
        })
        */
        /*
        coll.insertOne({_id:new ObjectID().toHexString(),lastName:'Steinbck',firstName:'Jhn',email:'john@stb.net'},function(err,info){
            console.log(err,info)
        });
        */
        // Fix the id
        /*
        let id="606d5214d99db480202b28af";
        
        coll.find({_id:id}).toArray(function(err,data){
            console.log(err,data);
        });
        console.log(new ObjectID());
        console.log(new ObjectID().toHexString());
        */
        let id="606d5337a48b0b3e2c2a901a";
        let changed={lastName:'Steinbeck',firstName:'John'};
        // Lets assume you have recreated the database with
        // {_id:new ObjectID().toHexString(), .....}
        /*
        coll.updateOne({_id:id},{$set:changed},function(err,info){
            console.log(err,info);
        })
        */    
        /*
        coll.deleteOne({_id:id},function(err,info){
            console.log(err,info)
        })
        */
        // Fix the id
        let tolkien="606d5214d99db480202b28af";
        
        //const bookColl=db.collection('books');
        /*
        bookColl.insertOne({_id:new ObjectID().toHexString(),title:'Hobbit',authorId:tolkien},function(err,info){
            console.log(err,info);
        });
        */
        // Fix the id
        let hobbit="606d54a5a1e3512e10bfa1e8";
        /*
        bookColl.aggregate([
                {$match : {_id :hobbit}},
                {$lookup: {from: "authors",localField: "authorId",foreignField: "_id",as: "author"}},
        ]).toArray(function(err,data){
            let book=data[0];
            book.authorName=book.author[0].lastName+", "+book.author[0].firstName;
            console.log(err,book)
        })
        */
       
        /*
       //const bookColl=db.collection('books');
       bookColl.find({_id:hobbit}).toArray(function(err,data){
            console.log(err,data);
            let book=data[0];
            coll.find({_id:book.authorId}).toArray(function(err,data){
                let author=data[0];
                book.author=author.lastName+', '+author.firstName;
                console.log(book);
            });
        })
        */
    }
});