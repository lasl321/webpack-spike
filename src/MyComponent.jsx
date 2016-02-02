import './MyComponent.sass';
import React from 'react';
import $ from 'jquery'

class Xyz {
    getName() {
        return 'theName';
    }
}

export default React.createClass({
  render: function () {
      console.log($);
    return (
      <div className="MyComponent-wrapper">
        <h1>Hello ma'am</h1>
      </div>
    )
  }
});
