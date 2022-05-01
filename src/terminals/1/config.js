import sourceStyles from './terminalStyles'

export const config = {
  promptLabel: `user@term:~$`,
  welcomeMessage: `Welcome to boolean44's website!`
}

export function commands() {
  return ({
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
      fn: function () {
        return `Riley uses she/her pronouns`
      }
    },

    credits: {
      description: "Displays app credits",
      usage: 'credits',
      fn: function () {
        return '??'
      },
    },

    name: {
      description: 'sets name',
      usage: 'name <name>',
      fn: (...args) => {
        const name = args[0]
        this.setState({ promptLabel: `${name}@term:~$` })

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
            { ...sourceStyles.content, ...sourceStyles.rainbow_text } : sourceStyles.content
        })

        return `Pridemode ${this.prideMode ? 'enabled' : 'disabled'}`
      }
    }
  })

}