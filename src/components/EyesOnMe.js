import React from 'react';

class EyesOnMe extends React.Component {


  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>
        Eyes on me, please!
      </button>
    )
  }
}

export default EyesOnMe;