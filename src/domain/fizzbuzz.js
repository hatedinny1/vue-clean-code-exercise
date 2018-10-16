export default function fizzbuzz(number){
  let result = [[15, 'FizzBuzz'], [5, 'Buzz'], [3, 'Fizz']].find(divisor => number % divisor[0] === 0)
    return result && result[1] || number.toString()
}