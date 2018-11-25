import * as React from "react"
import './SplashPage.css'

class SplashPage extends React.Component{

   constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    signUp = () => {
        this.props.test(13);
    }

    signIn = () => {
        this.props.test(15);
    }
    
    handleSubmit(event) {
        fetch(`http://localhost:5000/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
          }).then(response => response.text()).then((data) => {
            var signUpRequired = JSON.parse(data).signup;
            if(signUpRequired) {
                this.signUp();
            } else {
                this.signIn();
            }
          });
      }

    render() {
        
        return (                        
            <div id="background" onClick={this.handleSubmit}>            
                <img src={require('../images/splashPage.png')} className="stretch" alt="" />                
            </div>
          );
    }
}

export default SplashPage
