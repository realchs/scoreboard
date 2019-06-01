import React from 'react';
import Counter from "./Counter";

import PropTypes from 'prop-types';

export class Player extends React.PureComponent {
    render() {
        console.log(this.props.name, ' rendered');
        const {name, score, id, changeScore, removePlayer} = this.props;

        return (
            <div className='player'>
            <span className='player-name'>
              <button className='remove-player'
                      onClick={() => removePlayer(id)}>x</button>
            </span>
            <span className='player-name'>{name}</span>
            <Counter score={score} id={id} changeScore={changeScore}/>
            </div>
        );
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log(nextProps);
    // }
    //
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(nextProps);
    //     return nextProps.score !== this.props.score;
    // }

}

Player.propTypes = {
    name: PropTypes.string,
    score: PropTypes.number,
    id: PropTypes.number,
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func
};