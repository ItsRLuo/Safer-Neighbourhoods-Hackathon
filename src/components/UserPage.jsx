import * as React from "react"
import './UserPage.css'


class UserPage extends React.Component{

   constructor(props){
        super(props)
    }
    
    home = () => {
        this.props.test(15)
    }
    
    render() {
        
        return (                        
            <div id="background" onClick={this.home}>            
                <img src={require('../images/userPage.png')} className="stretch" alt="" />                
            </div>
          );
    }
}

export default UserPage
