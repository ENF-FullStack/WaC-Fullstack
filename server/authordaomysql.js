const ms=require('./mysqlhelper');

module.exports={
    getAll(){
        let q=`SELECT * FROM author`;
        return ms.query(q);
    },

    get(id){
        return ms.getById('author',id);
    },

    create(author){
        return new Promise(async (resolve,reject)=>{
            let q=`INSERT INTO author SET ?`;
            let info=await ms.paramQuery(q,author);
            let bk=await this.get(info.insertId);
            resolve(bk);
        });
    },

    update(author){
        return new Promise(async (resolve,reject)=> {
            let q=`UPDATE author SET lastName=?,firstName=? WHERE id=?`;
            let params=[author.lastName,author.firstName,author.id];
            let info=await ms.paramQuery(q,params);
            let bk=await this.get(author.id);
            resolve(bk);
        })
    },

    deleteBook(id){
        let q=`DELETE FROM author WHERE id=?`;
        return ms.paramQuery(q,[id]);
    }
}