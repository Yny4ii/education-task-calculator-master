import React from 'react'
import {ButtonStyle} from "@/components/styles/stylesButton"

export default class ButtonClass extends React.Component {
  render() {
    return (
      <ButtonStyle onClick={this.props.onClickButton}>{this.props.title}</ButtonStyle>
    )
  }
}

