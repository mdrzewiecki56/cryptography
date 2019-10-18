import React, {Component} from 'react';
import NewSourceForm from './NewSourceForm'
import Task from './Task'
import './TaskList.scss';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {TaskList: []};

        this.create = this.create.bind(this);
    }

    create(newTask){
        this.setState({
            TaskList: [...this.state.TaskList, newTask]
        }); 
    }

    render(){
        const tasks = this.state.TaskList.map((task) =>
        <Task 
        inputText={task.inputText}
        inputCryptogram={task.inputCryptogram}
        cipherType={task.cipherType}
        key = {task.key}
        id = {task.key}
        />);

        return(
        <div className="TaskList">
            <div className="row">
                <NewSourceForm createTask={this.create}/>
            </div>
            {tasks}
        </div>
        );
    }
}

export default TaskList;