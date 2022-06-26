import React from 'react'
import {connect} from "react-redux"
import {
  addToDisplay,
  calculateExpression,
  removeAllFromDisplay,
  removeOneSignFromDisplay,
} from "@/redux/slices/displaySlice"
import {KeypadStyle} from "@/components/styles/stylesKeypad"
import {NUMBERS} from "@/constants/variables"
import {Button} from "@/components/function/Button"
import {addExpressionToHistory} from "@/redux/slices/historySlice"

class KeypadClass extends React.Component {
  render() {

    const handleClickKey = event => {
      const {history} = this.props
      const key = event.target.textContent
      switch (key) {
        case "CE":
          this.props.removeOneSignFromDisplay()
          break
        case "=":
          this.props.calculateExpression()
          this.props.addExpressionToHistory({history})
          break
        case "C":
          this.props.removeAllFromDisplay()
          break
        default:
          this.props.addToDisplay(key)
          break
      }
    }
    return (
      <KeypadStyle>
        {NUMBERS.map(e => (<Button key={e} title={e}
                                   onClickButton={handleClickKey}/>))}
      </KeypadStyle>
    )
  }
}

const mapStateToProps = state => ({
  history: state.display.display,
})

const mapDispatchToProps = {
  addToDisplay,
  calculateExpression,
  removeAllFromDisplay,
  removeOneSignFromDisplay,
  addExpressionToHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(KeypadClass)


