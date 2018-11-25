import * as React from "react"
import './SplashPage.css'

class SplashPage extends React.Component{

   constructor(props){
        super(props)
    }
    
    signUp = () => {
        this.props.test(13)
    }
    
    render() {
        
        return (                        
            <div id="background" onClick={this.signUp}>            
                <img src={require('../images/splashPage.png')} className="stretch" alt="" />                
            </div>
          );
    }
}

export default SplashPage
