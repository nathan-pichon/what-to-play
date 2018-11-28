import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    onSubmit() {
        console.log("submit !");
    }

    render() {
        return (
            <section>
                <form onSubmit={Form.onSubmit()}>
                </form>
            </section>
        );
    }
}

export default Form;
