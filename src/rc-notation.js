//format according https://en.wikipedia.org/wiki/Letter_and_digit_code

var capacitorExponents = {
  '-12': 'p',
  '-9': 'n',
  '-6': 'u',
  '-3': 'm',
  '0': 'F'
}

var resistorExponents = {
  '-3': 'L',
  '0': 'R',
  '3': 'K',
  '6': 'M',
  '9': 'G',
  '12': 'T'
}

function toRCNotation(num, isCapacitor) {
  var exponent, letter, mantisa
  num = Number(num)
  if (isNaN(num)) {
    return ''
  }

  exponent = Math.floor(Math.log10(num) / 3) * 3
  if (exponent < -12) exponent = -12
  if (exponent > 12) exponent = 12
  mantisa = parseFloat((num * Math.pow(10, -exponent)).toFixed(3)) //parsefloat removes trailing zeroes

  if (exponent < -3) isCapacitor = true
  letter = isCapacitor
    ? capacitorExponents[exponent]
    : resistorExponents[exponent]

  if (mantisa % 1) {
    return mantisa.toString().replace('.', letter)
  } else {
    return mantisa + letter
  }
}

module.exports = toRCNotation