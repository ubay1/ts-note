---
title: setState pada react.js
description: setState berfungsi untuk mengatur atau merubah sebuah nilai state.
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-05 13:00
---

setState berfungsi untuk mengatur atau merubah sebuah nilai state.
<br>
setState juga bisa menggunakan nilai props.
<br><br>

```js
import React from 'react';

export default class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      txtState: 'ini judul sebelum diubah setState 1',
      judul: 'ini judul sebelum diubah setState 2'
    }

    // agar method handlePesan bisa mengakses data state dan props.
    this.rubahData = this.rubahData.bind(this);;
  }
  // rubah data dengan setState
  rubahData() {
    this.setState((state, props) => {
      return {
        txtState: 'ini judul setelah diubah setState 1',
        judul: `ini judul setelah diubah setState 2`
      }
    })
  }

  render() {
    return (
      // ketika diklik, akan mentrigger function rubahData()
      // dan merubah nilai statenya
      <a href='/' onClick={this.rubahData}>Ubah nilai state</a>
    );
  }
};
```