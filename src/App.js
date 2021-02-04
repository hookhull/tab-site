import React from 'react';
import './App.css';
import Star from './assets/images/star1.png';
import TabNav from './components/TabNav';
import Tab from './components/Tab';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'ニュース'
    }
  };

  setSelected = (tab) => {
    this.setState({ selected: tab })
  };

  render() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <a href="#">
            <img src={Star} alt="星" />
          </a>
          <h2>H.H.</h2>
        </div>
        <div className="header-right">
          <TabNav tabs={['ニュース', '作品情報', '概要', '採用技術', 'アクセス']} setSelected={ this.setSelected } />
        </div>
      </div>
      <div className="main">
        <div className="tab">
          <Tab isSelected={ this.state.selected === 'ニュース' }>
            <div className='content-wrap'>
              <h2>最新ニュース</h2>
              <div className='news-content1'></div>
              <h2>その他</h2>
              <div className='news-content2'>
                <div className='news-content2-1'></div>
                <div className='news-content2-2'></div>
              </div>
            </div>
          </Tab>
          <Tab isSelected={ this.state.selected === '作品情報' }>
            <div className='content-wrap'>
              <h2>作品情報</h2>
              <div className='works-content1'></div>
            </div>
          </Tab>
          <Tab isSelected={ this.state.selected === '概要' }>
            <div className='content-wrap'>
              <ul>
                <li>プロフィール</li>
                <li>経歴</li>
                <li>注力しているもの</li>
                <li>モットー</li>
              </ul>
            </div>
          </Tab>
          <Tab isSelected={ this.state.selected === '採用技術' }>
            <div className='content-wrap'>
              <div className='recruitment-content1'>
                <h2>採用技術</h2>
                <p>様々な技術を採用し、意欲的に学習しています。</p>
                <div className='table-wrap'>
                  <table>
                    <tr>
                      <th colspan='2' className='table-title'>フロントエンド</th>
                    </tr>
                    <tr>
                      <th>HTML&CSS</th>
                      <td>『HTML&CSS標準入門』(おのれいこ他,MdN)等で学習。</td>
                    </tr>
                    <tr>
                      <th>JavaScript＆React</th>
                      <td>少し</td>
                    </tr>
                  </table>
                </div>
                <div className='table-wrap'>
                  <table>
                      <tr>
                        <th colspan='2' className='table-title'>バックエンド</th>
                      </tr>
                      <tr>
                        <th>Node.js＆Express</th>
                        <td>少し</td>
                      </tr>
                      <tr>
                        <th>SQLite3</th>
                        <td>少し</td>
                      </tr>
                  </table>
                </div>
                <div className='table-wrap'>
                  <table>
                      <tr>
                        <th colspan='2' className='table-title'>DevOps</th>
                      </tr>
                      <tr>
                        <th>Git＆GitHub</th>
                        <td>少し</td>
                      </tr>
                      <tr>
                        <th>firebase</th>
                        <td>少し</td>
                      </tr>
                  </table>
                </div>
              </div>
            </div>
          </Tab>
          <Tab isSelected={ this.state.selected === 'アクセス' }>
            <p>地球上！</p>
          </Tab>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}};