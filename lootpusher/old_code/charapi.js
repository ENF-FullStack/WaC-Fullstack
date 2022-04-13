module.exports = function(app) {

    let bodyParser = require('body-parser')
    app.use(bodyParser.json());

    let dao=require('./chardao');

    app.get('/api/characters',async function(req,resp){
        resp.json(await dao.getAll());
    });

    app.get('/api/characters/:id',async function(req,resp){
        let id=req.params.id;
        let char=await dao.get(id);
        resp.json(char);
    });

    app.post('/api/characters',async function(req,resp){
        let b=req.body;
        let err=dao.verify(b);
        if (err){
            resp.status(500).json({error:err});
        }
        else{
            let char=await dao.create(b);
            resp.json(char);
        }
    });

    app.delete('/api/characters/:id',async function(req,resp){
        let id=req.params.id;
        await dao.delCharacter(id);
        // await dao.delItems(id);
        // await dao.delStats(id);
        // await dao.delMods(id);

        resp.json({info:'Character deleted'});
    });

    app.put('/api/characters/:id',async function(req,resp){
        let id=req.params.id;
        if (id!=req.body.id){
            resp.status(500).json({error:'ID Mismatch'});
        }
        else{
            let err=dao.verify(req.body);
            if (err){
                resp.status(500).json({error:err});
            }
            else{
                let char=await dao.update(req.body);
                resp.json(char);
            }
    
        }
    });
}