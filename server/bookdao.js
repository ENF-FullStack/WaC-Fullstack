let books=[
    {id:1,title:'Hobbit',author:'Tolkien',description:'There and back',price:12.45,published:new Date(1950,4,2)},
    {id:2,title:'Player Piano',author:'Vonnegut',description:'Engineers for-ever',price:11.30,published:new Date(1953,5,2)},
    {id:3,title:'Two Towers',author:'Tolkien',description:'Balls in towers',price:15.30,published:new Date(1951,5,2)},
    {id:4,title:'For whom the bels toll',author:'Hemingway',description:'Spanish civil war',price:10.30,published:new Date(1961,5,2)},
];

module.exports={

    getAll(){
        return books;
    },

    get(id){
        return books.find(b => b.id==id);
    },

    create(book){
        book.id=books.reduce((a,b) => a.id>b.id ? a : b).id+1;
        books.push(book);
        return book;
    },

    update(id,book){
        let existing=books.find(b => b.id==id);
        if (existing) Object.assign(existing,book);
        return existing;
    },

    deleteBook(id){
        let index=books.findIndex(b => b.id==id);
        if (index>=0) books.splice(index,1);
    }


}