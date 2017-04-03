import React from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import SuccessButton from './SuccessButton.js';    // A button with complex overrides
import { Button, Input } from 'react-toolbox'; // Bundled component import
import { connect } from 'react-redux';
import { doMagic } from '../redux/actions/example';


class App extends React.Component {
  constructor(props){
    super(props);

    this.doMagic = this.doMagic.bind(this);
  }

  doMagic(){
    this.props.dispatch(doMagic('magic'));
  }

  render () {
    console.log(this)
    return (
      <div>
        <PurpleAppBar />
        {(() => {
          if(this.props.example && this.props.example.superVariable){
            return (
              <div style={{margin:'10px'}}>{this.props.example.superVariable}  <Button label='superChange' primary raised onClick={this.doMagic} /></div>
            );
          }
        })()}
        <section style={{ padding: 40 }}>
          <SuccessButton label='Success' primary raised />
          <Button label='Primary Butto' primary />
        </section>
      </div>
    );
  }
}

function select(state) {
  console.info(state);
  return {
    example:state.example
  }
}

export default connect(select)(App);