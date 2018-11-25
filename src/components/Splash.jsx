import * as React from "react"

class SplashPage extends React.Component {
    constructor(props){
        super(props)
    }

    signUp = () => {
        this.props.test(13)
    }

    login = () => {
        this.props.test(13)
    }

    render()  {

        return (
            <div>
            <button onClick={this.login}>SplashScreen</button>
            </div>
        )
    }
}

export default SplashPage 