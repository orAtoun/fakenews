import React, {Component} from 'react'
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import Chart from 'react-google-charts'


export default class Main extends Component{

  constructor(){
    super();
    this.state = {
      data : [
      ]

    };
    this.inputRef = React.createRef();
  }

  fetchScore = () =>{
    //SEND THE VALUE OF THE INPUT TO SRVER
    this.inputRef.current.value = "";
    this.setState({
      data : [
          [
            { type: 'string', label: 'Parameter' },
            { type: 'number', label: 'Score' },
          ]
         ]
    })
  };






  render() {
    return (
      <div>
        <div className={"heading"}>
          <span style={{color:"#4285f4"}}>C</span>
          <span style={{color:"#ea4335"}}>h</span>
          <span style={{color:"#fbbc05"}}>e</span>
          <span style={{color:"#4285f4"}}>c</span>
          <span style={{color:"#34a853"}}>k</span>
          <span style={{color:"#ea4335"}}>-</span>
          <span style={{color:"#4285f4"}}>N</span>
          <span style={{color:"#ea4335"}}>e</span>
          <span style={{color:"#fbbc05"}}>w</span>
          <span style={{color:"#4285f4"}}>s</span>




        </div>
        <InputGroup className="inputCheckNews">
          <FormControl
            ref={this.inputRef}
            placeholder="Enter URL"
            aria-label="Enter URL"
          />
          <InputGroup.Append>
            <Button style={{marginLeft : "18px"}} variant="outline-primary" onClick={this.fetchScore}>Check</Button>
          </InputGroup.Append>
        </InputGroup>
        <Chart
          chartType={"Table"}
          width={"500px"}
          height={"700px"}
          data={this.state.data}/>

      </div>

    )


  }


}

