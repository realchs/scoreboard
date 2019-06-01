import React from 'react';
import './App.css'
import Header from "./components/Header";
import {Player} from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";


class App extends React.Component {

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

    // handleAddPlayer = (name) => {
    //     this.setState(prevState => ({
    //         players: [...prevState.players, {name: name, score: 0, id: ++this.maxId}]
    //     }));
    // }

    render() {
        return (
            <div className="scoreboard">
                <Header title='My scoreboard' players={this.props.players}/>
                {
                    this.props.players.map(player => (
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

const mapStateToProps = (state) => ({
   players: state.playerReducer.players
});

export default connect(mapStateToProps)(App);

