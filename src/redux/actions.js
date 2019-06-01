import {ADD_PLAYER, CHANGE_SCORE} from "./actiontype";

export const addPlayer = (name) => ({
   type: ADD_PLAYER,
   name
});

export const changeScore = (id, delta) => ({
   type: CHANGE_SCORE,
   id,
   delta
});