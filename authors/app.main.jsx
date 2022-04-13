import React from 'react';
import {Provider,connect} from 'react-redux'

import {AuthorService} from './app.authorservice';
import {authorStore,AuthorActions} from './app.authorstore';


const styles={
    main:{
        display:'grid',
        gridTemplateColumns:'3fr 4fr 3fr',
        gridColumnGap:'10px'
    },
    authorForm:{
        display:'grid',
        gridTemplateColumns:'1fr 1fr',
        border: '1px solid #a0a0a0'
    },
    authorImage:{
        width: '80px',
        height: '128px',
        backgroundColor:'#f0f0f0'

    },
    authorList:{
        height: '200px',
        border: '1px solid #a0a0a0',
        overflowY:'scroll'
    },
    canvas:{
        border: '1px solid #a0a0a0'
    }
}

const AuthorRowOrig=({author,selected,onSelect}) => {
    let st={};
    selected=selected || {};
    if (author.id==selected.id) st={backgroundColor:'#f0f0f0'}
    return <div style={st} onClick={() => onSelect(author)}>
        <span style={{fontWeight:'bold'}}>{author.lastName}</span>
        <span> {author.firstName}</span>
    </div>
}

function rowStateToProps(state,props){
    return{
        selected:state.current
    }
}
function rowEventToAction(dispatch){
    return{
        onSelect:(author) => AuthorActions.dispatchSelectAuthor(author)
    }
}

const AuthorRow=connect(rowStateToProps,rowEventToAction)(AuthorRowOrig)

const AuthorListOrig=({authors,selected,onSelect}) => {
    let children=authors.map(a => <AuthorRow key={a.id} author={a} />)
    return <div><div style={styles.authorList}>
            {children}
        </div>
        <input type="button" value="Uusi" onClick={() => AuthorActions.dispatchSelectNew()}/>
    </div>
}

function listStateToProps(state,props){
    return {
        authors:state.authors,
        selected:state.current
    }
}

const AuthorList=connect(listStateToProps)(AuthorListOrig);



function OrigAuthorDetail({author}){
    author=author || {};
    console.log("Showing",author)
    let image=null;
    let ln=null,fn=null;

    function preventDefault(ev){
        ev.preventDefault();
        ev.stopPropagation();
    }

    function dropImage(ev){
        ev.preventDefault();
        ev.stopPropagation();
        console.log(ev.dataTransfer.files);
        if (ev.dataTransfer.files.length>0){
            let file=ev.dataTransfer.files.item(0);
            let fileReader = new FileReader(); 
            fileReader.onload = function(e) { 
                //console.log(e.target.result);
                AuthorService.sendImage(author.id,e.target.result).then(resp => {
                    image.src = fileReader.result;                
                })
            }; 
            fileReader.readAsDataURL(file); 
        }
    }

    function save(){
        let firstName=fn.value;
        let lastName=ln.value;
        let id=author.id;
        AuthorActions.dispatchSaveAuthor({id,firstName,lastName});
    }

    function deleteAuthor(){
        AuthorActions.dispatchDeleteAuthor(author.id);
    }

    return <div>
        <div style={styles.authorForm}>
            <div>
                <div>
                    <label>Firstname</label>
                    <input key={author.id} ref={r => fn=r} defaultValue={author.firstName}   />
                </div>
                <div>
                    <label>Lastname</label>
                    <input key={author.id} ref={r => ln=r} defaultValue={author.lastName}  />
                </div>
            </div>
            <div onDragEnter={preventDefault} onDragOver={preventDefault} onDrop={dropImage}>
                <div style={styles.authorImage}>
                    <img ref={r=>image=r} src={'/api/authors/'+author.id+'/image'} />
                </div>
                <p>Image</p>
            </div>
        </div>
        <div>
            <input type="button" onClick={() => save()} value="Save" />
            <input type="button" onClick={() => deleteAuthor()} value="Delete" />
        </div>
    </div>   
}

const detailStateToProps=state => ({author:state.current});
const AuthorDetail=connect(detailStateToProps)(OrigAuthorDetail);


function WsDraw(props){
    console.log("Käydään wsDraw-componentilla")
    function initDraw(c){
        console.log("INITDRAW",c);
        if (!c) return;
        var ctx=c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(10,10);
        ctx.lineTo(10,180);
        ctx.lineTo(190,180);
        ctx.stroke();
        for(var i=10;i<200;i+=20){
            ctx.font="8pt Arial";
            ctx.fillText(i-10,i,190);
        }
        var arr=[100];
        if (sessionStorage["piirtodata"]){
            console.log("löytyi");
            arr=sessionStorage["piirtodata"].split(",");
        }
        var connection = new WebSocket("ws://localhost:9001"); 
        connection.onmessage=function(event){
            let next=Number(event.data);
            arr.push(next);
            sessionStorage["piirtodata"]=arr.join(",");
            ctx.clearRect(10,10,180,170);
            ctx.beginPath();
            var beg=arr.length>19 ? arr.length-19 : 0;
            ctx.moveTo(10,Number(arr[beg]));
            for(var i=beg;i<arr.length;i++){
                ctx.lineTo(10*(i-beg)+10,Number(arr[i]));
            }
            ctx.stroke();
        }
        
    }
        

    return <div>
        <canvas ref={initDraw} style={styles.canvas} width="200" height="200" />
    </div>
}

export class Main extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        AuthorActions.init();
    }

    render(){
        return <Provider store={authorStore}><div>
            <header>
                <img src="/images/books.gif" />
                <h1>Authors</h1>
            </header>
            <main style={styles.main}>
                <AuthorList />
                <AuthorDetail />
                <WsDraw />
            </main>
            <footer>Copyright</footer>
        </div></Provider>
    }
}