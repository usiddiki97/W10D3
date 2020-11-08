import React from "react";

class AutoComplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event){
        this.setState({ inputVal: event.currentTarget.value });
    }

    onClick(event) {
        this.setState({ inputVal: event.currentTarget.innerText});
    }

    render() {
        const lis = this.props.names.map((name, index) => {
          if (name.toLowerCase().match("^"+this.state.inputVal.toLowerCase()) || !this.state.inputVal.length){
            return (
              <li key={index} onClick={this.onClick}>{name}</li>
            )
        }}) 
        return (
          <div className="auto-div">
              <h1>AutoComplete</h1>
              <div className="auto-container">
              <input className="auto-input" value={this.state.inputVal} onChange={this.onChange} placeholder="Search..."/>
              <ul>
                {lis}
              </ul>
            </div>
        </div>
        )
    }
}

export default AutoComplete;