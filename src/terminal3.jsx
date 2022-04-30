import React, { Component } from 'react';
import { ReactTerminalStateless } from 'react-terminal-component';
import {
  EmulatorState, OutputFactory, CommandMapping,
  EnvironmentVariables, FileSystem, History,
  Outputs, defaultCommandMapping
} from 'javascript-terminal';

class ReactTerminal extends Component {
  constructor() {
    super();
    this.state = {
      emulatorState: EmulatorState.createEmpty(),
      inputStr: 'initial value',
    };
  }

  render() {
    return (
      <ReactTerminalStateless
        emulatorState={this.state.emulatorState}
        inputStr={this.state.inputStr}
        onInputChange={(inputStr) => this.setState({ inputStr })}
        onStateChange={(emulatorState) => this.setState({ emulatorState })}
      />
    );
  }
}

export default ReactTerminal;