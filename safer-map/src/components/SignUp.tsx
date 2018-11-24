import * as React from "react"
import './SignUp.css'

interface IFieldName{
    fields:string[]
    style:any
}

class SignUpForm extends React.Component<IFieldName>{
    constructor(props: IFieldName) {
        super(props);
    }
    
    public render() {
        console.log(this.props) 
        const test = () => {
            console.log("test")
            this.props.style(15)
            // fetch('https://safety-hackathon-toronto.herokuapp.com/?police=latitude,longitude&hazard=latitude,longitude', {
            //     body: JSON.stringify({
            //         firstParam: 'yourValue',
            //         secondParam: 'yourOtherValue',
            //     }),
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     method: 'GET',
            // })
            fetch('https://safety-hackathon-toronto.herokuapp.com/?police=latitude,longitude&hazard=latitude,longitude').then(response=> console.log(response.json)).then(data=> console.log(data))
        }
        return (
            <div style={{display: 'inline-grid', margin: 'auto'}}>
                <form className="pure-form">
                <fieldset>
                {
                    this.props.fields.map(
                        (field:any) => 
                        <input type="input" placeholder={field} key={field} />
                    )
                }
                <button type="button" className="pure-button pure-button-primary" onClick={test}>submit</button>
                </fieldset>
                </form>
                
            </div>
          );
    }

    
}

export default SignUpForm
