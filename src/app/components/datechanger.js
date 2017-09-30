import React from 'react';

export default class DateChanger extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showPicker: false,
      month: this.props.current.getMonth()+1,
      day: this.props.current.getDate()
    }
    this.toggleDatePick = this.toggleDatePick.bind(this);
    this.updateMonth = this.updateMonth.bind(this);
    this.updateDay = this.updateDay.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      month: nextProps.current.getMonth()+1,
      day: nextProps.current.getDate()
    })
  }
  toggleDatePick(){
    this.setState((p) => {
      return { ...p, showPicker: !p.showPicker}
    });
  }
  updateMonth(e){
    let month = e.target.value;
    if(!isNaN(month)){
      this.setState((p)=>{
        return {...p, month}
      })
    }
  }
  updateDay(e){
    let day = e.target.value;
    if(!isNaN(day)){
      this.setState((p)=>{
        return {...p, day}
      })
    }
  }
  handleDateChange(){
    this.toggleDatePick();
    this.props.setNewDate(this.state.month, this.state.day);
  }
  render() {
    let date = `${this.props.current.getMonth() + 1}/${this.props.current.getDate()}`,
        monthOptions = [],
        dateOptions = [],
        upTo = this.state.month == 10 ? 31 : 30,
        lookup = {9: 'Sept.', 10: 'Oct.', 11: 'Nov.'};
        for(let i = 9; i <= 11; i++){
          monthOptions.push(<option key={`m${i}`} value={i}>{lookup[i]}</option>);
        }
        for(let j = 1; j <= upTo; j++){
          dateOptions.push(<option key={`d${j}`} value={j}>{j}</option>)
        }
    return(
      <div className='date-changer'>
        { this.state.showPicker ? (
          <div className='date-wrap'>
            <div className='pick-a-date'>
              <select value={this.state.month} onChange={this.updateMonth}>
                {monthOptions}
              </select>
              <select value={this.state.day} onChange={this.updateDay}>
                {dateOptions}
              </select>
              <div className='submit-date' onClick={this.handleDateChange}>Submit</div>
            </div>
          </div>
        ) : (
          <div className='date-wrap'>
            <div className='control back' onClick={this.props.decDate}>&lt;</div>
            <div className='date' onClick={this.toggleDatePick}>{date}</div>
            <div className='control forward' onClick={this.props.incDate}>&gt;</div>
          </div>
        )}
      </div>
    )
  }
}
