const ms=require('./mysqlhelper');

module.exports={
    verify(book){
        book.id=Number(book.id);
        book.published=new Date(book.published);
        book.authorId=Number(book.authorId) || 0 ;
        delete book.author;
    },

    getAll(){
        let q=`SELECT b.*,concat(a.lastName,', ',a.firstname) as author FROM book b left join author a on a.id=b.authorId`;
        return ms.query(q);
    },

    getLoans(id){
        let q=`SELECT p.* FROM loan l,person p WHERE l.personId=p.id AND l.bookId=?`;
        return ms.paramQuery(q,[id]);
    },

    get(id){
        return ms.getById('book',id);
    },

    create(book){
        return new Promise(async (resolve,reject)=>{
            console.log("Create",book);
            delete book.id;
            let q=`INSERT INTO book SET ?`;
            let info=await ms.paramQuery(q,book);
            let bk=await this.get(info.insertId);
            resolve(bk);
        });
    },

    update(book){
        return new Promise(async (resolve,reject)=> {
            let q=`UPDATE book SET title=?,authorId=?,published=?,price=?,description=? WHERE id=?`;
            let params=[book.title,book.authorId,book.published,book.price,book.description,book.id];
            let info=await ms.paramQuery(q,params);
            let bk=await this.get(book.id);
            resolve(bk);
        })
    },

    deleteBook(id){
        let q=`DELETE FROM book WHERE id=?`;
        return ms.paramQuery(q,[id]);
    }
}