import React, {Component} from 'react';
import uuid from 'uuid/v4';

class NewSourceForm extends Component {
    constructor(props) {
        super(props);
        this.state = { inputText: '', inputCryptogram: '', cipherType: '', inputFile: '', cryptogramFile: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextFile = this.handleTextFile.bind(this);
        this.handleCryptoFile = this.handleCryptoFile.bind(this);
    }

    handleChange(evt) {
        const target = evt.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        let newId = uuid();
        let newTask;
        if (evt.target.file !== undefined)
            newTask = {...this.state, key: newId, id: newId};
        else
            newTask = {...this.state, key: newId, id: newId};

        this.props.createTask(newTask);
        this.setState({ inputText: '', inputCryptogram: '', inputFile: '', cryptogramFile: ''});
    }

    handleTextFile(evt){
            let files = evt.target.files;
            let reader = new FileReader();
            let text;
            reader.readAsText(files[0])
            reader.onload = (e) =>{
                text = reader.result;
                console.log(text);
                this.setState({inputText: text});
            };
    }

    handleCryptoFile(evt){
        let files = evt.target.files;
        let reader = new FileReader();
        let text;
        reader.readAsText(files[0])
        reader.onload = (e) =>{
            text = reader.result;
            console.log(text);
            this.setState({inputCryptogram: text});
        };
}


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="newTaskForm col-md-6 col-md-offset-5">

                <div className="form-row">
                    <label htmlFor="inputText" className="col-sm-2 col-form-label col-form-label">Text: </label>
                        <div class="col-sm-10">
                            <input
                                type="text"
                                placeholder="inputText"
                                id="inputText"
                                name="inputText"
                                value={this.state.inputText.toLowerCase()}
                                onChange={this.handleChange}
                                className="form-control" />
                        </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="inputFile" className="col-sm-2 col-form-label col-form-label">File with text: </label>
                            <div class="col-sm-10">
                                <input
                                    type="file"
                                    name="inputFile" 
                                    onChange={this.handleTextFile} 
                                    value={this.state.inputFile}
                                    className="custom-file"/>
                            </div>
                    </div>
                    
                    <div className="form-row">
                        <label htmlFor="inputCryptogram" className="col-sm-2 col-form-label col-form-label">Cryptogram: </label>
                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    placeholder="inputCryptogram"
                                    id="inputCryptogram"
                                    name="inputCryptogram"
                                    value={this.state.inputCryptogram.toLowerCase()}
                                    onChange={this.handleChange} 
                                    className="form-control"
                                    disabled/>
                            </div>
                    </div>

                    <div className="form-row">
                        <label htmlFor="cryptogramFile" className="col-sm-2 col-form-label col-form-label">File with cryptogram: </label>
                            <div class="col-sm-10">
                                <input
                                    type="file"
                                    name="cryptogramFile" 
                                    onChange={this.handleCryptoFile}
                                    value={this.state.cryptogramFile}
                                    className="custom-file"
                                    disabled/>
                            </div>
                    </div>

                    <div className="form-row">
                            <label htmlFor="cipherType" className="col-sm-2 col-form-label col-form-label">Cypher type: </label>
                        <div class="col-sm-1">
                            <select value={this.state.cipherType} className="custom-select mr-sm-2" onChange={this.handleChange} name="cipherType">
                                <option value=""></option>
                                <option value="homophonic">?</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <button>Submit</button>
                    </div>
            </form>
        );
    }
}

export default NewSourceForm;
