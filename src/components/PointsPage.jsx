import * as React from "react"
import './PointsPage.css'


class PointsPage extends React.Component{

	constructor(props){
        super(props)
    }
    
    home = () => {
        this.props.test(15)
    }
    
    render() {
        
        return (
            <div id="background" onClick={this.home}>
                <img src={require('../images/pointsPage.png')} className="stretch" alt="" />                
            </div>
          );
    }
}

export default PointsPage
