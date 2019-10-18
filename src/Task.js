import React, {Component} from 'react';
import Homophonic from './Homophonic'


class Task extends Component {
    constructor(){
        super();
        this.saveFile = this.saveFile.bind(this);
    }

    saveFile(decypheredText,task){
        var fileContents =             
        "Text:" + this.props.inputText +
        "\nCryptogram:" + this.props.inputCryptogram +
        "\nCipherType:" + this.props.cipherType +
        "\nCoded message:" + task.cyphered +
        "\nDecoded message for validity check:" + decypheredText;
        var filename = "output.txt";
        var filetype = "text/plain";

        var a = document.createElement("a");
        var dataURI = "data:" + filetype +
            ";base64," + btoa(fileContents);
        a.href = dataURI;
        a['download'] = filename;
        var e = document.createEvent("MouseEvents");
        // Use of deprecated function to satisfy TypeScript.
        e.initMouseEvent("click", true, false,
            document.defaultView, 0, 0, 0, 0, 0,
            false, false, false, false, 0, null);
        a.dispatchEvent(e);
    }



    render(){
        let newTask = new Homophonic(this.props.inputText);
        let decyphered = newTask.decypher();

        return(
        <div className="row">
            <div className="col-md-6">
                <p>Text: {this.props.inputText}</p>
                {/* <p>Cryptogram: "{this.props.inputCryptogram}"</p> */}
                {/* <p>CipherType: {this.props.cipherType}</p> */}
                <p>Coded message: {newTask.cyphered}</p>
                <p>Decoded message for validity check: {decyphered}</p>
                <button onClick={(decyphered,newTask) => this.saveFile(newTask,decyphered)}>Save to File!</button>
                <hr></hr>
            </div>
        </div>
        );
    }
}

export default Task;