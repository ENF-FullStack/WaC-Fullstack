import React from 'react';
import { BookService } from './app.bookservice';

import {Link} from 'react-router-dom';
import {translations as tx} from './app.translations';

/*
function Bookrow(props){
    return <tr>
        <td>{props.book.id}</td>
        <td>{props.book.title}</td>
        <td>{props.book.author}</td>
        <td>{props.book.price}</td>
        <td>{props.book.published.toLocaleDateString()}</td>
    </tr>
}
*/
/*
function Bookrow({book}){
    return <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.price}</td>
        <td>{book.published.toLocaleDateString()}</td>
    </tr>
}
*/

const Bookrow = ({book,selectBook,deleteBook}) => <tr>
        <td><Link to={`/book/${book.id}`}>{book.id}</Link></td>
        <td style={{cursor:'pointer'}} onClick={() => selectBook(book)}>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.price}</td>
        <td>{book.published.toLocaleDateString()}</td>
        <td style={{cursor:'pointer'}} onClick={() => deleteBook(book)}>Del</td>
    </tr>


export class Booklist extends React.Component{
    constructor(props){
        super(props);
        this.state={books:[],titleFilter:'',authorFilter:'',sortOrder:'title'};
    }

    componentDidMount(){
        //this.setState({books:BookService.getAll()});
        BookService.getAll().then(books => this.setState({books}));
    }

    bookSelected(book){
        this.props.history.push(`/book/${book.id}`)
    }

    textChanged(ev){
        this.setState({[ev.target.id]:ev.target.value});
    }

    deleteBook(book){
        BookService.deleteBook(book.id).then(() => this.forceUpdate());
    }

    render(){
        let {titleFilter,authorFilter,sortOrder} = this.state;
        console.log(this.state.books);
        let filtered=this.state.books.filter(b => b.title.includes(titleFilter) && b.author.includes(authorFilter));
        filtered.sort((a,b) => a[sortOrder].localeCompare(b[sortOrder]));
        let rows=filtered.map(b => <Bookrow deleteBook={book=>this.deleteBook(book)} selectBook={book => this.bookSelected(book)} book={b} key={b.id} />);
        return <div>
            <h2>Kirjat</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th><select id="sortOrder" onChange={ev => this.textChanged(ev)} value={this.state.sortOrder}>
                            <option value="title">{tx.book.title}</option>
                            <option value="author">{tx.book.author}</option>
                        </select></th>
                        <th><input id="titleFilter" onChange={ev => this.textChanged(ev)}  
                            value={titleFilter} placeholder={tx.book.title} /></th>
                        <th><input id="authorFilter" onChange={ev => this.textChanged(ev)} 
                            value={authorFilter} placeholder={tx.book.author} /></th>
                        <th>{tx.book.price}</th>
                        <th>{tx.book.published}</th>
                        <th><Link to='/book/uusi'>Add</Link></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    }
}