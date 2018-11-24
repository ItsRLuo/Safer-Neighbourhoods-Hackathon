import * as React from "react"

interface Iinput{
    test:any
}


class IncentivePage extends React.Component<Iinput> {
    constructor(props:Iinput){
        super(props)
    }

    public moreTest = () => {
        this.props.test()
    }

    public render()  {

        return (
            <div>
            <button onClick={this.moreTest}>register</button>
            </div>
        )
    }
}

export default IncentivePage 