---
title: generic type
# description: Belajar shalat sesuai sunnah
tags: typescript
---

Generics bisa dibilang mirip **any**, bedanya kalo kita pake any **TSC** nggak bisa memvalidasi
(type-checking) kode secara akurat karena nggak ada info tentang tipe data yang dipake.
Kalo kita pake editor yang mendukung Intellisense ini juga nggak jalan karena kurang info.
<br><br>

# Tanpa generic
```ts
function add(value: any) {
    return value;
}

const a = add(5);
const b = add('a');
console.log(a.length); // undefined
console.log(b.length); // 1
```
<br>

# Dengan generic
```ts
function testGeneric<T>(value : T) {
    return value;
}
const a = add(5);
const b = add('a');
console.log(a.length); // Property 'length' does not exist on type '5'
console.log(b.length); // 1
```