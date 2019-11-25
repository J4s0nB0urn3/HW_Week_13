import React, {Component} from 'react';

class Title extends Component {
  render() {
    return (
      <div className='title'>
        <ul className='title-ulist'>
          <li className='title-element'>
            <a className = "link" href={this.props.url} target='_blank'>{this.props.children}</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Title;
