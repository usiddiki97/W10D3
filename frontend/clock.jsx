import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({date: new Date()});
    }

    componentDidMount() {
        this.intervalID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div className ="clock-div">
                <h1>Clock</h1>
                <div className="clock">
                    <p>
                        <span>Time:</span> <span>{this.state.date.toLocaleTimeString()} EST</span>
                    </p>
                    <p>
                        <span>Date:</span> <span>{this.state.date.toDateString()}</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Clock;