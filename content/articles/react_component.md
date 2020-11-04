---
title: Mengenal component pada react.js
description: Mengenal component component yang ada pada react js, ada beberapa macam component pada react ..
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-04 08:00
---

Ada beberapa macam component pada react, mari kita ketahui. <br><br>

1. pertama ada Class Component <br>
```js
import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        ini header dengan class component react
      </div>
    );
  }
}
```
bisa juga dengan seperti ini.
```js
import React from "react"
export default class Header extends React.Component {
  render() {
    return (
      <div>
        ini header dengan class component react
      </div>
    );
  }
}
``` 
<br><br>

2. selanjutnya ada yang namanya function component
cara 1 :

```js
import React from 'react'

export default function Header() {
  return (
    <div>
      ini header dengan function component react
    </div>
  );
}
```

cara 2 :
```js
import React from 'react'

const Header = () => {
  return (
    <div>
      ini header dengan function component react
    </div>
  );
}

export default Header;
```

jika menggunakan function component, cukup gunakan return() .