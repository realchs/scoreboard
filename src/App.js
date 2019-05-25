import React from 'react';
import './App.css'
import {Header} from "./components/Header";
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";



class App extends React.Component {
    state = {
        players:[
            {name: 'realchs', score: 0, id: 1},
            {name: 'mgc', score: 0, id: 2},
            {name: 'park', score: 0, id: 3},
            {name: 'kim', score: 0, id: 4}
        ]
    }
    maxId = 4;

    handleRemovePlayer = (id) => {
        console.log(id);
        this.setState(prevState => ({
            players: prevState.players.filter(item => item.id !== id)
        }));
    }

    handleChangeScore = (id, delta) => {
        console.log(id, delta);
        this.setState(prevState => {
            this.state.players.forEach(item => {
                if (item.id === id) item.score += delta;
            });
            return {
                players: [...prevState.players]
            }
        });
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => ({
            players: [...prevState.players, {name: name, score: 0, id: ++this.maxId}]
        }));
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title='My scoreboard' players={this.state.players}/>
                {
                    this.state.players.map(player => (
                        <Player name = {player.name} key = {player.id}
                                id = {player.id} score={player.score} removePlayer={this.handleRemovePlayer}
                                changeScore={this.handleChangeScore}/>
                    ))
                }
                <AddPlayerForm addPlayer={this.handleAddPlayer}/>
            </div>
        );
    }

}

export default App;

