import React from 'react';
import Console from '@haensl/react-component-console';
import { fetchFact } from '../../utils'
import './terminal2.css'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lines: ['Fetching fact...']
    }
  }

  componentDidMount() {
    this.fetchFact()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('updated', prevProps, prevState, snapshot)
    console.log(this.state)
  }  

  async fetchFact() {
    const line = await fetchFact()    
    this.setState({lines: [line]})
  }
  
  render() {
    return (
      <div style={{maxWidth:"100vw"}}>
        <Console lines={this.state.lines}
          onFinishWritingLine={
            (line) => {
              console.info('Console has finished writing line', line)
              this.fetchFact()
            }
          }
        />
      </div>
    );
  }
}

export default MyComponent;