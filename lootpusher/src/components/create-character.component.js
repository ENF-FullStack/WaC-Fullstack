import React, { Component } from "react";
import CharacterDataService from "../services/character.service";

export default class CreateChar extends Component {
    constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAccount = this.onChangeAccount.bind(this);
    this.onChangeLeague = this.onChangeLeague.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangeClass = this.onChangeClass.bind(this);
    this.onChangeAscendancy = this.onChangeAscendancy.bind(this);
    this.saveCharacter = this.saveCharacter.bind(this);
    this.newCharacter = this.newCharacter.bind(this);

    this.state = {
        id: null,
        name: "",
        account: "",
        league: "",
        level: "",
        class: "",
        ascendancy: "",
        submitted: false
    };
    }

    onChangeName(e) {
        this.setState({
        name: e.target.value
        });
    }

    onChangeAccount(e) {
        this.setState({
        account: e.target.value
        });
    }

    onChangeLeague(e) {
        this.setState({
        league: e.target.value
        });
    }

    onChangeLevel(e) {
        this.setState({
        level: e.target.value
        });
    }

    onChangeClass(e) {       
        this.setState({
        class: e.target.value,
        });
    }

    onChangeAscendancy(e) {
        this.setState({
        ascendancy: e.target.value
        });
    }

    saveCharacter() {
        var data = {
          name: this.state.name,
          account: this.state.account,
          league: this.state.league,
          level: this.state.level,
          class: this.state.class,
          ascendancy: this.state.ascendancy
        };

        CharacterDataService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
              name: response.data.name,
              account: response.data.account,
              league: response.data.league,
              level: response.data.level,
              class: response.data.class,
              ascendancy: response.data.ascendancy,
    
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

    newCharacter() {
        this.setState({
          id: null,
          name: "",
          account: "",
          league: "",
          level: "",
          class: "",
          ascendancy: "",
    
          submitted: false
        });
    }

    render() {
        
        const marauder = [
            "Juggernaut",
            "Berserker",
            "Chieftain"
        ];
        
        const duelist = [
            "Slayer",
            "Gladiator",
            "Champion"
        ];

        const ranger = [
            "Deadeye",
            "Raider",
            "Pathfinder"
        ];

        const shadow = [
            "Assassin",
            "Saboteur",
            "Trickster"
        ];

        const witch = [
            "Elementalist",
            "Necromancer",
            "Occultist"
        ];

        const templar = [
            "Inquisitor",
            "Hierophant",
            "Guardian"
        ];

        const scion = [
            "Ascendant"
        ];

        let type = null;
        let options = null;

        let selected=this.state.class;

        if (selected === "Marauder") {
            type = marauder;
        } else if (selected === "Duelist") {
            type = duelist;
        } else if (selected === "Ranger") {
            type = ranger;
        } else if (selected === "Shadow") {
            type = shadow;
        } else if (selected === "Witch") {
            type = witch;
        } else if (selected === "Templar") {
            type = templar;
        } else if (selected === "Scion") {
            type = scion;
        }
            
        if (type) {
            options = type.map((el) => <option value={el}>{el}</option>);
          }

        return (
            <div style={{ marginTop: 10 }} className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newCharacter}>Add</button>
                    </div>
                ) : (
                    <div>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={this.state.name}
                            onChange={this.onChangeName}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="account">Account: </label>
                        <input
                            type="text"
                            className="form-control"
                            id="account"
                            required
                            value={this.state.account}
                            onChange={this.onChangeAccount}
                            name="account"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="league">League: </label>
                        <select className="form-control"
                            id="league"
                            required
                            value={this.state.league}
                            onChange={this.onChangeLeague}
                            name="league"
                        >
                        <option>Choose league</option>
                        <option value="Standard">Standard</option>
                        <option value="Hardcore">Hardcore</option>
                        <option value="SSF">SSF</option>
                        <option value="SSF HC">SSF HC</option>
                        <option value="Ultimatum">Ultimatum</option>
                        <option value="Ultimatum HC">Ultimatum HC</option>
                        <option value="Ultimatum SSF">Ultimatum SSF</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="level">Level: </label>
                        <input
                            type="text"
                            pattern="[0-9]*"
                            className="form-control"
                            id="level"
                            required
                            value={this.state.level}
                            onChange={this.onChangeLevel}
                            name="level"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="class">Class: </label>
                        <select className="form-control"
                            id="class"
                            required
                            value={this.state.class}
                            onChange={this.onChangeClass}
                            name="class"
                        >
                        <option>Choose class</option>
                        <option value="Marauder">Marauder</option>
                        <option value="Duelist">Duelist</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Shadow">Shadow</option>
                        <option value="Witch">Witch</option>
                        <option value="Templar">Templar</option>
                        <option value="Scion">Scion</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ascendancy">Ascendancy: </label>
                        <select className="form-control"
                            id="ascendancy"
                            required
                            value={this.state.ascendancy}
                            onChange={this.onChangeAscendancy}
                            name="ascendancy"
                        >
                        <option>Choose ascendancy</option>
                        {options}
                        </select>
                    </div>

                    <button onClick={this.saveCharacter} className="btn btn-success">
                        Save
                    </button>
                </div>
            )}
            </div>
        );
    }
}

/*

import React, { useState } from "react";
import CharacterDataService from "../services/character.service";

const AddCharacter = () => {
    const initialCharacterState = {
      id: null,
      name: "",
      account: "",
      league: "",
      level: "",
      class: "",
      ascendancy: ""
    };
    const [character, setCharacter] = useState(initialCharacterState);
    const [submitted, setSubmitted] = useState(false);
  
    const handleInputChange = event => {
      const { name, value } = event.target;



      setCharacter({ ...character, [name]: value });
    };

    const saveCharacter = () => {
        var data = {
          name: character.name,
          account: character.account,
          league: character.league,
          level: character.level,
          class: character.class,
          ascendancy: character.ascendancy
        };
    
        CharacterDataService.create(data)
          .then(response => {
            setTutorial({
              id: response.data.id,
              name: response.data.name,
              account: response.data.account,
              league: response.data.league,
              level: response.data.level,
              class: response.data.class,
              ascendancy: response.data.ascendancy
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    
      const newCharacter = () => {
        setCharacter(initialCharacterState);
        setSubmitted(false);
      };

    return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Successful submit!</h4>
          <button className="btn btn-success" onClick={newCharacter}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={character.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="account">Account</label>
            <input
              type="text"
              className="form-control"
              id="account"
              required
              value={character.account}
              onChange={handleInputChange}
              name="account"
            />
          </div>

          

          <button onClick={saveCharacter} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
    );
};
    
export default AddCharacter;

*/

