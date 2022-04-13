import React, { Component } from "react";
import CharacterDataService from "../services/character.service";
import { Link } from "react-router-dom";

export default class ListChars extends Component {
    constructor(props) {
        super(props);

        this.onChangeSearchName = this.onChangeSearchName.bind(this);
        this.retrieveCharacters = this.retrieveCharacters.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveCharacter = this.setActiveCharacter.bind(this);
        this.removeAllCharacters = this.removeAllCharacters.bind(this);
        this.searchName = this.searchName.bind(this);

        this.state = {
            characters: [],
            currentCharacter: null,
            currentIndex: -1,
            searchName: ""
        };
    }

    componentDidMount() {
        this.retrieveCharacters();
    }

    onChangeSearchName(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        })
    }

    retrieveCharacters() {
        CharacterDataService.getAll()
        .then(response => {
            this.setState({
                characters: response.data
            });
            console.log(response.data)
        })
        .catch(e => {
            console.log(e);
        });
    }

    refreshList() {
        this.retrieveCharacters();
        this.setState({
            currentCharacter: null,
            currentIndex: -1
        });
    }

    setActiveCharacter(character, index) {
        this.setState({
            currentCharacter: character,
            currentIndex: index
        })
    }

    removeAllCharacters() {
        CharacterDataService.deleteAll()
        .then(response => {
            console.log(response.data);
            this.refreshList();
        })
        .catch(e => {
            console.log(e);
        });
    }

    searchName() {
        CharacterDataService.findByName(this.state.searchName)
        .then(response => {
            this.setState({
                characters: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    }

    render() {

        const { searchName, characters, currentCharacter, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name"
                            value={searchName}
                            onChange={this.onChangeSearchName}
                        />
                        <div className="input-group-append">
                            <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={this.searchName}
                            >
                            Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <ul className="list-group">
                        {characters && 
                          characters.map((character, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveCharacter(character, index)}
                                key={index}
                            >
                                {character.name}
                            </li>
                        ))}
                    </ul>

                    <button
                        className="m-3 btn btn-sm btn-danger"
                        onClick={this.removeAllCharacters}
                    >
                        Remove All
                    </button>
                </div>
                <div className="col-md-6">
                    {currentCharacter ? (
                        <div>
                            <h4>Character</h4>
                            <div>
                                <label>
                                    <strong>Name:</strong>
                                </label> {" "}
                                {currentCharacter.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Account:</strong>
                                </label> {" "}
                                {currentCharacter.account}
                            </div>
                            <div>
                                <label>
                                    <strong>League:</strong>
                                </label> {" "}
                                {currentCharacter.league}
                            </div>
                            <div>
                                <label>
                                    <strong>Level:</strong>
                                </label> {" "}
                                {currentCharacter.level}
                            </div>
                            <div>
                                <label>
                                    <strong>Class:</strong>
                                </label> {" "}
                                {currentCharacter.class}
                            </div>
                            <div>
                                <label>
                                    <strong>Ascendancy:</strong>
                                </label> {" "}
                                {currentCharacter.ascendancy}
                            </div>
                        <Link
                            to={"/characters/" + currentCharacter.id}
                            className="badge badge-warning"
                            >
                            Edit
                        </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Click on character</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}