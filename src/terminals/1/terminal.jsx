import React, { Component } from 'react'
import Terminal from 'react-console-emulator'
import sourceStyles from './terminalStyles'

const name = 'Riley'

export default class MyTerminal extends Component {
  constructor (props) {
    super(props)
    this.terminal = React.createRef()
    this.prideMode = false
    this.state = {
      containerStyle: sourceStyles.container,
      contentStyle:sourceStyles.content,
      inputArea: sourceStyles.inputArea,
      promptLabel: sourceStyles.promptLabel,
      input: sourceStyles.input,
      inputText: sourceStyles.inputText
    }
  }
  
  commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: function () {
        return `${Array.from(arguments).join(' ')}`
      }
    },
    
    pronouns: {
      description: 'Displays preferred pronouns',
      usage: 'pronouns',
      fn: function() {
        return `${name} uses she/her pronouns`
      }
    },
    
    credits: {
      description: "Displays app credits",
      usage: 'credits',
      fn: function() {
        return '??'
      },
    },
  
    name: {
      description: 'sets name',
      usage: 'name <name>',
      fn: (...args) => {
        const name = args[0]
        this.terminal.current.props.promptLabel = `${name}@term:~$`
    
        return `Username changed to ${name}`
      }
    },

    pride: {
      description: 'toggles pride mode',
      usage: 'pride',
      fn: () => {
        this.prideMode = !this.prideMode
        this.setState({
          contentStyle: this.prideMode ? 
          {...sourceStyles.content, ...sourceStyles.rainbow_text} : sourceStyles.content
        })

        return `Pridemode ${this.prideMode ? 'enabled' : 'disabled'}`
      }
    }
  }
  
  render () {
    return (
      <div style={sourceStyles.wrapper}>
        <Terminal
          autoscroll
          commands={this.commands}
          ref={this.terminal}
          style={this.state.containerStyle}
          contentStyle={this.state.contentStyle}
          inputAreaStyle={this.state.inputArea}
          promptLabelStyle={this.state.promptLabel}
          inputStyle={this.state.input}
          inputTextStyle={this.state.inputText}
          welcomeMessage={`Welcome to boolean44's website!`}
          promptLabel={`user@term:~$`}
          
        />
      </div>
    )
  }
}