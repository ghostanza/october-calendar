import React from 'react';

export default class EventCard extends React.Component {
  render() {
    return(
      <div className="event-card">
        <a href={this.props.event.link} target="_blank">
        { this.props.event.image ? (<div className="bg-img" style={{backgroundImage: `url(${this.props.event.image})`}}></div>) : '' }
        <div className="event-content">
          <div className="main-info">
            { this.props.event.series ? (<p className="series-name">{this.props.event.series}</p>) : ''}
            {this.props.event.name ? (<h2 className="event-name">{this.props.event.name}</h2>) : ''}
          </div>
          <div className="sub-info">
            {this.props.event.location ? (<h3 className="event-location">{this.props.event.location}</h3>) : ''}
            {this.props.event.types ? (<p className="event-type">{this.props.event.types.join(', ')}</p>) : ''}
          </div>
        </div>
        { this.props.event.link ? (<div className="more-info">More Info</div>) : ''}
        </a>
      </div>
    )
  }
}
