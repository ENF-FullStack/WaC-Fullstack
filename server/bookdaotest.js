let ms=require('./mysqlhelper');
let dao=require('./bookdaomysql');

/*
ms.query('select * from author').then(data => {
    console.log(data);
    ms.cleanup();
})
*/
/*
async function runTests(){
    let rows=await ms.query("SELECT * FROM author");
    console.log(rows);
    rows=await ms.paramQuery("SELECT * FROM author where id=?",[2]);
    console.log(rows);
    let author=await ms.getById('author',3);
    console.log(author);
    ms.cleanup();
}
*/

async function runTests(){
    let book=await dao.get(1);
    console.log(book);
    /*
    let playerPiano={title:'Plaeyr Piano',authorId:2,price:13.12,published:new Date(),description:'Engineers'};
    book=await dao.create(playerPiano);
    book.title='Player PianoXXX';
    book=await dao.update(book);
    console.log(book);
    let rows=await dao.getAll();
    console.log(rows);
    let info=await dao.delete(book.id);
    console.log(info);
    */
    ms.cleanup();    
}

runTests();
