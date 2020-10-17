---
title: function
description: Function pada typescript 
tags: [typescript]
image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png
published: 2020-10-02 08:00
---

Generics bisa dibilang mirip any, bedanya kalo kita pake any **TSC** nggak bisa memvalidasi
(type-checking) kode secara akurat karena nggak ada info tentang tipe data yang dipake.
Kalo kita pake editor yang mendukung Intellisense ini juga nggak jalan karena kurang info.
<br><br>

# Named Function
```ts
function add(a: number, b: number) {
    return a*b;
}
console.log(add(12, 12)); // 24
```
<br>

# Anonymous Function
```ts
let myAdd = function (x: number, y: number): number {
  return x + y;
};
console.log(myAdd(12, 12)); // 24
```
<br>

# Function tanpa nilai balik
dengan **: void** kita bisa memberikan **console.log**
```ts
let myAdd = function (x: number, y: number): void {
  console.log(x*y);
};
myAdd(12, 12); // 24
```
<br>

# Function dengan Rest Parameter
```ts
function buildName(...restOfName: any[]) {
  return restOfName;
}

const arr = [
  {nama: 'ubay', alamat: 'tangsel'},
  {nama: 'mutiara', alamat: 'bekasi'},
];

let buildNameFun = (buildName(arr));

buildNameFun.map((data, index) => {
  data.forEach((data2: any) => {
    console.log(data2.nama); // ubay, mutiara
  })
})
```
<br>