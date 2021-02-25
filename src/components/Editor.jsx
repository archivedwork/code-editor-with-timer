import { Component  } from 'react';
import { Light as SyntaxHighlighter  } from 'react-syntax-highlighter';
// import js from 'react-syntax-highlighter/dist/esm/languages/hljs/haskell';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

 const codeString = `
    sayHi :: String 
    sayHi = "Hello World!"

    sayHi :: String -> String
    sayHi x = "Hello"
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
            <div className="Editor">
                {/* <p> Editor Component </p> */}
                <textarea
                    rows="20"
                    className="custom-width"
                    value={this.state.textAreaValue}
                    onChange={this.handleChange}
                    />
                <SyntaxHighlighter language="haskell" style={docco}>
               
                    {codeString}
                </SyntaxHighlighter>
            </div>
        )
    }

}


export default Editor;