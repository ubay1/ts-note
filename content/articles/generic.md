---
title: generic type
# description: Belajar shalat sesuai sunnah
tags: typescript
---

Generics bisa dibilang mirip any, bedanya kalo kita pake any **TSC** nggak bisa memvalidasi
(type-checking) kode secara akurat karena nggak ada info tentang tipe data yang dipake.
Kalo kita pake editor yang mendukung Intellisense ini juga nggak jalan karena kurang info.
<br><br>

# Tanpa generic
```ts
function testNotGeneric(value: any) {
    return value;
}
console.log(testNotGeneric('ubay').length); //4
console.log(testNotGeneric(1234).length); // undefined
```

# Dengan generic
```ts
function testGeneric<T>(value : T) {
    return value;
}
console.log(testGeneric('ubay').length); // 4
console.log(testGeneric(1234).length); // error, Property 'length' does not exist on type '1234'
```