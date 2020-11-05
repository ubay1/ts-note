---
title: Handle event pada react.js
description: handle event pada tiap" komponent dengan function component atau class component react.js
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-05 13:30
---

handle event pada tiap" komponent dengan function component atau class component dan juga mengiirm parameter dari handle event<br><br>

# cara 1 dengan function component
```js
import React from 'react';

export default function Header() {
  function contohEvent() {
    alert('Halaman Top');
  }
  return (
    // ketika diklik, akan mentrigger function contohEvent()
    <a href='/' onClick={contohEvent}>Contoh Event</a>
  );
};
```
<br>

# cara 2 dengan class component.
<b>Binding method</b> <br>
Binding method bertujuan agar method bisa mengakses data state atau props. <br>

```js
import React from 'react';

export default class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      judul: this.props.judul
    }

    // agar method handlePesan bisa mengakses data state dan props.
    this.handleEvent = this.handleEvent.bind(this);;
  }
  
  function handleEvent() {
    alert(this.props.judul);
    alert(this.state.judul);
  }

  render() {
    return (
      // ketika diklik, akan mentrigger function contohEvent()
      <a href='/' onClick={this.handleEvent}>Contoh Event</a>
    );
  }
};
```
<br>

# mengirim parameter pada handle event
jika ingin melempar parameter pada method event, maka kita harus membuat **anonymous function**, <br> 
contoh: **{ () => {this.handleEventParam('hello parameter')} }**
<br>

```js
import React from 'react';

export default class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      judul: this.props.judul
    }
  }
  function handleEventParam(param) {
    alert(param);
  }
  return (
    // anonymous function
    <a href='/' 
    onClick={ () => {this.handleEventParam('hello parameter')} }>Contoh Event</a>
  );
};
```
<br>