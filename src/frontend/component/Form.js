import React,{Component} from 'react';
import {Input} from 'react-toolbox';
import { Button } from 'react-toolbox/lib/button';
import theme from './SuccessButton.css';

export default class Form extends Component {
  state = { name: '', email: '', pass: '', passRepeat: '', passError: '' };

  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});

    if(name =='passRepeat'){

    if(this.state.passRepeat && this.state.pass && value != this.state.pass){
     this.setState({passError: 'err'});
    }
    else if (this.state.passRepeat && this.state.pass && value == this.state.pass) {
      this.setState({passError: ''});
    }
    }
  };

  render() {

      return (
        <form>
        <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} required/>
        <Input type='email' label='Email address'  value={this.state.email} onChange={this.handleChange.bind(this, 'email')} required/>
        <Input type='password' label='Pass' name='password' value={this.state.pass} onChange={this.handleChange.bind(this, 'pass')} maxLength={16} required/>
        <Input type='password' label='Repeat pass' name='passwordRepeat' value={this.state.passRepeat} error={this.state.passError} onChange={this.handleChange.bind(this, 'passRepeat')} maxLength={16} required/>
        <Button type='submit' label='Send' theme={theme} />
      </form>
      );
  }

}
