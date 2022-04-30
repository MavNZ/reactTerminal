import React, { useState, Component } from 'react'
import ReactConsole from '@webscopeio/react-console'
import { fetchFact } from '../../utils'
import './terminal4.css'

export default class Terminal4 extends Component {
  constructor (props) {
    super(props)
    this.terminal = React.createRef()
    this.state = {
      history: [
        "echo hello world",
        "sleep 1000",
        "sleep 2000",
        "sleep 3000",
        "echo ola",
        "not found",
      ]
    }
  }

  componentDidMount() {
    console.log('mounted', this)
  }

  render() {
    return (
      <div>
        <ReactConsole
          ref={this.terminal}
          autoFocus
          welcomeMessage="Welcome"
          commands={{
            help: {
              description: 'Help',
              fn: () => {
                console.log('here', this.terminal.current.props.commands)
                const commands = Object.keys(this.terminal.current.props.commands).join('\n')
                return new Promise(resolve => resolve(`${commands}`))
              }
            },
            fact: {
              description: 'Get random fact',
              fn: async () => new Promise(async (resolve, reject) => {
                try {
                  const fact = await fetchFact()
                  resolve(`${fact}`)
                } catch (e) {
                  reject(e)
                }
              })
            },
            history: {
              description: 'History',
              fn: () => new Promise(resolve => {
                 resolve(`${this.state.history.join('\r\n')}`)
              })
            },
            echo: {
              description: 'Echo',
              fn: (...args) => {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve(`${args.join(' ')}`)
                  }, 2000)
                })
              }
            },
            test: {
              description: 'Test',
              fn: (...args) => {
                return new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve('Hello world \n\n hello \n')
                  }, 2000)
                })
              }
            }
          }}
        />
      </div>
    )
  }

}
