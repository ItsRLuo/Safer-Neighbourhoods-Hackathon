
import * as React from "react";
import { HomePage, SignUpForm, SplashPage } from './components'
import './App.css'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageState: props.enthusiasmLevel || 14 };
  }

  // public onIncrement = () => this.updateEnthusiasm(this.state.pageState + 1);
  // public onDecrement = () => this.updateEnthusiasm(this.state.pageState - 1);
  setCur = (num=3) => {
    console.log(333)
    console.log(num)
    this.setState( {pageState:num} )
  }

  render() {
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
        {this.state.pageState===15 ?<HomePage /> : null}
      </div>
    );
  }

  updateEnthusiasm(pageState) {
    this.setState({ pageState });
  }
}

export default App;

// function getExclamationMarks(numChars: number) {
//   return Array(numChars + 1).join('!');
// }