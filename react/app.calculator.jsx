import React from 'react';
import PropTypes from 'prop-types';

export class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={fig1:props.fig1 || 0,fig2:props.fig2 || 0};
    }

    textChanged(ev){
        this.setState({[ev.target.id]:Number(ev.target.value)},function(){
            if (this.props.onResultChange) this.props.onResultChange(this.state.fig1+this.state.fig2);
        });
    }

    render(){
        return <div>
            <h2>Calculator</h2>
            {this.props.children}
            <input id="fig1" onChange={ev => this.textChanged(ev)} value={this.state.fig1} />
            +
            <input id="fig2" onChange={ev => this.textChanged(ev)} value={this.state.fig2} />
            =
            {this.state.fig1+this.state.fig2}
        </div>
    }
}
Calculator.propTypes={
    fig1:PropTypes.number.isRequired,
    fig2:PropTypes.number
}

function FuncCalculator(props){
    const [fig1,fig1Change]=React.useState(props.fig1 || 0);
    const [fig2,fig2Change]=React.useState(props.fig2 || 0);

    console.log("Functio",props);

    function muutos(f1,f2){
        fig1Change(f1);
        fig2Change(f2);
        if (props.onResultChange) props.onResultChange(f1+f2);
    }

    return <div>
        <h2>Func Calc</h2>
        <input value={fig1} onChange={ev => muutos(Number(ev.target.value),fig2)} />
        +
        <input value={fig2} onChange={ev => muutos(fig1,Number(ev.target.value))} />
        =
        {fig1+fig2}
    </div>
}

function RefCalculator(props){
    let fig1=null,fig2=null;
    let result=null;

    React.useEffect(() => {
        console.log("Component mounted");
        return () => console.log("Unmounted");
    })

    function calculate(){
        let r=Number(fig1.value)+Number(fig2.value);
        console.log("Result",r);
        result.innerHTML=r;
        if (props.onResultChange) props.onResultChange('<span style="color:red">'+r+'</span>');
    }

    return <div>
        <h2>Ref Calculator</h2>
        <input ref={r => fig1=r} defaultValue="1" />
        +
        <input ref={r => fig2=r} defaultValue="2" />
        <input onClick={() => calculate()} type="button" value="=" />
        <span ref={r => result=r}>Result here</span>
    </div>
}

export class CalcContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={calcResult:0,funcResult:0,refResult:0,show:'perus'}
    }

    render(){
        return <div>
            <h3>Containeriiiii</h3>
            <div>
                <a onClick={() => this.setState({show:'perus'})}>Perus</a>
                <a onClick={() => this.setState({show:'func'})}>Func</a>
                <a onClick={() => this.setState({show:'ref'})}>Ref</a>
            </div>
            {
                this.state.show=='perus' ? <div>
                        <Calculator fig1={1} fig2={2} onResultChange={calcResult => this.setState({calcResult})}>
                            <p>Anna laskutoimitus</p>
                        </Calculator>
                        <p>Result {this.state.calcResult}</p>
                    </div>
                : this.state.show=='ref' ? <div>
                    <RefCalculator onResultChange={refResult => this.setState({refResult})} />
                    <p dangerouslySetInnerHTML={{__html:this.state.refResult}}></p>
                </div> 
                : <div>
                    <FuncCalculator fig1={6} fig2={7} onResultChange={funcResult => this.setState({funcResult})} />
                    <p>Result: {this.state.funcResult}</p>
                </div>
            }
        </div>
    }
}