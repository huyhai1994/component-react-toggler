import './App.css';
import '/bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Component} from "react";


class App extends Component() {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: false
        }
    }

    render() {
        return <div className="App">
        </div>
    }
}

export default App;
