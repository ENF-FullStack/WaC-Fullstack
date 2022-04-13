import React from 'react';

import {HTTP} from './http';

export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    doLogin(){
        let email=this.email.value;
        let psw=this.psw.value;
        let obj={email,psw};
        HTTP.post('/open/user/login',obj).then(r => {
            console.log("Palvelimelta", r);
            if (r.id) this.props.onLoggedIn(r);
        })
    }

    render(){
        return <main>
            <div>
                <label>Tunnus</label>
                <input ref={r => this.email=r} />
            </div>
            <div>
                <label>Salasana</label>
                <input ref={r => this.psw=r} type="password" />
            </div>
            <input onClick={() => this.doLogin()} type="button" value="Login" />
        </main>
    }
} 