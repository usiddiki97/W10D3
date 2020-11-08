import React from 'react';

class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {selectedTab: 0};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(index) {
    this.setState({selectedTab: index});
  }

  // const tabs = [{ title: "one", content: "I am the first" },
  //               { title: "two", content: "I am the second" },
  //               { title: "three", content: "I am the third" }];

  render() {

    const tabs = this.props.tabs;


    const headers = tabs.map((obj, index) => {
      let className = (this.state.selectedTab === index) ? "selected" : "";
      return (
        <li key={index} className={className} onClick={() => {this.clickHandler(index)}}><h1>{obj.title}</h1></li>
        )
    });

    return (
        <div className="tabs-div">
            <h1>Tabs</h1>
            <div className="tabs-container">
              <ul className="header-list">{headers}</ul>
              <div className="tab-content">{tabs[this.state.selectedTab].content}</div>
            </div>
        </div>
    )
  }
}
export default Tabs;