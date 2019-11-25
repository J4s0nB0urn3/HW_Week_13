import React, {Component} from 'react';
import Title from './Title';

class TitleList extends Component {
  render() {
    const titleNodes = this.props.data.map(title => {
      return (
        <Title url = {title.url} key={title.id}>{title.name}</Title>
      )
    });
    return (
      <div className = 'title-list'>
        {titleNodes}
        <div className = 'button'>
          <a className = "link" href='https://www.imdb.com/calendar/?region=gb'>View more upcoming releases >></a>
        </div>
      </div>
    )
  }
}

export default TitleList;
