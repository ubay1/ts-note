---
title: Looping state array object
description: Looping state array object dengan maping
tags: [react]
image: https://alfieqashwa.github.io/img/react.png
published: 2020-11-07 09:00
---

Looping state array object dengan maping. <br><br>

contoh : <br>

ListkeyState.js
```js
import React from 'react'

export default class ListKeyData extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            namaMakanan: [
            {
                nama: 'Mie Ayam',
                harga: 10000
            },
            {
                nama: 'Bakso',
                harga: 12000
            },
            {
                nama: 'Soto Ayam',
                harga: 15000
            },
            ],
        }
    }

    render() {
        return(
            <div className="px-4 py-4 bg-yellow-500 text-black mx-4 rounded-md shadow-md">
                <div className="text-left font-bold">List key pada state</div> <br />

                {/* mapping state namaMakanan, key harus disertakan */}
                {this.state.namaMakanan.map((value, index) => {
                    return(
                        <div key = {index+1} className="bg-orange-600 mb-2 rounded-md shadow-md">
                           Nama makanan: {value.nama}, <br />
                           Harga       : {value.harga}
                        </div>
                    )
                })}

            </div>
        );
    }
}
```