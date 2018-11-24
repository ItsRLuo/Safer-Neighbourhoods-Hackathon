import * as React from "react"

interface Iinput{
    test:any
}


class SplashPage extends React.Component<Iinput> {
    constructor(props:Iinput){
        super(props)
    }

    public moreTest = () => {
        this.props.test(13)
    }

    public render()  {

        return (
            <div>
            <button onClick={this.moreTest}>SplashScreen</button>
            </div>
        )
    }
}

export default SplashPage 