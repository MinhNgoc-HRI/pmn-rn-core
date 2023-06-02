# pmn-rn-core

RN Core

## Installation

```sh
npm install pmn-rn-core
```

## Usage

```js
import { createRequest, removeVietnamese, validator, regex , debounce, removeUndefined, useStateBase,useStateData,useStateList} from 'pmn-rn-core';

// ...
const BASE_URL = 'https://jsonplaceholder.typicode.com';
const request = createRequest(BASE_URL, 20000, 'vi_VN');
  request()
      .get('todo/1')
      .then((response) => console.log({ response }));
```
