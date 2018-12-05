import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.searchUser = props.searchUser || (() => {});
        this.selectUserByArrow = props.selectUserByArrow  || (() => {});
        this.state = {
            users: [],
            input: ""
        };

        this.setInput = this.setInput.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    setInput(event) {
        event.preventDefault();
        this.setState({input: event.target.value});
        this.searchUser(this.state.input);
    }

    handleSubmit(event) {
        console.log("submit !");
        event.preventDefault();
    }

    handleKeyDown(event) {
        switch (event.key) {
            case "Enter":
                console.log("enter");
                break;
            case "ArrowDown":
                console.log("arrow down");
                event.preventDefault();
                this.selectUserByArrow(1);
                break;
            case "ArrowUp":
                console.log("arrow up");
                event.preventDefault();
                this.selectUserByArrow(-1);
                break;
            default:
        }
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.input} onChange={this.setInput}
                           onKeyDown={this.handleKeyDown}/>
                </form>
            </section>
        );
    }
}

export default Form;
