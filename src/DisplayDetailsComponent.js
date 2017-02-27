// Import react dependencies
import React from 'react';

class DisplayDetails extends React.Component{

    render() {
        return(
          <div className="row">
            <div className="panel panel-success">
              <div className="panel-heading">
                <span className="detailsdata" key={this.props.index}>{this.props.value}</span>
              </div>
              <div className="panel-body">
                {this.props.item}
              </div>              
            </div>
          </div>
        );
    }
}

export default DisplayDetails;
