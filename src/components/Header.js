import React from 'react';
import {Statistics} from "./Statistics";
import {Stopwatch} from "./Stopwatch";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Header = ({title, players}) => {
    // console.log(props);
    // destruct assignment
    // const {title, players} = props;
    return (
        <header>
            <Statistics players={players}/>
            <h1>{title}</h1>
            <Stopwatch/>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        id: PropTypes.number
    }))
}

Header.defaultProps = {
    title: 'Default Title',
}

const mapStateToProps = (state) => ({
    title: state.playerReducer.title
})

export default connect(mapStateToProps)(Header)