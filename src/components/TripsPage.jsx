import * as React from "react"
import './TripsPage.css'


class TripsPage extends React.Component{

   constructor(props){
        super(props)
    }
    
    points = () => {
        this.props.test(17)
    }
    
    render() {
        
        return (                        
            <div id="background" onClick={this.points}>            
                <img src={require('../images/tripsPage.png')} className="stretch" alt="" />                
            </div>
          );
    }
}

export default TripsPage
