---
title: Keterkaitan antara props dan state pada react.js
description: mengambil data dari props dan menyimpannya pada state.
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-05 11:00
---

mengambil data dari props dan menyimpannya pada state. <br>
Data yang dikirimkan oleh Props nantinya akan ditangkap di Component secara langsung atau ditangkap dengan state melalui **constructor**.

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

```js
import React, {Component} from "react";

export default class Header extends Component {
  /* constructor akan dijalankan terlebih dahulu */
  constructor(props) {
    super(props);
    this.state = {
      judul: this.props.judul,
    };
  }

  render() {
    return (
      <div>
        {/* akan menampilkan Ini judul dari state*/}
        <h3>{ this.state.judul }</h3>
      </div>
    );
  }
}
```