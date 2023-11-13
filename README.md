# hardware-info
A lightweight way to get the hardware information.

## Install
`npm install hardware-info`

## Usage

```javascript
import {getCpu, getRam, getOsArch} from 'hardware-info';

console.log(getCpu());
// => { threads: 16, model: 'Intel(R) Core(TM) i7-10700F CPU @ 2.90GHz', speed: 2904 }'

console.log(getRam());
//=> '{ total: '15.93 GB', free: '7.15 GB' }'

console.log(getNetInterfaces());
//=> '[{"name":"Ethernet 7","addresses":[{"path":"fe80::81aa:d714:a0f:90cf","internal":false},{"path":"192.168.56.1","internal":false}]'

console.log(getOsArch());
//=> '{"arch":"x64"}'
```
## Unpacked Size
Less than 5 kB
