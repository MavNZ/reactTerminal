import React, { Component } from 'react'
import Terminal from 'react-console-emulator'

const name = 'Riley'



export default class MyTerminal extends Component {
  constructor (props) {
    super(props)
    this.terminal = React.createRef()
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
    }
  }
  
  render () {
    return (
      <Terminal
        commands={this.commands}
        ref={this.terminal}
        welcomeMessage={`Welcome to boolean44's website!`}
        promptLabel={`user@term:~$`}
        
      />
    )
  }
}