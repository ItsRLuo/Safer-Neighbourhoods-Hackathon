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
            console.log("qwe")
            this.props.style()
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
