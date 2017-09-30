import React from 'react';
let data = require('../data.json');
import EventCard from 'components/eventcard';
import DateChanger from 'components/datechanger';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data,
      date: new Date(),
      searchType: 'date'
    }
    this.incDate = this.incDate.bind(this);
    this.decDate = this.decDate.bind(this);
    this.setNewDate = this.setNewDate.bind(this);
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
  setNewDate(month, day){
    let monthFormat = parseInt(month) <= 9 ? (0+(parseInt(month)).toString()) : month;
    this.setState((p)=>{
      return { ...p, date: new Date(`${monthFormat}/${day}/2017` : ''), searchType: 'date'}
    });
  }
  render() {
    let d = `${this.state.date.getMonth() + 1}/${this.state.date.getDate()}`;
    let c = 0;
    return(
      <div className="main-wrapper">
        <div className="picker">
          {this.state.searchType == 'date' ? (<DateChanger current={this.state.date} decDate={this.decDate} incDate={this.incDate} setNewDate={this.setNewDate}/>) : ''}
        </div>
      {
        this.state.data.events.map((i) => {

          if(this.state.searchType == 'date' && i.dates.indexOf(d) >= 0){
              c++
              return <EventCard key={i.name} event={i} />
          } else if( this.state.searchType != 'date' && i.types.indexOf(this.state.searchType) >= 0 ){
            c++
            return <EventCard key={i.name} event={i} withDate />
          }
        })
      }
      {c>0?'':<div className='no-events'>No Events Today</div>}
      </div>
    )
  }
}
