---
title: Untuk apa state pada react.js ?
description: state pada react.js berguna untuk menyimpan data yang akan digunakan oleh component.
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-05 10:00
---

state pada react.js berguna untuk menyimpan data yang akan digunakan oleh component. <br>

```js
import React, {Component} from "react";

export default class Header extends Component {
  /* constructor akan dijalankan terlebih dahulu */
  constructor(props) {
    super(props);
    this.state = {
      judul: 'Ini judul dari state',
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