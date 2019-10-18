import React, {Component} from 'react';
import './App.scss';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render(){
        return (
            <div className="App text-center container-fluid">
                <h1>Cypher.io</h1>
                <TaskList />
            </div>
        );
    }

}

export default App;
