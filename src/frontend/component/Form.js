import React,{Component} from 'react';
import {Input} from 'react-toolbox';
import { Button } from 'react-toolbox/lib/button';
import theme from './SuccessButton.css';
import { changeVariable } from '../redux/actions/changeVariable';
import { doMagicAjax } from '../redux/actions/example';
import { sendForm } from '../redux/actions/changeVariable';

export default class Form extends Component {
  constructor(props){
    super(props);

    this.changeVariable = this.changeVariable.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(){
    this.props.store.dispatch(sendForm());
  }

  componentDidMount(){
    this.props.store.dispatch(doMagicAjax());
  }

  changeVariable(name, value){
    this.props.store.dispatch(changeVariable(name, value));
    if(name == 'passRepeat'){
      if(this.props.store.form.passRepeat && this.props.store.form.pass && value != this.props.store.form.pass){
        this.changeVariable('passError', 'err');
      }
      else if (this.props.store.form.passRepeat && this.props.store.form.pass && value == this.props.store.form.pass) {
        this.changeVariable('passError', '');
      }
     }
   };


  render() {

      return (
        <form>
        <p>{this.props.store.form.sendStatus ? this.props.store.form.sendStatus : ''}</p>
        <Input type='text' label='Name' name='name' value={this.props.store.form.name} onChange={this.changeVariable.bind(this, 'name')} maxLength={16 } disabled={this.props.store.form.formStatus} required/>
          <Input type='email' label='Email address'  value={this.props.store.form.email} onChange={this.changeVariable.bind(this, 'email')} disabled={this.props.store.form.formStatus} required/>
          <Input type='password' label='Pass' name='password' value={this.props.store.form.pass} onChange={this.changeVariable.bind(this, 'pass')} maxLength={16} disabled={this.props.store.form.formStatus} required/>
          <Input type='password' label='Repeat pass' name='passwordRepeat' value={this.props.store.form.passRepeat} error={this.props.store.form.passError} onChange={this.changeVariable.bind(this, 'passRepeat')} maxLength={16} disabled={this.props.store.form.formStatus} required/>
          <Button label='Send' theme={theme} onClick ={this.sendForm} disabled={this.props.store.form.formStatus} />
        </form>
      );
  }

}
