import React, { Component } from "react";
import { Redirect } from 'react-router';
import CharacterDataService from "../services/character.service";

export default class EditToDo extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAccount = this.onChangeAccount.bind(this);
        this.onChangeLeague = this.onChangeLeague.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
        this.onChangeClass = this.onChangeClass.bind(this);
        this.onChangeAscendancy = this.onChangeAscendancy.bind(this);

        this.getCharacter = this.getCharacter.bind(this);
        this.updateCharacter = this.updateCharacter.bind(this);
        this.deleteCharacter = this.deleteCharacter.bind(this);

        this.state = {
            currentCharacter: {
                id: null,
                name: "",
                account: "",
                league: "",
                level: "",
                class: "",
                ascendancy: ""
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getCharacter(this.props.match.params.id);
    }

    onChangeName (e) {
        const name = e.target.value;

        this.setState(function(prevState) {
            return {
                currentCharacter: {
                    ...prevState.currentCharacter,
                    name: name
                }
            };
        });
    }

    onChangeAccount (e) {
        const account = e.target.value;

        this.setState(function(prevState) {
            return {
                currentCharacter: {
                    ...prevState.currentCharacter,
                    account: account
                }
            };
        });
    }

    onChangeLeague (e) {
        const league = e.target.value;

        this.setState(function(prevState) {
            return {
                currentCharacter: {
                    ...prevState.currentCharacter,
                    league: league
                }
            };
        });
    }

    onChangeLevel (e) {
        const level = e.target.value;

        this.setState(function(prevState) {
            return {
                currentCharacter: {
                    ...prevState.currentCharacter,
                    level: level
                }
            };
        });
    }

    onChangeClass (e) {
        const cClass = e.target.value;

        this.setState(function(prevState) {
            return {
                currentCharacter: {
                    ...prevState.currentCharacter,
                    class: cClass
                }
            };
        });
    }

    onChangeAscendancy (e) {
        const ascendancy = e.target.value;

        this.setState(function(prevState) {
            return {
                currentCharacter: {
                    ...prevState.currentCharacter,
                    ascendancy: ascendancy
                }
            };
        });
    }

    getCharacter(id) {
        CharacterDataService.get(id)
            .then(response => {
                this.setState ({
                    currentCharacter: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateCharacter() {
        CharacterDataService.update(
            this.state.currentCharacter.id,
            this.state.currentCharacter
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "Character was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteCharacter() {
        CharacterDataService.delete(this.state.currentCharacter.id)
            .then(response => {
                console.log(response.data);
                this.setState({ redirect: true });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {

        if (this.state.redirect) {
            return <Redirect push to = "/" />;
        }

        const { currentCharacter } = this.state;

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

        let selected=currentCharacter.class;

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
                { currentCharacter ? (
                        <div>

                        <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={currentCharacter.name}
                            onChange={this.onChangeName}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="account">Account: </label>
                        <input
                            type="text"
                            className="form-control"
                            id="account"
                            value={currentCharacter.account}
                            onChange={this.onChangeAccount}
                            />
                        </div>
                        <div className="form-group">
                        <label htmlFor="league">League: </label>
                        <select className="form-control"
                            id="league"
                            value={currentCharacter.league}
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
                                value={currentCharacter.level}
                                onChange={this.onChangeLevel}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="class">Class: </label>
                            <select className="form-control"
                                id="class"
                                value={currentCharacter.class}
                                onChange={this.onChangeClass}
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
                                value={currentCharacter.ascendancy}
                                onChange={this.onChangeAscendancy}
                            >
                            <option>Choose ascendancy</option>
                            {options}
                            </select>
                        </div>

                        <button
                        className="badge badge-danger mr-2"
                        onClick={this.deleteCharacter}
                        >
                        Delete
                        </button>

                        <button
                        type="submit"
                        className="badge badge-success"
                        onClick={this.updateCharacter}
                        >
                        Update
                        </button>
                        <p>{this.state.message}</p>
                        
                        </div>
                ) : (
                    <div>
                        <br />
                        <p>Click a character</p>
                    </div>
                )}
            </div>
        );
    }
}