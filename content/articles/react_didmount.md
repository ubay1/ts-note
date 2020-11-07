---
title: component DidMount pada react.js
description: method componentDidMount akan berjalan secara otomatis setelah fungsi render dijalankan.
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-07 08:30
---

method componentDidMount akan berjalan secara otomatis setelah fungsi render dijalankan. <br><br>
contoh: <br><br>

Home.js <br>
```js
import ComDidMount from './ComDidMount.js';

export default function HomePage() {
  return (
    <div className="mb-4">
      <ComDidMount nama="udin" />
    </div>
  );
}
```
<br>

ComDidMount.js <br>
```js
import React, {Component} from 'react'

export default class ComDidMount extends Component{
  constructor(props) {
    super(props);

    this.state = {
      stateFuncCom : '',
      stateFuncCom2 : ''
    }
  };

  componentDidMount() {
    this.setValue()
    this.setValueWithProps()
  }

  // method akan dijalankan di componentDidMount()
  setValue() {
    this.setState({
      stateFuncCom: 'halllo from componentDidMount'
    })
  }

  // method akan dijalankan di componentDidMount()
  setValueWithProps() {
    this.setState((state, props) => {
      return {
        stateFuncCom2: `componentDidMount with props. props = ${props.nama}`
      }
    })
  }
  
  render() {
    return (
      <div className="px-4 py-4 bg-purple-500 text-white mx-4 rounded-md shadow-md">
        {this.state.stateFuncCom} <br /><br />
        {this.state.stateFuncCom2} <br /><br />
      </div>
    );
  }
}
```