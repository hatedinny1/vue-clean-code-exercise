import fizzbuzz from '@/domain/fizzbuzz'
describe('fizzbuzz', () => {
  it('says number', () => {
    expect(fizzbuzz(7)).toEqual('7')
  })
  it('says fizz', () => {
    expect(fizzbuzz(6)).toEqual('Fizz')
  })
  it('says buzz', () => {
    expect(fizzbuzz(10)).toEqual('Buzz')
  })
  it('says buzz', () => {
    expect(fizzbuzz(30)).toEqual('FizzBuzz')
  })
})