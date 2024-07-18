import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        };
    }

    toggleText = () => {
        let previousState = this.state.isExpand;
        this.setState({isExpand: !previousState});
    }

    render() {
        let message;
        if (this.state.isExpand) {
            message = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        }
        return (<div>
            <button type='button'
                    onClick={this.toggleText}> Xem giới thiệu
            </button>
            <h1>{message}</h1>
        </div>)
            ;
    }
}

export default App;
