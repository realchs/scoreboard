import React from 'react';

export class Stopwatch extends React.Component {
    state = {
        timer: 0,
        isRunning: false
    }
    tickRef;

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{this.state.timer}</span>
                <button onClick={this.handleStopwatch}>{this.state.isRunning? "Stop":"Start"}</button>
                <button onClick={this.resetStopwatch}>Reset</button>
            </div>
        );
    }

    // DOM이 렌더링된 직후 호출됨, 주로 네트워크 호출, 3rd party 라이브러리 로딩
    componentDidMount() {
        this.tickRef = setInterval(this.tick, 1000);
    }

    // DOM이 파괴되기 직전에 호출, 주로 리소스 해제
    componentWillUnmount() {
        clearInterval(this.tickRef);
    }

    tick = () => {
        if (this.state.isRunning) {
            this.setState(prevState => ({
                timer: prevState.timer + 1
            }));
        }
    }

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }));
    }

    resetStopwatch = () => {
        this.setState({timer: 0})
    }
}