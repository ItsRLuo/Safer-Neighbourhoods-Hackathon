
import * as React from "react";
import './app.css';
import { SignUpForm, SplashPage } from './components'
export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

interface IState {
  pageState: number;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { pageState: props.enthusiasmLevel || 14 };
  }

  // public onIncrement = () => this.updateEnthusiasm(this.state.pageState + 1);
  // public onDecrement = () => this.updateEnthusiasm(this.state.pageState - 1);
  public setCur = (num:number=3) => {
    console.log(333)
    console.log(num)
    this.setState( {pageState:num} )
  }

  public render() {
    const { name } = this.props;

    if (this.state.pageState <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
    console.log(this.state.pageState)
    return (
      
      <div className="App">
        {this.state.pageState <= 13 ? name : null}
        {this.state.pageState===13 ? <SignUpForm  fields={['car type', 'car model']} style={this.setCur} />:null}
        {this.state.pageState===14 ?<SplashPage test={this.setCur}/> : null}
        {this.state.pageState===15 ?<SplashPage test={this.setCur}/> : null}
      </div>
    );
  }

  public updateEnthusiasm(pageState: number) {
    this.setState({ pageState });
  }
}

export default App;

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }