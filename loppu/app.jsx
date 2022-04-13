import React from 'react';
import ReactDOM from 'react-dom';

import {Alert,Dialog} from './modal';

const LabelInput = () => <div>
    <label>Otsikko</label>
    
</div>

const ListBox = () => <div>
</div>

const TabbedContent = () => <div>
</div>

const cars=[
    {id:1,make:'Volvo',model:'V4'},
    {id:2,make:'Nissan',model:'Micra'},
    {id:3,make:'Toyota',model:'Aygo'},
]

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={data:'Hello',cars,selectedCar:{make:'No make',model:'Nothing selected yet'}};
    }

    changeCar(field,value){
        this.state.selectedCar[field]=value;
        this.forceUpdate();
    }

    render(){
        return <div className="mainContent"> 
            <div>
                <p>Aloitetaan simppelistä</p>
                <div>
                    <label>Otsikko</label>
                    <input value={this.state.data} onChange={ev => this.setState({data:ev.target.value})} />
                </div>
                <p>Toteuta LabelInput niin, että se toimii yllä olevaa vastaavasti</p>
                <LabelInput label="Otsikko" value={this.state.data} onChange={ev => this.setState({data:ev.target.value})} />
            </div>
            <div>
                <p>{this.state.selectedCar.model}</p>
                <ListBox items={this.state.cars} selected={this.state.selectedCar} onChange={selected => this.setState({selectedCar})} />
                <p>Yllä olevan pitäisi esittää listaus autoista,ja tietenkin antaa tieto valinnan vaihtumisesta.
                    Toteutuksessa ei tule käyttää select-elementttiä.
                </p>
            </div>
            <div>
                <TabbedContent tabs={['Eka','Toka','Kolmas']}>
                    <p>Näytä tämä kun Eka, valittu</p>
                    <p>Tämä kun toka on valittu</p>
                    <p>Tämä jos kolmas on valittu</p>
                </TabbedContent>
                <p>Yllä olevan pitäisi esittää valinnat "Eka","Toka" ja "Kolmas",
                    ja valinnan mukaan yksi sisältökomponenteista
                </p>
            </div>
            <div>
                <p>Tässä joudut pohtimaan vähän enemmän</p>
                <input type="button" value="Näytä alert" />
                <Alert title="Vahvistus" text="Oletko varma" />
                <input type="button" value="Näytä dialogi" />
                <Dialog styles="carDialog">
                    <div>
                        <LabelInput label="Malli" value={this.state.selectedCar.model} onChange={ev => this.changeCar('model',ev.target.value)} />
                        <LabelInput label="Merkki" value={this.state.selectedCar.make} onChange={ev => this.changeCar('model',ev.target.make)} />
                        <input type="button" value="Sulje" />
                    </div>
                </Dialog>
                <p>Molempien pitäisi tulla näkyviin keskelle (suurin piirtein) ruutua, siten
                    että muut toiminnot sivulla ovat disabloituja.
                </p>
                <p>Dialogille annettu styles on tyylisivuluokan nimi.</p>
                <p>Vinkki tarvinnet tilaan tiedon siitä onko Alert/Dialog näkyvissä. 
                    Joudut myös muokkailemaan jonkin verran sivun css:ää.</p>
            </div>
        </div>
    }
}

window.onload=function(){
    ReactDOM.render(<Main />,document.getElementById('appcontent'))
}
