import React from 'react'
import {ClearHistoryButton, Select} from "@/components/styles/styleSettings"
import {clearHistory} from "@/redux/slices/historySlice"
import {changeTheme} from "@/redux/slices/themeSlice"
import {connect} from "react-redux"


class SettingsClass extends React.Component {
  render() {
    const toggleTheme = event => {
      this.props.changeTheme(event.target.value)
    }
    return (
      <React.Fragment>
        <Select className="select" onChange={toggleTheme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </Select>
        <ClearHistoryButton onClick={this.props.clearHistory()}>Clear history</ClearHistoryButton>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {clearHistory, changeTheme}

export default connect(mapDispatchToProps)(SettingsClass)
