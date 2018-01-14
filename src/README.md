# rc-notation
converts values of electronic parts (resistors and capacitors) to IEC 60062 notation (e.g. 10K, 3p3)

## usage

function toRCNotation takes two arguments, first is numeric value in Ohms or Farads, second is boolean specifying if the value is for capacitor in ambiguous cases 

```javascript
const toRCNotation = require('rc-notation')

toRCNotation(10000) //returns 10K
toRCNotation(2.3e-6) //returns 2u3
toRCNotation(1) // returns 1R
toRCNotation(1, true) // returns 1F
```
for more usage examples see tests