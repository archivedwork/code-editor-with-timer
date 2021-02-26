import { Component  } from 'react';
import { Light as SyntaxHighlighter  } from 'react-syntax-highlighter';
// import js from 'react-syntax-highlighter/dist/esm/languages/hljs/haskell';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

 const codeString = `
module App where

sayHi :: String 
sayHi = "Hello World!"

sayHi :: String -> String
sayHi x = "Hello"

-- fact
fact 0 = 1
fact 1 = 1
fact x = x * fact (x-1)



 `;



class Editor extends Component {
    constructor() {
        super();
        this.state = {
            textAreaValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
        // const codeString1 = `${this.state.textAreaValue}`;

    }


    handleChange(event) {
        console.log(event.target.value)
       this.setState({textAreaValue: event.target.value});
    }
   
    render(){
        return (
            <div className="row">
                <div className="col-md-6">
                <textarea
                    id="txt"
                    rows="25"
                    className="custom-width"
                    value={this.state.textAreaValue}
                    onChange={this.handleChange}
                    />
                </div>

                <div className="col-md-6">
                    <div className="custom-text-align">
                    <SyntaxHighlighter language="haskell" style={docco} >
                        {codeString}
                    </SyntaxHighlighter>
                    </div>
                </div>
                {/* <p> Editor Component </p> */}
                
                
                
            </div>
        )
    }

}


export default Editor;