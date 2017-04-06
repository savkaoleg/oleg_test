import React from 'react';
import FontIcon from 'react-toolbox/lib/font_icon';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
import { Button, Input } from 'react-toolbox'; // Bundled component import
import { connect } from 'react-redux';
import Form from './Form.js'
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
    return (
      <div>
        <PurpleAppBar />
        {(() => {
          if(this.props.example && this.props.example.superVariable){
            return (
              <div style={{margin:'10px'}}>{this.props.example.superVariable}
                <Button label='superChange' primary raised onClick={this.doMagic} />
              </div>
            );
          }
        })()}
        <section style={{ padding: 40 }}>
            <Form store={this.props}/>
        </section>
      </div>
    );
  }
}

function select(state) {

  return {
    example:state.example,
    form:state.form

}
}

export default connect(select)(App);
