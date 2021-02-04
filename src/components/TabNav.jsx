import React from 'react';

class TabNav extends React.Component {
  render() {
    return (
        <div>
            <ul>
            {this.props.tabs.map(tab => {
                return (
                    <li key={tab}>
                        <a href='#' onClick={ () => this.props.setSelected(tab) }>
                            <h3>{tab}</h3>
                        </a>
                    </li>
                );
            })}
            </ul>
        </div>
    );
  }
}

export default TabNav;