import React from 'react';
class TabNav extends React.Component {
  render() {
    return (
        <div>
            <ul>
            {this.props.tabs.map(tab => {
                return (
                    <li key={ tab }>
                        <a href='#' onClick={ () => this.props.setSelected(tab) }>
                            { tab }
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