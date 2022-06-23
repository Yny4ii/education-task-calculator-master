class Command {
  constructor() {
    this.value = 0
    this.history = []
  }

  execute(command) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }

  undo() {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }
}


export class AddCommand {
  constructor(addNumber) {
    this.addNumber = addNumber
  }

  execute(value) {
    return value + this.addNumber
  }

  undo(value) {
    return value - this.addNumber
  }
}

export class SubtractCommand {
  constructor(subtractNumber) {
    this.subtractNumber = subtractNumber
  }

  execute(value) {
    return value - this.subtractNumber
  }

  undo(value) {
    return value + this.subtractNumber
  }
}

export class DivideCommand {
  constructor(divideNumber) {
    this.divideNumber = divideNumber
  }

  execute(value) {
    return value / this.divideNumber
  }

  undo(value) {
    return value * this.divideNumber
  }
}

export class MultiplyCommand {
  constructor(multiplyNumber) {
    this.multiplyNumber = multiplyNumber
  }

  execute(value) {
    return value * this.multiplyNumber
  }

  undo(value) {
    return value / this.multiplyNumber
  }
}

export class RemainderDivideCommand {
  constructor(divideNumber) {
    this.divideNumber = divideNumber

  }

  execute(currentValue) {
    return currentValue % this.divideNumber
  }

}

const calc = new Command()
export default calc


