import React,{Component} from 'react';
import {Input} from 'react-toolbox';
import { Button } from 'react-toolbox/lib/button';
import theme from './SuccessButton.css';
import { changeName } from '../redux/actions/changeName';
import { changeEmail } from '../redux/actions/changeEmail';
import { changePass } from '../redux/actions/changePass';
import { changePassRepeat } from '../redux/actions/changePassRepeat';
import { changePassError } from '../redux/actions/changePassError';


export default class Form extends Component {
  constructor(props){
    super(props);

    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePass = this.changePass.bind(this);
    this.changePassRepeat = this.changePassRepeat.bind(this);
    this.changePassError = this.changePassError.bind(this);
  }

  changeName(value){
    this.props.store.dispatch(changeName(value));
  };

  changeEmail(value){
    this.props.store.dispatch(changeEmail(value));
  };

  changePass(value){
    this.props.store.dispatch(changePass(value));
  };

  changePassError(value){
    this.props.store.dispatch(changePassError(value));
  };

  changePassRepeat(value){
    this.props.store.dispatch(changePassRepeat(value));

    if(this.props.store.form.passRepeat && this.props.store.form.pass && value != this.props.store.form.pass){
      this.changePassError('err');
    }
    else if (this.props.store.form.passRepeat && this.props.store.form.pass && value == this.props.store.form.pass) {
      this.changePassError('');
    }

  };




  render() {

      return (
        <form>
          <Input type='text' label='Name' name='name' value={this.props.store.form.name} onChange={this.changeName.bind(this)} maxLength={16} required/>
          <Input type='email' label='Email address'  value={this.props.store.form.email} onChange={this.changeEmail.bind(this)} required/>
          <Input type='password' label='Pass' name='password' value={this.props.store.form.pass} onChange={this.changePass.bind(this)} maxLength={16} required/>
          <Input type='password' label='Repeat pass' name='passwordRepeat' value={this.props.store.form.passRepeat} error={this.props.store.form.passError} onChange={this.changePassRepeat.bind(this)} maxLength={16} required/>
          <Button type="submit" label='Send' theme={theme} onClick={this.changeName} />
        </form>
      );
  }

}
