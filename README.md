# partition

[![Coverage Status](https://img.shields.io/coveralls/github/cheesebit/partition?style=flat-square)](https://coveralls.io/github/cheesebit/partition)
[![npm package](https://img.shields.io/npm/v/@cheesebit/partition?style=flat-square)](https://www.npmjs.com/package/@cheesebit/partition)

Creates an object splitting given collection into groups, based on the return of the given predicate when invoked with each collection's item.

## Instalation

You can add this library as a dependency by running `npm install @cheesebit/partition` or `yarn add @cheesebit/partition`.

## Usage guide

```js
  import partition from '@cheesebit/partition';

  const { supplies, tools, toys } = partition([{
    name: 'pen',
    type: 'supply'
  }, {
    name: 'lamp',
    usage: 'maintenance'
  }, {
    name: 'Buzz lightyear',
    type: 'toy'
  }, {
    name: 'pliers',
    type: 'tool'
  }], item => {
    if (item.usage === 'maintenance' || item.type === 'tool') {
      return 'tools'
    }

    if (item.type === 'toy') {
      return 'toys'
    }

    return 'supplies'
  })

  console.log(supplies); // [{ name: 'pen', type: 'supply' }]
  console.log(tools); // [{ name: 'lamp', usage: 'maintenance' }, { name: 'pliers', type: 'tool' }]
  console.log(toys); // [{ name: 'Buzz lightyear', type: 'toy' }]
```
