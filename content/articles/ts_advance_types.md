---
title: advance types
description: penggunaan type alias pada typescript
tags: [typescript]
image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png
published: 2020-10-16 09:30
---

# types alias dengan interfaces dan operator penghubung *'&'*
types bisa digunakan untuk menghubungkan antar interfaces dengan operator **&** sebagai penghubungnya.
<br><br>

contoh :
buat file **pemainBola.ts** di dalam folder **interface**
```ts
export interface IProfil {
    nama: string;
    lahir: string;
    tinggi: string;
    gaji: number;
}

export interface ITeam {
    team_sekarang: string;
    team_sebelumnya: string[];
}
```
<br>

lalu buat file **pemainBolaType.ts** di dalam folder **types**
```ts
/**
 * import interface dari pemainBola.ts
 */
import {IProfil, ITeam} from '../interfaces/pemainBola';

type pemainBola = IProfil & ITeam;


function show(e: pemainBola) :void {
    console.log(e)
}

show({
    nama: 'cristiano ronaldo',
    lahir: '5 Februari 1985 (usia 35 tahun)',
    gaji: 31000000,
    tinggi: '1,87m',
    team_sebelumnya: ['Sporting lisbon','Manchester united', 'Real madrid'],
    team_sekarang: 'juventus'
});
```
<br>

# types alias dengan interfaces dan union type *'|'*.
jika dengan menggunakan union type, kita bisa tidak memasukan interface penghubung. <br>
contoh : <br>
```ts
import {IProfil, ITeam} from '../interfaces/pemainBola';

type pemainBola = IProfil | ITeam;
```
maka jika kita tidak memasukan **interface ITeam**, itu tidak masalah.