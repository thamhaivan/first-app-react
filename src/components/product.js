import React, { Component } from 'react';

class Product extends Component {
  render() {
    var a = 5;
    return (
      <div className="col">
        <div className="thumbnail">            
            <img src="https://loremflickr.com/320/240" className="img-responsive" alt="Image" />
            <div className="caption">
                <h3>Title</h3> 
                <p>{a}....</p>
                <p><a className="btn btn-primary btn-sm">Action</a></p>
            </div>
        </div>
      </div>
    );
  }
}

export default Product;
