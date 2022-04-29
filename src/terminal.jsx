import React, { Component } from 'react'
import Terminal from 'react-console-emulator'

const name = 'Riley'

const commands = {
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

    cred
    
  }
}

export default class MyTerminal extends Component {
  render () {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to the React terminal!'}
        promptLabel={'me@React:~$'}
      />
    )
  }
}