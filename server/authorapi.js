module.exports=function(app){
    const path = require('path')
    let fs=require('fs');
    let bodyParser = require('body-parser')
    app.use(bodyParser.json());

    let dao=require('./authordaomongo');
    
    app.post('/api/authors/:id/image2',function(req,resp){
        console.log(req);
        resp.json({ok:'Got it'});
    })

    app.post('/api/authors/:id/image',function(req,resp){
        let {image}=req.body;
        let fn='images/author_'+req.params.id+".image";
        fs.writeFile(fn,image,function(err) {
            if (err) console.log("Virhe",err);
            else{
                resp.json({ok:'Written'});
            }
        })
    });

    app.get('/api/authors/:id/image',function(req,resp){
        let fn='images/author_'+req.params.id+".image";
        fs.readFile(fn,{encoding:'ascii'},(err,data)=>{
            if (err) {
                //console.log("Error",err);
                resp.sendFile(path.resolve(__dirname,'images', 'noimage.png'));
            }
            else {
                let [meta,image]=data.split(',');
                let [,mime]=meta.split(':');
                mime=mime.split(';')[0];
                console.log(mime);
                resp.header('Content-Type',mime).send(Buffer.from(image,'base64'));
            }
        })
    })

    app.get('/api/authors',async function(req,resp){
        resp.json(await dao.getAll());
    });
    
    app.get('/api/authors/:id',async function(req,resp){
        let id=Number(req.params.id);
        let book=await dao.get(id);
        resp.json(book);
    });
    
    app.post('/api/authors',async function(req,resp){
        let a=req.body;
        let err=dao.verify(a);
        if (err){
            resp.status(500).json({error:err});
        }
        else{
            let author=await dao.create(a);
            resp.json(author);
        }
    });
    
    app.delete('/api/authors/:id',async function(req,resp){
        let id=req.params.id;
        //let index=books.findIndex(b => b.id==id);
        //books.splice(index,1);
        await dao.deleteAuthor(id);
        resp.json({info:'Author deleted'});
    });
    
    app.put('/api/authors/:id',async function(req,resp){
        let id=req.params.id;
        //req.body.published=new Date(req.body.published);
        if (id!=req.body.id){
            resp.status(500).json({error:'ID Mismatch'});
        }
        else if (!req.body.lastName){
            resp.status(500).json({error:'Missing lastName'});
        }
        else{
            let err=dao.verify(req.body);
            if (err){
                resp.status(500).json({error:err});
            }
            else{
                let author=await dao.update(req.body);
                resp.json(author);
            }
        }
    });

}