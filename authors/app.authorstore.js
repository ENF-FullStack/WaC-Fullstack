import {createStore} from 'redux'
import {AuthorService} from './app.authorservice'

const initial={
    authors:[],
    current:null
}

function authorReducer(prev,action){
    if (!prev) return initial;
    if (action.type=='got_authors'){
        console.log("GOTTT")
        return Object.assign({},prev,{authors:action.data,current:null});
    }
    if (action.type=='select_author'){
        return Object.assign({},prev,{current:action.data})
    }
    if (action.type=="save_author"){
        let author=action.data;

        let ret=JSON.parse(JSON.stringify(prev));
        
        let existing=ret.authors.find(a => a.id==author.id);
        if (existing) Object.assign(existing,author);
        else ret.authors.push(author);

        ret.current=Object.assign({},existing || author);
        console.log("Päivitetty",ret)
        return ret;
    }
    return prev;
}
 
export let authorStore=createStore(authorReducer);

export const AuthorActions={
    init(){
        AuthorService.getAll().then(authors => {
            authorStore.dispatch({type:'got_authors',data:authors});
        })
    },
    dispatchSelectAuthor(author){
        authorStore.dispatch({type:'select_author',data:author});
    },
    dispatchSaveAuthor(author){
        AuthorService.save(author).then(author => {
            authorStore.dispatch({type:'save_author',data:author})
        })
    },
    dispatchDeleteAuthor(id){
        AuthorService.delete(id).then(() => {
            this.init();
        })
    },
    dispatchSelectNew(){
        authorStore.dispatch({type:'select_author',data:{id:'',firstName:'',lastName:''}})
    }

}
