import React from 'react'
import {connect} from "react-redux"
import {HistoryExpression, HistoryStyle} from "@/components/styles/stylesHistory"

class HistoryClass extends React.Component {
  render() {
    return (
      <HistoryStyle>
        {this.props.history.map((e, i) => (
          <HistoryExpression key={i}>{e}</HistoryExpression>
        ))}
      </HistoryStyle>
    )
  }
}

const mapStateToProps = state => ({
  history: state.history.history,
})

export default connect(mapStateToProps)(HistoryClass)
