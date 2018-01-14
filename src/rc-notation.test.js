const toRCNotation = require('./rc-notation')

test('Returns empty string for NaN', () => {
  expect(toRCNotation()).toBe('')
  expect(toRCNotation('x')).toBe('')
})

test('Various values of R resistors', () => {
  expect(toRCNotation(1)).toBe('1R')
  expect(toRCNotation(1.0)).toBe('1R')
  expect(toRCNotation(1.1)).toBe('1R1')
  expect(toRCNotation(1.01)).toBe('1R01')
  expect(toRCNotation(100)).toBe('100R')
})

test('Various higher exponents of resistors', () => {
  expect(toRCNotation(1000)).toBe('1K')
  expect(toRCNotation(1e3)).toBe('1K')
  expect(toRCNotation(10.1e3)).toBe('10K1')
  expect(toRCNotation(1e6)).toBe('1M')
  expect(toRCNotation(1e9)).toBe('1G')
  expect(toRCNotation(1e12)).toBe('1T')
  expect(toRCNotation(1000e12)).toBe('1000T')
})

test('Resistor < 1 Ohm', () => {
  expect(toRCNotation(1e-3)).toBe('1L')
  expect(toRCNotation(0.0023)).toBe('2L3')
})

test('Capacitor without paremeter', () => {
  expect(toRCNotation(1e-6)).toBe('1u')
  expect(toRCNotation(0.0000023)).toBe('2u3')
  expect(toRCNotation(1e-9)).toBe('1n')
  expect(toRCNotation(1e-12)).toBe('1p')
  expect(toRCNotation(1e-13)).toBe('0p1')
})

test('Capacitor with parameter', () => {
  expect(toRCNotation(1e-6, true)).toBe('1u')
  expect(toRCNotation(1, true)).toBe('1F')
  expect(toRCNotation(0.1, true)).toBe('100m')
  expect(toRCNotation(0.0123, 'C')).toBe('12m3')
})
