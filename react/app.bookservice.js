import {HTTP} from './http';

export const BookService={
    books:[],
    
    verify(book){
        book.published=new Date(book.published);
        if (!book.author) book.author="";
        let existing=this.books.find(b => b.id==book.id);
        if (existing){
            Object.assign(existing,book);
        }
        else{
            this.books.push(book);
        }
    },

    getAll(){
        let self=this;
        return new Promise(function(resolve,reject){
            HTTP.get('/api/books').then(books => {
                //console.log(books);
                books.forEach(b => self.verify(b));
                resolve(self.books);
            })
        });
    },

    get(id){
        //let self=this;
        return new Promise((resolve,reject) => {
            HTTP.get('/api/books/'+id).then(book=>{
                this.verify(book);
                resolve(book);
            })
        });
    },

    save(book){
        return new Promise((resolve,reject) => {
            HTTP.put('/api/books/'+book.id,book)
                .then(book => {
                    this.verify(book);
                    resolve(book);
                })
                .catch(err => reject(err));
        });
    },

    create(book){
        book.published=new Date();
        return new Promise((resolve,reject) => {
            HTTP.post('/api/books',book)
                .then(book => {
                    this.verify(book);
                    resolve(book);
                })
                .catch(err => reject(err));
        });
    },

    deleteBook(id){
        return new Promise(resolve => {
            HTTP.delete('/api/books/'+id).then(() => {
                let index=this.books.findIndex(b => b.id==id);
                if (index>=0) this.books.splice(index,1);
                resolve();
            });
        })
    }
};