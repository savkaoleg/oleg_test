

import React,{Component} from 'react';
import {Input} from 'react-toolbox';

export default class Form extends Component {
  state = { name: '', email: '', pass: '', passRepeat: '' };

handleChange = (name, value) => {
  this.setState({...this.state, [name]: value});
};
    render() {
        return (
          <div className='Form'>
          <Input type='text' label='Name' name='name' value={this.state.name} onChange={this.handleChange.bind(this, 'name')} maxLength={16} />
          <Input type='email' label='Email address'  value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
          <Input type='password' label='Pass' name='password' value={this.state.pass} onChange={this.handleChange.bind(this, 'pass')} maxLength={16} />
          <Input type='password' label='Repeat pass' name='passwordRepeat' value={this.state.passRepeat} onChange={this.handleChange.bind(this, 'passRepeat')} maxLength={16} />
          </div>
        );
    }
}
