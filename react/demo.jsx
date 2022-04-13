import React from 'react';
import ReactDOM from 'react-dom';


class Clickable extends React.Component{
    constructor(props){
        super(props);
        this.state={clicks:0};
        //this.klikattu=this.klikattu.bind(this);
    }

    klikattu(){
        this.setState({clicks:this.state.clicks+1});
    }

    render(){
        return <p onClick={() => this.klikattu()}>Klikkaa mua: {this.state.clicks}</p>;
    }
}


function Main(){
    return <div className="joku">
        <p>Tässä eka komponentti</p>
        <Clickable />
    </div>
}

window.onload=function(){
    ReactDOM.render(<Main />,document.getElementById('appcontent'))
}
