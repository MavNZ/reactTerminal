import React, { Component } from 'react'
import Terminal from 'react-console-emulator'
import sourceStyles from './terminalStyles'
import { commands, config } from './config'

class Term extends Terminal {
  constructor(props) {
    super(props)
  }

  showHelp = () => {
    const { commands } = this.state

    for (const c in commands) {
      const cmdObj = commands[c]

      if (!cmdObj.hidden) {
        const usage = cmdObj.usage ? ` - ${cmdObj.usage}` : ''
        this.pushToStdout(`${c} - ${cmdObj.description}${usage}`)
      }
    }
  }
}

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
        <Term
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