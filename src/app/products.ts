export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    photo :'https://avatars.mds.yandex.net/get-zen_doc/1246934/pub_5d0765147870cc07763e0627_5d0765177fbd010e5953f966/scale_1200'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    photo :'https://avatars.mds.yandex.net/get-zen_doc/1246934/pub_5d0765147870cc07763e0627_5d0765177fbd010e5953f966/scale_1200'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    photo :'https://avatars.mds.yandex.net/get-zen_doc/1246934/pub_5d0765147870cc07763e0627_5d0765177fbd010e5953f966/scale_1200'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/