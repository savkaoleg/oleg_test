import React,{Component} from 'react';
import {Input} from 'react-toolbox';
import { Button } from 'react-toolbox/lib/button';
import theme from './SuccessButton.css';
import { changeVariable } from '../redux/actions/changeVariable';



export default class Form extends Component {
  constructor(props){
    super(props);

    this.changeVariable = this.changeVariable.bind(this);

  }

  changeVariable(name, value){
    this.props.store.dispatch(changeVariable(name, value));
    if(name == 'CHANGE_PASSREPEAT_VARIABLE'){
      if(this.props.store.form.passRepeat && this.props.store.form.pass && value != this.props.store.form.pass){
        this.changeVariable('CHANGE_PASSERROR_VARIABLE', 'err');
      }
      else if (this.props.store.form.passRepeat && this.props.store.form.pass && value == this.props.store.form.pass) {
        this.changeVariable('CHANGE_PASSERROR_VARIABLE', '');
      }
     }
   };


  render() {

      return (
        <form>
          <Input type='text' label='Name' name='name' value={this.props.store.form.name} onChange={this.changeVariable.bind(this, 'CHANGE_NAME_VARIABLE')} maxLength={16 } required/>
          <Input type='email' label='Email address'  value={this.props.store.form.email} onChange={this.changeVariable.bind(this, 'CHANGE_EMAIL_VARIABLE')} required/>
          <Input type='password' label='Pass' name='password' value={this.props.store.form.pass} onChange={this.changeVariable.bind(this, 'CHANGE_PASS_VARIABLE')} maxLength={16} required/>
          <Input type='password' label='Repeat pass' name='passwordRepeat' value={this.props.store.form.passRepeat} error={this.props.store.form.passError} onChange={this.changeVariable.bind(this, 'CHANGE_PASSREPEAT_VARIABLE')} maxLength={16} required/>
          <Button type="submit" label='Send' theme={theme} />
        </form>
      );
  }

}
