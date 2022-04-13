import React from 'react';
import {Route,Link} from 'react-router-dom';

import { BookService } from './app.bookservice';
import { AuthorService } from './app.authorservice';

export class Bookdetail extends React.Component{
    constructor(props){
        super(props);
        this.state={authors:[],bookId:'uusi',book:{id:'uusi',title:'Not initialized',author:''},error:null};
    }


    componentDidMount(){
        //this.setState({bookId:this.props.match.params.id});
        //this.setState({book:BookService.get(this.props.match.params.id)})
        ///let bookId=Number(this.props.match.params.id);
        AuthorService.getAll().then(authors => {
            let bookId=this.props.match.params.id;
            if (bookId!="uusi")
                BookService.get(bookId).then(book => this.setState({bookId,book,authors}));
            else this.setState({authors});
        });
    }

    back(){
        if (this.state.bookId!='uusi'){
            BookService.save(this.state.book)
                .then(book => {
                    this.props.history.goBack();
                })
                .catch(error => {
                    this.setState({error});
                    console.log("Virhe",error)
                })
        }
        else{
            BookService.create(this.state.book)
                .then(book => {
                    this.props.history.goBack();
                })
                .catch(error => {
                    this.setState({error});
                    console.log("Virhe",error)
                })
        }
    }

    bookChanged(ev){
        this.state.book[ev.target.id]=ev.target.value;
        this.forceUpdate();
    }

    render(){
        let error=this.state.error;
        let opts=this.state.authors.map(a => <option key={a.id} value={a.id}>{a.lastName}, {a.firstName}</option>);
        return <div>
            <h2>Kirja {this.state.book.id}</h2>
            {error && <p>{error.error}</p>}
            <div>
                <label>Title</label>
                <input id="title" onChange={ev => this.bookChanged(ev)} value={this.state.book.title} />
            </div>
            <div>
                <label>Author</label>
                <select id="authorId" onChange={ev => this.bookChanged(ev)} value={this.state.book.authorId}>
                    <option value="">Tuntematon</option>
                    {opts}
                </select>
            </div>
            <input type="button" onClick={() => this.back()} value="Takaisin" />
        </div>
    }
}

function PrintableDetail(props){
    console.log("Printable",props)
    return <div>
        <h3>Printable</h3>
        <p>{props.book.title}</p>
        <p>{props.book.author}</p>
    </div>
}


export class DetailContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={book:{title:'Ei vielä haettu'}}
    }

    componentDidMount(){
        BookService.get(this.props.match.params.id).then(book => this.setState({book}));
    }

    render(){
        return <div>
            <p>Container</p>
            <nav>
                <Link to={`${this.props.match.url}`}>Editoitava</Link>
                <Link to={`${this.props.match.url}/printable`}>Printattava</Link>
            </nav>
            <Route exact path={`${this.props.match.path}`} component={Bookdetail} />
            <Route path={`${this.props.match.path}/printable`} 
                        render={props => <PrintableDetail book={this.state.book} {...props}/>} />
        </div>
    }
}