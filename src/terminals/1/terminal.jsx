import React, { Component } from 'react'
import Terminal from 'react-console-emulator'
import sourceStyles from './terminalStyles'
import { commands, config } from './config'

export default class MyTerminal extends Component {
  constructor(props) {
    super(props)
    this.terminal = React.createRef()
    this.prideMode = false
    this.state = {
      containerStyle: sourceStyles.container,
      contentStyle: sourceStyles.content,
      inputArea: sourceStyles.inputArea,
      promptLabelStyle: sourceStyles.promptLabel,
      input: sourceStyles.input,
      inputText: sourceStyles.inputText,
      promptLabel: config.promptLabel
    }
  }

  render() {
    return (
      <div style={sourceStyles.wrapper}>
        <Terminal
          autoscroll
          commands={commands.call(this)}
          ref={this.terminal}
          style={this.state.containerStyle}
          contentStyle={this.state.contentStyle}
          inputAreaStyle={this.state.inputArea}
          promptLabelStyle={this.state.promptLabelStyle}
          inputStyle={this.state.input}
          inputTextStyle={this.state.inputText}
          welcomeMessage={config.welcomeMessage}
          promptLabel={this.state.promptLabel}
        />
      </div>
    )
  }
}