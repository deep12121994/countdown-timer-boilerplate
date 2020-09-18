import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
    constructor(props)
    {
        super(props)
        this.state = {
            count:0,
        };

       this.onSetCountdownTime = this.onSetCountdownTime.bind(this);
    }

    reset = () => {
        this.setState({count : 0});
    };

    onSetCountdownTime = (e, str) => {
        e.preventDefault();
        console.log(str);
        this.setState(() => {
            return {
                count: str,
            };
        });
    };

    render() {

        return (
            <div>
                { this.state.count && (<Clock reset={this.reset} timeInSeconds={this.state.count}/>)}
                <CountdownForm onSetCountdownTime={(t) => this.setState({count:t})}/>
            </div>
        );
    }
}

export default Countdown;