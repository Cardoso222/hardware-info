# hardware-info
A lightweight way to get the hardware information.

## Install
`npm install hardware-info`

## Usage

```javascript
import {getCpus} from 'hardware-info';

console.log(getCpus());
// => { total: 16, model: 'Intel(R) Core(TM) i7-10700F CPU @ 2.90GHz', speed: 2904 }'

console.log(getRam());
//=> '{ total: '15.93 GB', free: '7.15 GB' }'
```
## Unpacked Size
Less than 5 kB
