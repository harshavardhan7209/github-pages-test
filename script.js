/*class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay*/
class Calculator{constructor(e,t){this.previousOperandTextElement=e,this.currentOperandTextElement=t,this.clear()}clear(){this.currentOperand="",this.previousOperand="",this.operation=void 0}delete(){this.currentOperand=this.currentOperand.toString().slice(0,-1)}appendNumber(e){"."===e&&this.currentOperand.includes(".")||(this.currentOperand=this.currentOperand.toString()+e.toString())}chooseOperation(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}compute(){let e;const t=parseFloat(this.previousOperand),r=parseFloat(this.currentOperand);if(!isNaN(t)&&!isNaN(r)){switch(this.operation){case"+":e=t+r;break;case"-":e=t-r;break;case"*":e=t*r;break;case"÷":e=t/r;break;default:return}this.currentOperand=e,this.operation=void 0,this.previousOperand=""}}getDisplayNumber(e){const t=e.toString(),r=parseFloat(t.split(".")[0]),a=t.split(".")[1];let n;return n=isNaN(r)?"":r.toLocaleString("en",{maximumFractionDigits:0}),null!=a?`${n}.${a}`:n}updateDisplay(){this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand),null!=this.operation?this.previousOperandTextElement.innerText=`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`:this.previousOperandTextElement.innerText=""}}const numberButtons=document.querySelectorAll("[data-number]"),operationButtons=document.querySelectorAll("[data-operation]"),equalsButton=document.querySelector("[data-equals]"),deleteButton=document.querySelector("[data-delete]"),allClearButton=document.querySelector("[data-all-clear]"),previousOperandTextElement=document.querySelector("[data-previous-operand]"),currentOperandTextElement=document.querySelector("[data-current-operand]"),calculator=new Calculator(previousOperandTextElement,currentOperandTextElement);numberButtons.forEach(e=>{e.addEventListener("click",()=>{calculator.appendNumber(e.innerText),calculator.updateDisplay()})}),operationButtons.forEach(e=>{e.addEventListener("click",()=>{calculator.chooseOperation(e.innerText),calculator.updateDisplay()})}),equalsButton.addEventListener("click",e=>{calculator.compute(),calculator.updateDisplay()}),allClearButton.addEventListener("click",e=>{calculator.clear(),calculator.updateDisplay()}),deleteButton.addEventListener("click",e=>{calculator.delete(),calculator.updateDisplay()});const stringNumber=number.toString(),integerDigits=parseFloat(stringNumber.split(".")[0]),decimalDigits=stringNumber.split(".")[1];let integerDisplay;
