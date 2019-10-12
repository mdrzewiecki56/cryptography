import React, {Component} from 'react';
import NewSourceForm from './NewSourceForm'
import Task from './Task'

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
        <div>
            <NewSourceForm createTask={this.create}/>
            <Task 
            inputText="ala ma kota"
            inputCryptogram="a0:r;a1:p;a2::;a3:z;l0:o;m0:u;k0:,;o0:t;t0:f; 0:a; 1:b; 2:c;"
            cipherType="homophonic"
            key = "test_key"
            id = "test_key"
            />
            {tasks}
        </div>
        );
    }
}

export default TaskList;