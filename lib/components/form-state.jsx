import React from 'react';
import {Component} from 'relax-framework';
import Spinner from './spinner';
import Animate from './animate';

export default class FormState extends Component {
  render () {
    if (this.props.state === 'loading') {
      return (
        <Animate transition='slideDownIn' key={this.props.state}>
          <div className='form-state'>
            <Spinner />
            <span>{this.props.message}</span>
          </div>
        </Animate>
      );
    } else if (this.props.state === 'error') {
      return (
        <Animate transition='slideDownIn' key={this.props.state}>
          <div className='form-state error'>
            <i className='material-icons'>close</i>
            <span>{this.props.message}</span>
          </div>
        </Animate>
      );
    } else if (this.props.state === 'success') {
      return (
        <Animate transition='slideDownIn' key={this.props.state}>
          <div className='form-state success'>
            <i className='material-icons'>check</i>
            <span>{this.props.message}</span>
          </div>
        </Animate>
      );
    } else {
      return null;
    }
  }
}

FormState.propTypes = {
  state: React.PropTypes.string,
  message: React.PropTypes.string
};
