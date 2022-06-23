import calc, {
  AddCommand,
  DivideCommand,
  MultiplyCommand,
  RemainderDivideCommand,
  SubtractCommand,
} from './Command/Command'

const numbers = []
const operators = []


export function calculator(expression) {
  const expressionInArray = replaceOperators(expression).split(/\s+/g)

  for (let i = 0; i < expressionInArray.length; i++) {
    if (!isNaN(parseFloat(expressionInArray[i]))) {
      numbers.push(expressionInArray[i])
    } else {
      checkOperatorPriority(expressionInArray[i])
    }
    if (i === expressionInArray.length - 1) {
      while (operators.length !== 0) {
        calculation()
      }
    }
  }
  return String(numbers.pop().toFixed(3))
}


function checkOperatorPriority(operator) {
  if (operators.length === 0) operators.push(operator)
  else {
    while (true) {
      if (operators.length === 0) operators.push(operator)
      else if (getOperatorPriority(operator) > getOperatorPriority(getLastElementFromArray(operators))) {
        operators.push(operator)
        break
      } else if (getOperatorPriority(operator) === getOperatorPriority(getLastElementFromArray(operators)) ||
        getOperatorPriority(operator) === getOperatorPriority(getLastElementFromArray(operators))
      ) {
        calculation()
      } else {
        break
      }
    }
  }
}

function calculation() {
  const operator = operators.pop()
  const number = parseFloat(numbers.pop())
  calc.value = parseFloat(numbers.pop())

  switch (operator) {
    case '+':
      calc.execute(new AddCommand(number))
      numbers.push(calc.value)
      break
    case '-':
      calc.execute(new SubtractCommand(number))
      numbers.push(calc.value)
      break
    case '*':
      calc.execute(new MultiplyCommand(number))
      numbers.push(calc.value)
      break
    case '/':
      calc.execute(new DivideCommand(number))
      numbers.push(calc.value)
      break
    case '%' :
      calc.execute(new RemainderDivideCommand(number))
      numbers.push(calc.value)
      break
  }

}


function getOperatorPriority(operator) {
  switch (operator) {
    case '+':
      return 1
    case '-':
      return 1
    case '/':
      return 2
    case '*':
      return 2
    case '%':
      return 2
  }
}

function replaceOperators(expression) {
  expression = expression.replaceAll('+', ' + ')
  expression = expression.replaceAll('-', ' - ')
  expression = expression.replaceAll('/', ' / ')
  expression = expression.replaceAll('*', ' * ')
  expression = expression.replaceAll('%', ' % ')
  return expression
}

function getLastElementFromArray(array) {
  if (array.length === 0) return 0
  return array[array.length - 1]
}
