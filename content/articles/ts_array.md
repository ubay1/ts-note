---
title: array
description: Array pada typescript 
tags: [typescript, javascript]
image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png
published: 2020-10-03 08:00
---

# Array Syntax Biasa
```ts
let a:number[] = [100,200];// array numerik
let b:any[] = [1,2,'a','b']; // array campuran
```
<br>

# Array Syntax Generric
```ts
let a:Array<number> = [100,200];  // syntax generic
let b:Array<any> = [1,2,'a','b']; // syntax generic
```
<br>

# Array Iterator
Untuk memproses Array, TypeScript nyediain fitur namanya Iterator. Jadi untuk memproses
setiap elemen atau index dari array kita bisa pake **(for .. of)**
```ts
let a:number[] = [1,2,3,4,5];
for(let n of a){
    // console.log(n);
}
```
<br>

# Tuple
Tuple adalah array yang jumlah awal elemennya fixed. Tipe data setiap elemennya boleh
berbeda. Nilai awal tuple harus sesuai dengan urutan yang ditentukan waktu kita deklarasi
variabelnya.
```ts
let tup:[string,number]; // bikin tuple 2 elemen, yg pertama string, kedua numerik
tup = ['xx',100]; // OK
tup = [1000,'xxx']; // error, yg pertama harus string
```
<br>

Elemen tuple bisa ditambah/dikurangi kayak array biasa. Data yang bisa dimasukin ke
sebuah Tuple hanya data yang sama dengan tipe yang kita tentukan di deklarasinya.

```ts
let tup:[string,number] = ['a',1];
tup.push(100);// OK
tup.push('xx');// OK
let tup2:[string,string] = ['a','b'];
tup2.push(100); //error
```
<br>