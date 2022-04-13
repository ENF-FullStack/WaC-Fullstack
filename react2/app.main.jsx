import React from 'react';
import { Booklist } from './app.booklist';
import { CalcContainer } from './app.calculator';

import {HashRouter as Router} from 'react-router-dom';
import {Route,Switch,Link} from 'react-router-dom';
import { Bookdetail } from './app.bookdetail';

import {HTTP} from './http'; 
import {translations as tx} from './app.translations';

export class Main extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        /*
        HTTP.get("/translations/translations_fi.json").then(trans => {
            Object.assign(tx,trans);
            console.log(tx);
            this.forceUpdate();
        })
        */
       this.selectLang('fi');
    }

    selectLang(loc){
        HTTP.get("/translations/translations_"+loc+".json").then(trans => {
            Object.assign(tx,trans);
            console.log(tx);
            this.forceUpdate();
        })
    }

    render(){
        return <Router><div>
            <header>
                <img src="/images/books.gif" />
                <h1>{tx.title}</h1>
            </header>
            <nav>
                <Link to="/">Kirjat</Link>
                <Link to="/calc">Laskin</Link>
                <a onClick={() => this.selectLang('fi')} style={{cursor:'pointer',float:'right'}}>FI</a>
                <a onClick={() => this.selectLang('en')} style={{cursor:'pointer',float:'right'}}>EN</a>
            </nav>
            <main>
                <Switch>
                    <Route path="/book/:id" component={Bookdetail} />
                    <Route path="/calc" component={CalcContainer} />
                    <Route path="/" component={Booklist} />
                </Switch>
            </main>
            <footer>
                Copyright (c) Acme Solutions Ltd
            </footer>
        </div></Router>
    }
}