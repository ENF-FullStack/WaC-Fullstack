let users=[
    {id:1,email:'tim@test.net',psw:'test123',psw_reset:''}
]

module.exports=function(app){

    app.post('/open/user/login',function(req,resp){
        let {email,psw}=req.body;
        let user=users.find(u => u.psw==psw && u.email==email);
        if (user){
            let ret=Object.assign({},user);
            delete ret.psw;
            delete ret.psw_reset;
            req.session.user=ret;
            resp.json(ret);
        }
        else{
            resp.json({error:'Not logged in'})
        }
    });
    
}