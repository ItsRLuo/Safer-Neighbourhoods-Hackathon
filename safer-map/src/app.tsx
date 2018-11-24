
import * as React from "react";
import './app.css';
import { IncentivePage, SignUpForm } from './components'
export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

interface IState {
  currentEnthusiasm: number;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  // public onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  // public onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  public setCur = () => {
    console.log(333)
    this.setState( {currentEnthusiasm:13} )
  }

  public render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    console.log(this.state.currentEnthusiasm)
    return (
      
      <div className="App">
        Register {this.state.currentEnthusiasm > 10 ? name + getExclamationMarks(this.state.currentEnthusiasm):null}
        {this.state.currentEnthusiasm===13 ? <SignUpForm  fields={['car type', 'car model']} style={this.setCur} />:null}
        {this.state.currentEnthusiasm!==13 ?<IncentivePage test={this.setCur}/> : null}
      </div>
    );
  }

  public updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}

export default App;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}