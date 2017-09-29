import React from 'react';
let data = require('../data.json');
import EventCard from 'components/eventcard';
import DateChanger from 'components/datechanger';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data,
      date: new Date()
    }
    this.incDate = this.incDate.bind(this);
    this.decDate = this.decDate.bind(this);
  }
  incDate(){
    this.setState((prev) => {
      let dateClone = new Date(prev.date.getTime());
      dateClone.setDate(dateClone.getDate()+1);
      return {...prev, date: dateClone}
    });
  }
  decDate(){
    this.setState((prev) => {
      let dateClone = new Date(prev.date.getTime());
      dateClone.setDate(dateClone.getDate()-1);
      return { ...prev, date: dateClone }
    })
  }
  render() {
    let d = `${this.state.date.getMonth() + 1}/${this.state.date.getDate()}`;
    let c = 0;
    return(
      <div className="main-wrapper">
        <DateChanger current={this.state.date} decDate={this.decDate} incDate={this.incDate}/>
      {
        this.state.data.events.map((i) => {
          if(i.dates.indexOf(d) >= 0){
              c++
              return <EventCard key={i.name} event={i}/>
          }
        })
      }
      {c>0?'':<div className='no-events'>No Events Today</div>}
      </div>
    )
  }
}
