const MongoClient = require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'lootPusher';
const client = new MongoClient(url,{useUnifiedTopology: true});

function connect(){
      let client = new MongoClient(url,{useUnifiedTopology: true});
      return new Promise((resolve,reject) => {
          client.connect(function(err) {
              if (err) reject(err);
              else {
                  let db=client.db(dbName);
                  resolve({client,db:client.db,characters:db.collection('characters')});
              }
          });
      })
  }