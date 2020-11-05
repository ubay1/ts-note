---
title: cara kerja props pada react.js
description: Komunikasi data dengan props pada tiap-tiap komponen
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-05 10:00
---

```js
import React, { Component } from 'react';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header judul='ini home page' nama='udin' />
      </div>
    );
  }
}
```

pada kode diatas, kita mengirim 2 data yaitu **judul dan nama**, ke component **Header**. <br><br>

menampilkan data yang dikirim : <br>
# cara 1 dengan function component
```js
import React from 'react'
import '../css/tailwind.css'

export default function Header(props) {
    return (
      <div className="text-white font-bold text-xl text-center bg-green-500 p-4">
        {/* menampilkan props pada function component */}
        {props.judul} {props.nama}
      </div>
    );
}
```
<br>

# cara 2 dengan class component
```js
import React from 'react';
import '../css/tailwind.css'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="text-white relative bottom-0 w-full mt-4 font-bold text-xl text-center bg-green-500 p-4 footer">
        {/* menampilkan props pada class component */}
        {this.props.judul} <br/>
        {this.props.nama} <br/>
      </div>
    );
  };
}
```