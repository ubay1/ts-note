---
title: Handle event onChange pada form input react.js
description: Event onChange adalah event yang akan berjalan jika terjadi perubahan pada suatu element.
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-07 07:00
---

Event onChange adalah event yang akan berjalan jika terjadi perubahan pada suatu element. <br><br>

# Reactive form input
buat sebuah method dengan  nama handleChange atau bebas.

```js
import React, {Component} from 'react';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hallo',
    }

    // agar method handleChange bisa mengakses data state dan props.
    this.handleChange = this.handleChange.bind(this)
  }
  
  // event handleOnChange, menerima inputan dari form, 
  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
    this.state.inputValue = e.target.value
  }

  render() {
   return (
      <input 
        type="text"  onKeyUp={this.handleChange}
        placeholder="coba event onchange"
      >
      </input>
      <p className="mb-4">{this.state.inputValue}</p>
   ) 
  }
}
```

pada contoh sebelumnya handleEvent onClick setState dapat menggunakan parameter state, props. jika onChange tidak bisa.
```js
this.setState((state, props) => {
  return {
    txtState: 'ini judul setelah diubah setState 1',
    judul: `ini judul setelah diubah setState 2`
  }
})
```

<br><br>

# Set default input value dengan dynamic method

```js
import React, {Component} from 'react';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hallo',
    }

    // agar method handleChange bisa mengakses data state dan props.
    this.handleChange = this.handleChange.bind(this)
  }
  
  // event handleOnChange dengan default value, 
  // menerima inputan dari form, 
  handleChange(stateName, e) {
    this.setState({
      [stateName]: e.target.value,
    });
    this.state.inputValue = e.target.value
  }

  render() {
   return (
      <input 
        type="text" 
        value={ this.state.inputValue }
        onKeyUp={(e) => {this.handleChange('inputValue', e)} }
        placeholder="coba event onchange"
      >
      </input>
      <p className="mb-4">{this.state.inputValue}</p>
   ) 
  }
}
```
pada default value, kita gunakan **function** dengan isinya mentrigger method **handleChange** dengan 2 argumen. argumen pertama **nama state**, argumen kedua **nilai yang diinput**. <br><br>

lihat method handleChange: 
```js
handleChange(stateName, e) {
  this.setState({
    [stateName]: e.target.value,
  });
  this.state.inputValue = e.target.value
}
```
pada [stateName] disini bersifat dynamic, kita mengaturnya dari form input.
jika stateName tidak kita beri [], maka pada parameter 
**handleChange(statename, e)**, stateName akan memberikan pesan **'stateName' is declared but its value is never read**