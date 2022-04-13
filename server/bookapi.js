module.exports=function(app){
    
    let bodyParser = require('body-parser')
    app.use(bodyParser.json());

    let dao=require('./bookdaomongo');
    
    app.get('/api/books',async function(req,resp){
        resp.json(await dao.getAll());
    });

    app.get('/api/books/:id',async function(req,resp){
        //let id=Number(req.params.id);
        let id=req.params.id;
        let book=await dao.get(id);
        resp.json(book);
    });

    app.get('/api/books/:id/loans',async function(req,resp){
        let id=Number(req.params.id);
        resp.json(await dao.getLoans(id));
    })
    
    app.post('/api/books',async function(req,resp){
        let b=req.body;
        let err=dao.verify(b);
        if (err){
            resp.status(500).json({error:err});
        }
        else{
            let book=await dao.create(b);
            resp.json(book);
        }
    });
    
    app.delete('/api/books/:id',async function(req,resp){
        //let id=Number(req.params.id);
        let id=req.params.id;
        //let index=books.findIndex(b => b.id==id);
        //books.splice(index,1);
        await dao.deleteBook(id);
        resp.json({info:'Book deleted'});
    });
    
    app.put('/api/books/:id',async function(req,resp){
        //let id=Number(req.params.id);
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
                let book=await dao.update(req.body);
                resp.json(book);
            }
    
        }
    });

}