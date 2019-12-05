type MapFn = <T>(items: T[], callback: (n: T) => T) => T[]

const m: MapFn = (items, cback) =>
  items.map(e => cback(e))

console.log(m([1, 2, 3], (n) => n ** 2))
console.log(m(['1', '2', '3'], (n) => `-${n}-`))
