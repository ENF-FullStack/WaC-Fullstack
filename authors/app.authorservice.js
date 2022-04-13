import {HTTP} from './http';


function sendImage(url,data) {
	return new Promise(function(resolve,reject){
		var xr=new XMLHttpRequest();
		xr.onreadystatechange=function(){
			if(xr.readyState==4){
				if((xr.status>=200)&&(xr.status<300)){
					try{
						var obj=JSON.parse(xr.responseText);
						resolve(obj,xr);
					}
					catch(e){
						resolve(xr);
					}
				}
				else reject(JSON.parse(xr.responseText));
			}
		}
		xr.open(method,url,true);
		xr.setRequestHeader("Content-Type","image/x");
		xr.setRequestHeader("Accept","application/json");
		xr.send(data);
	});
}


export const AuthorService={
    getAll(){
        return HTTP.get('/api/authors');
    },

    save(author){
        console.log("AUTHOR",author)
        if (author.id) return HTTP.put('/api/authors/'+author.id,author);
        else return HTTP.post('/api/authors',author)
    },

    delete(id){
        return HTTP.delete('/api/authors/'+id)
    },

    sendImage(id,data){
        return HTTP.post('/api/authors/'+id+'/image',{image:data});

        //return sendImage('/api/authors/'+id+'/image2',data);
    }
}