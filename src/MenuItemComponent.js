// Import react dependencies
import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    // Manually bind method handleMenuClick to access parent properties
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
    render(){
        return(
          <li className="list-group-item" onClick={this.handleMenuClick} key={this.props.index}><span className="glyphicon glyphicon-arrow-right icons"></span>{this.props.item}</li>
        );
    }

    //Custom functions
    handleMenuClick() {
        this.props.onMenuClicked(this.props.item);
    }
}

export default MenuItem;
