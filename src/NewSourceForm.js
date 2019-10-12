import React, {Component} from 'react';
import uuid from 'uuid/v4';

class NewSourceForm extends Component {
    constructor(props) {
        super(props);
        this.state = { inputText: '', inputCryptogram: '', cipherType: '', inputFile: '', inputCryptogram: '' };

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
        this.setState({ inputText: '', inputCryptogram: '', inputFile: '', inputCryptogram: ''});
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
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="inputText">Text: </label>
                <input
                    type="text"
                    placeholder="inputText"
                    id="inputText"
                    name="inputText"
                    value={this.state.inputText.toLowerCase()}
                    onChange={this.handleChange} />

                <label htmlFor="inputFile">File with text: </label>
                <input
                    type="file"
                    name="inputFile" 
                    onChange={this.handleTextFile} 
                    value={this.state.inputFile}/>

                <label htmlFor="inputCryptogram">Cryptogram: </label>
                <input
                    type="text"
                    placeholder="inputCryptogram"
                    id="inputCryptogram"
                    name="inputCryptogram"
                    value={this.state.inputCryptogram.toLowerCase()}
                    onChange={this.handleChange} 
                    />

                <label htmlFor="cryptogramFile">File with cryptogram: </label>
                <input
                    type="file"
                    name="cryptogramFile" 
                    onChange={this.handleCryptoFile}
                    value={this.state.cryptogramFile}
                    />

                <select value={this.state.cipherType} onChange={this.handleChange} name="cipherType">
                    <option value=""></option>
                    <option value="homophonic">homophonic</option>
                </select>

                <button>Submit</button>
            </form>
        );
    }
}

export default NewSourceForm;
