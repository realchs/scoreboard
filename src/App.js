import React from 'react';
import './App.css'

const Header = (props) => {
    const {title, totalPlayers} = props;
    return (
        <header>
            <h1>{title}</h1>
            <span className='status'>Players: {totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    const {name, id, removePlayer} = props;
    return (
        <div className="player">
            <span className='player-name'>
                <button className='remove-player'
                        onClick={() => removePlayer(id)}> x </button>
            </span>
            <span className="player-name">{name}</span>
            <Counter/>
        </div>
    );
}

class Counter extends React.Component {
    // constructor(props) {
    //     super();   //부모 생성자를 호출해서 부모의 속성값을 초기화
    //     //this.incrementScore = this.incrementScore.bind(this);  //예전방법
    //     this.state = {
    //         score: props.score
    //     }
    // }

    이렇게도됨
    state = {
        score: this.props.score
    }

    changeScore = (delta) => {
        this.setState(prevState => ({
            score: prevState.score + delta
        }));
    }

    incrementScore = () => {
        console.log(this);    // 이건 lexical this (부모를 잊지 않는다)
        //this.setState({score: this.state.score + 1});   이렇게하면 비동기에서 처리가 보장되지 않음
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    }
    decrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score - 1
        }));
    }

    render(){
        return (
            <div className="counter">
                <button className="counter-action decrement"
                        onClick={() => this.changeScore(-1)}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment"
                        onClick={() => this.changeScore(1)}> + </button>
            </div>
        );
    }
}

class App extends React.Component {
    state = {
        players:[
            {name: 'realchs', id: 1},
            {name: 'mgc', id: 2},
            {name: 'park', id: 3},
            {name: 'kim', id: 4}
        ]
    }
    handleRemovePlayer = (id) => {
        console.log(id);
        this.setState(prevState => ({
            players: prevState.players.filter(item => item.id != id)
        }));
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title='My scoreboard' totalPlayers={this.state.players.length}/>
                {
                    this.state.players.map(player => (
                        <Player name = {player.name} score = {player.score} key = {player.id}
                                id = {player.id} removePlayer={this.handleRemovePlayer}/>
                    ))
                }
            </div>
        );
    }

}


// const App = (props) => {
//     const {initialPlayers} = props;
//     return (
//         <div className="scoreboard">
//             <Header title='My scoreboard' totalPlayers={initialPlayers.length}/>
//             {
//                 initialPlayers.map(player => (
//                     <Player name={player.name} score={player.score} key={player.id}/>
//                 ))
//             }
//         </div>
//     );
// }

export default App;

