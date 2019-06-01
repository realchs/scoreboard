import {ADD_PLAYER, CHANGE_SCORE} from "../actiontype";

const playerInitialState = {
    title: "Redux Scoreboard",
    players:[
        {name: 'realchs', score: 0, id: 1},
        {name: 'mgc', score: 0, id: 2},
        {name: 'park', score: 0, id: 3},
        {name: 'kim', score: 0, id: 4}
    ]
};

let InitId = 4;

export const playerReducer = (state = playerInitialState, action) => {
    switch(action.type) {
        case ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, {name: action.name, score:0, id: ++InitId}]
            }
        case CHANGE_SCORE:
            state.players.forEach(item => {
               if (item.id === action.id) {
                   item.score += action.delta
               }
            });
            return {
                ...state,
                players: [...state.players]
            }
        default:
            return state;
    }
};