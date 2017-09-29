import React from 'react';

export default class DateChanger extends React.Component {
  render() {
    let date = `${this.props.current.getMonth() + 1}/${this.props.current.getDate()}`;
    return(
      <div className='date-changer'>
        <div className='control back' onClick={this.props.decDate}>&lt;</div>
        <div className='date'>{date}</div>
        <div className='control forward' onClick={this.props.incDate}>&gt;</div>
      </div>
    )
  }
}
