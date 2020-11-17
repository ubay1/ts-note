---
title: React hooks
description: tujuan utama fitur ini adalah supaya komponen-komponen fungsional ( yg ga dibikin pake class ) punya akses ke API life-cycle.
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-07 20:00
---

tujuan utama fitur ini adalah supaya komponen-komponen fungsional ( yg ga dibikin pake class ) punya akses ke API life-cycle. <br><br>

Hooks react antara lain: **useState, useRef, useEffect, useReducer** <br><br>

# useState()
Dalam versi React sebelumnya, komponen fungsional sering disebut juga ***stateless component*** karena ga punya state. Tapi istilah stateless ga lagi akurat karena ada useState. Jadi sekarang semua komponen baik yang class-based ataupun yang functional bisa punya state.

```js
import React, {useState, useEffect, useReducer, useRef} from 'react'

export default function Hookss(props) {
    const [count, setCount] = useState(props.count)

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
```

Nilai balik dari fungsi useState() adalah sebuah array yang isinya dua elemen. Elemen pertama adalah nama state, yang kedua adalah fungsi untuk meng-update state itu. <br><br>

# useRef()
Ini kita pake untuk bikin pointer (referensi) ke elemen DOM. Kalo di komponen yang class-based kita bisa pake createRef(), di functional-component kita ga bisa pake itu. Kita harus pake useRef().

```js
import React, {useState, useEffect, useReducer, useRef} from 'react'

export default function Hookss() {
    const inputRef = useRef(null);

    return(
        <div>
            <label>Input:</label>
            <input type="text" ref={inputRef} placeholder="blablabla" />
            <button
                onClick={() => {
                const inputEl = inputRef.current
                inputEl.focus();
                }}
            >
                FOCUS
            </button>
        </div>
    );
}
```
<br>

# useEffect()
useEffect itu bisa jadi pengganti componentDidMount, componentWillUnmount, componentDidUpdate, & componentWillReceiveProps yang cuma ada di class-based component. Hook ini dijalanin pertama kali pas komponen ditampilin di app (mounted) & selama komponen belum dihapus bisa dijalanin lagi.

Hook ini punya dua parameter, yang pertama adalah **callback untuk dipanggil pas hook dijalanin** & yang kedua adalah **dependency-array** yang nentuin kapan hook ini dijalanin lagi. Kalo parameter kedua arraynya kosong, berarti hook cuma dijalanin satu kali, mirip **componentDidMount**.
Kalo array ini ada isinya, hook akan dijalanin lagi setiap kali salah satu isi array ini berubah, mirip **componentDidUpdate** atau **componentWillReceiveProps**.
Untuk pengganti **componentWillUnmount** yang kita pake untuk “bersih-bersih” sebelum komponen dihapus dari aplikasi, kita tinggal bikin callback yang nilai baliknya adalah sebuah fungsi.
<br><br>

**Hookss.js**
```js
import React, {useState, useEffect, useReducer, useRef} from 'react'
import Counter from '../components/Counter'

export default function Hookss() {
    const [showCounter, setShowCounter] = useState(false);

    return(
        <div>
            <button
                className="bg-purple-500 p-2 rounded-md shadow-md"
                onClick={() => {
                setShowCounter(!showCounter);
                }}
            >
                Tampilin/sembunyiin Counter
            </button>

            {showCounter && <Counter start={1} />}
        </div>
    );
}
```
<br>

**Count.js**
```js
import React, {useState, useEffect, useReducer, useRef} from 'react'

export default function Counter(props) {
    const [count, setCount] = useState(props.start);

    // kalo arraynya kosong atau statis, dia cuma jalanin sekali
    useEffect(() => { 
        console.log("Counter mounted"); 
    }, [] );
    
    // useEffect ini akan dipanggil lagi, selama useState count nilainya berubah
    useEffect(() => {
        console.log(`Count updated ${count}`);
    },
    [count]
    );

    useEffect( () => {
        let currentCount = props.start;
        const timer = setInterval(() => {
        setCount(currentCount++);
        }, 1000);

        // fn ini dijalanin kalo komponen
        // dihapus dari app
        return function() {
        console.log("Counter unmounted");
        clearInterval(timer);
        };
    },
    // useEffect ini hanya dijalanin lagi
    // kalo props.start berubah
    [props.start]
    );

    return(
        <div className="mt-3">
            <span className="bg-teal-300 p-2 rounded-md shadow-md">{count}</span> <br></br>
        </div>
    );
} 
```
<br>

# useReducer()
Pake useState emang simpel, tapi bisa jadi rumit kalo :
1. state-nya banyak
2. Kita ada kode yang perlu meng-update beberapa state sekaligus
3. Ada computed-state ( state yang nilainya tergantung state lain )

Untuk kasus begini, kita bisa pake hook yang namanya useReducer. Cara pakenya sama dengan reducer-nya Redux. Ada **action & state**.

Nilai balik useReducer() adalah sebuah array, sama kayak useState(), **tapi isinya objek state & fungsi dispatch**. Hook ini punya dua argumen, yang pertama **fungsi reducer-nya**, yang kedua state awalnya (initial state). Sama kaya Redux, fungsi reducer punya dua argumen, state & action dan nilai baliknya adalah state yang baru.
<br><br>

**Hooks.js**
```js
import React, {useState, useEffect, useReducer, useRef} from 'react'
import Counter2 from '../components/Counter2'

export default function Hookss() {
    const [showCounter, setShowCounter] = useState(false);

    return(
        <div>
            <Counter2 initial={2} />
        </div>
    );
}
```
<br>

**Counter2.js**
```js
import React, {useState, useEffect, useReducer, useRef} from 'react'

// ini adalah argumen pertama
const reducer = (state, action) => {
    switch (action.type) {
      case "start":
        return {
          ...state,
          count: state.initial,
          started: true
        };
      case "tick":
        return {
          ...state,
          timer: action.payload,
          count: state.count + 1
        };
      case "stop":
        clearInterval(state.timer);
        return {
          ...state,
          timer: null,
          started: false
        };
  
      default:
        return state;
    }
};

export default function Counter2(props) {  

const [state, dispatch] = useReducer(reducer, {
    timer: null,
    initial: props.initial,
    count: props.initial,
    started: false
});

useEffect(() => {
    if (state.started) {
    const timer = setInterval(() => {
        dispatch({
            type: "tick",
            payload: timer
        });
    }, 1000);
    }
}, [state.started]);

useEffect(() => {
    if (state.count > 5) {
    dispatch({
        type: "stop"
    });
    }
}, [state.count]);

return (
    <div>
    <div>{state.count}</div>
    <button
        className={state.started ? "bg-purple-100 text-white p-2 rounded-md shadow-md" : "bg-purple-500 text-white p-2 rounded-md shadow-md"}
        disabled={state.started}
        onClick={() => {
            dispatch({
                type: "start"
            });
        }}
    >
        Start
    </button>
    </div>
);

}
```