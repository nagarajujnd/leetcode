import { calculate } from '../24-point'
import { fractionalSimplify } from '../fractionalSimplify'

export function fractionCalculate(
  arr1: number[],
  arr2: number[],
  operator: string,
) {
  const [firstInteger, firstNumerator = 0, firstDenominator = 1] = arr1
  const [secondInteger, secondNumerator = 0, secondDenominator = 1] = arr2
  const FIRST_SIGN = Math.sign(firstInteger || firstNumerator) || 1
  const SECOND_SIGN = Math.sign(secondInteger || secondNumerator) || 1

  const foo =
    (Math.abs(firstNumerator) + Math.abs(firstInteger) * firstDenominator) *
    FIRST_SIGN
  const bar =
    (Math.abs(secondNumerator) + Math.abs(secondInteger) * secondDenominator) *
    SECOND_SIGN

  switch (operator) {
    case '*':
      return fractionalSimplify(foo * bar, firstDenominator * secondDenominator)
    case '/':
      return fractionalSimplify(foo * secondDenominator, bar * firstDenominator)
    default:
      return fractionalSimplify(
        calculate(foo * secondDenominator, bar * firstDenominator, operator),
        firstDenominator * secondDenominator,
      )
  }
}