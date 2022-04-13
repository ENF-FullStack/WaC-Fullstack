const MongoClient = require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017';
const dbName = 'lootPusher';
const client = new MongoClient(url,{useUnifiedTopology: true});

client.connect(function(err) {
      if (err) console.log('Cannot connect',err);
      else {
            const db = client.db(dbName);
            db.dropDatabase();

            const characters = db.collection('characters');
            const items = db.collection('items');
            const iMods = db.collection('mods');
            const iStats = db.collection('stats');
            
            let character=[
                  {_id:'6073d7232e941936006d9431',name:'Appappaa',account:'Elamshin',league:'Standard',level:94,class:'Ranger',ascendancy:'Deadeye'},
                  {_id:'6073d7232e941936006d9432',name:'Yappappaa',account:'Elamshin',league:'Standard',level:88,class:'Duelist',ascendancy:'Champion'}
            ];

            /*
            characters.insertMany(character,function(err,info){
                  console.log(err,info);
            })

            characters.insertOne({_id:'6076b54a9004e434a40cd811',name:'PaskaaTaivaalta',account:'Elamshin',league:'Standard',level:97,class:'Shadow',ascendancy:'Trickster'},function(err,info){
                  console.log(err,info);
                  client.close();
            });
            
            characters.find({}).toArray(function(err,data){
                  console.log(err,data);
                  client.close();
            })
            
            let id = "6076b54a9004e434a40cd811";
            let changed = {name:'JaskaaTaivaalta',level:98};

            characters.updateOne({_id:id},{$set:changed},function(err,info){
                  console.log(err,info);
                  client.close();
            })
            
            let id = "6076b54a9004e434a40cd811";
            characters.deleteOne({_id:id},function(err,info){
                  console.log(err,info)
                  client.close();
            })
            */

            let cItem=[
                  {_id:1,charId:'6073d7232e941936006d9431',name:'Death\'s Opus',baseItem:'Death Bow',iLvl:77,slot:'main',unique:1,ignored:1},
                  {_id:2,charId:'6073d7232e941936006d9431',name:'Voidfletcher',baseItem:'Penetrating Arrow Quiver',iLvl:86,slot:'off',unique:1,ignored:1},
                  {_id:3,charId:'6073d7232e941936006d9431',name:'Devoto\'s Devotion',baseItem:'Penetrating Arrow Quiver',iLvl:84,slot:'helmet',unique:1,ignored:1},
                  {_id:4,charId:'6073d7232e941936006d9431',name:'Hyrri\'s Ire',baseItem:'Zodiac Leather',iLvl:70,slot:'body',unique:1,ignored:1},
                  {_id:5,charId:'6073d7232e941936006d9431',name:'Oskarm',baseItem:'Nubuck Gloves',iLvl:86,slot:'gloves',unique:1,ignored:1},
                  {_id:6,charId:'6073d7232e941936006d9431',name:'Windshriek',baseItem:'Reinforced Greaves',iLvl:71,slot:'boots',unique:1,ignored:1},
                  {_id:7,charId:'6073d7232e941936006d9431',name:'Victory Lock',baseItem:'Stygian Vise',iLvl:86,slot:'belt',unique:0,ignored:0},
                  {_id:8,charId:'6073d7232e941936006d9431',name:'Tempest Charm',baseItem:'Jade Amulet',iLvl:73,slot:'amulet',unique:0,ignored:0},
                  {_id:9,charId:'6073d7232e941936006d9431',name:'The Taming',baseItem:'Prismatic Ring',iLvl:80,slot:'ring1',unique:1,ignored:1},
                  {_id:10,charId:'6073d7232e941936006d9431',name:'Gloom Finger',baseItem:'Prismatic Ring',iLvl:77,slot:'ring2',unique:0,ignored:0}
            ];

            let iMod=[
                  {_id:new ObjectID().toHexString(),mod:'Virile', tier:1, pos:'pre', desc:'to maximum life'},
                  {_id:new ObjectID().toHexString(),mod:'Stalwart', tier:6, pos:'pre', desc:'to maximum life'},
                  {_id:new ObjectID().toHexString(),mod:'Stout', tier:6, pos:'pre', desc:'to maximum life'},
                  {_id:new ObjectID().toHexString(),mod:'Chalybeous', tier:5, pos:'pre', desc:'to maximum mana'},
                  {_id:'60747d9541a2f1393c7918f9',mod:'of the Thunderhead', tier:5, pos:'suff', desc:'% to lightning resistance'},
                  {_id:new ObjectID().toHexString(),mod:'of the Maelstrom', tier:3, pos:'suff', desc:'% to lightning resistance'},
                  {_id:new ObjectID().toHexString(),mod:'of the Tempest', tier:4, pos:'suff', desc:'% to lightning resistance'},
                  {_id:new ObjectID().toHexString(),mod:'of the Cloud', tier:8, pos:'suff', desc:'% to lightning resistance'},
                  {_id:new ObjectID().toHexString(),mod:'of the Ice', tier:2, pos:'suff', desc:'% to cold resistance'},
                  {_id:new ObjectID().toHexString(),mod:'of the Walrus', tier:4, pos:'suff', desc:'% to cold resistance'},
                  {_id:'60747d9541a2f1393c7918ff',mod:'of the Yeti', tier:5, pos:'suff', desc:'% to cold resistance'},
                  {_id:new ObjectID().toHexString(),mod:'of the Inuit', tier:8, pos:'suff', desc:'% to cold resistance'},
                  {_id:new ObjectID().toHexString(),mod:'of the Magma', tier:2, pos:'suff', desc:'% to fire resistance'},
                  {_id:new ObjectID().toHexString(),mod:'of the Volcano', tier:2, pos:'suff', desc:'% to fire resistance'},
                  {_id:'60747d9541a2f1393c791903',mod:'of the Furnace', tier:4, pos:'suff', desc:'% to fire resistance'},
                  {_id:new ObjectID().toHexString(),mod:'of the Kiln', tier:5, pos:'suff', desc:'% to fire resistance'},
                  {_id:'60747d9541a2f1393c791905',mod:'Recovering', tier:1, pos:'pre', desc:'increased life flask recovery rate'},
                  {_id:new ObjectID().toHexString(),mod:'Frozen', tier:4, pos:'pre', desc:'cold damage to attacks'},
                  {_id:new ObjectID().toHexString(),mod:'of the Universe', tier:3, pos:'suff', desc:'to all attributes'}
            ];

            iMods.insertMany(iMod,function(err,info){
                  //console.log(err,info);
            })

            let iStat=[
                  {_id:new ObjectID().toHexString(),itemId:7,modId:'60747d9541a2f1393c791905', value:'11'},
                  {_id:new ObjectID().toHexString(),itemId:7,modId:'60747d9541a2f1393c7918f9', value:'26'},
                  {_id:new ObjectID().toHexString(),itemId:7,modId:'60747d9541a2f1393c7918ff', value:'27'},
                  {_id:new ObjectID().toHexString(),itemId:7,modId:'60747d9541a2f1393c791903', value:'35'}
            ];

            iStats.insertMany(iStat,function(err,info){
                  // console.log(err,info);
            })
            
            characters.insertMany(character,function(err,info){
                  items.insertMany(cItem,function(err,info){
                        
                        items.aggregate([
                              {$lookup: {from: "characters",localField: "charId",foreignField: "_id",as:"charObject"}},
                        ]).toArray(function(err,data){

                              
                              data.forEach(function(testi){
                                    console.log(testi.name);
                              })
                              
                              
                              /*
                              data.forEach(item => {
                                    iStats.aggregate([
                                          {$lookup: {from: "mods",localField: "modId",foreignField: "_id", as: "modObject"}},
                                    ]).toArray(function(err,data2){
                                          data2.forEach(stat => {
                                                if (item.charObject.length&&item.unique==0&&item.ignored==0) {
                                                      console.log("check");
                                                }
                                          })
                                    })
                              })
                              */
                              
                        client.close();
                        })
                        
                  // items insert
                  })
            // character insert
            })
      // else 1      
      }
// client connect
});