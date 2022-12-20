import React, { Component } from 'react';
import ReactTable from 'react-table';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataList: [],
    };
  }
  async componentDidMount() {
    let res = await fetch(
      'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0'
    );
    let data = await res.json();
    await this.setState({
      dataList: data.dataseries,
    });
    console.log(data.dataseries);
  }
  render() {
    return (
      <div>
        Hello React
        {this.state.dataList &&
          this.state.dataList.map((item, i) => {
            return (
              <table style={{ border: '1px solid black' }}>
                <tr
                  style={{ borderRight: '1px solid black' }}
                  key={`${i} + index`}
                >
                  {`${i}  + index`}
                  <td>{item.cloudcover}</td>
                  <td>{item.lifted_index}</td>
                  <td>{item.prec_type}</td>
                  <td>{item.rh2m}</td>
                  <td>{item.seeing}</td>
                </tr>
              </table>
            );
          })}
      </div>
    );
  }
}
