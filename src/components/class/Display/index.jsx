import React from 'react'
import {connect} from "react-redux"
import {DisplayStyle} from "@/components/styles/stylesDisplay"

class DisplayClass extends React.Component {
  render() {

    return (
      <DisplayStyle>
        {this.props.display}
      </DisplayStyle>
    )
  }
}

const mapStateToProps = state => ({
  display : state.display.display,
})
export default connect(mapStateToProps)(DisplayClass)
