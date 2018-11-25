import * as React from "react"
import './SignUp.css'


class SignUpForm extends React.Component{
    
    render() {
        const test = () => {
            console.log("test")
            this.props.style(15);
            fetch('https://safety-hackathon-toronto.herokuapp.com/dangerLevel/lat/43.674244454654/lon/-79.367489123').then(response=> console.log(response.json)).then(data=> console.log(data))
        }
        return (
            <div>
                <img src={require('../images/car-Green.png')} alt="Green Car" className='image'/>
                <p className='welcome'>Welcome Abroad!</p>
                <p className='signupSteps'>Signup with Roadie in simple steps</p>
                <form>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="name" placeholder="Name"/>
                        <br/>
                        <div>
                            <input type="number" className="form-control" id="age" placeholder="Age" pattern="[0-9]"/>
                            <select className='form-control' name="gender" id="gender" defaultValue="">
                                <option value="" disabled={true} >Gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="NA">N.A.</option>
                            </select>
                        </div>
                        <br/>
                        <br/>
                        <p className='chooseVehicle'>Choose a Vehicle type :</p>
                        <div>
                        <select className='form-control' name="vehicle" id="vehicle" defaultValue="">
                                <option value="" disabled={true}>Choose a Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="light-duty truck">Light-duty truck</option>
                                <option value="medium-duty truck">Medium-duty truck</option>
                                <option value="heavy-duty truck">Heavy-duty truck</option>
                            </select>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary submit" onClick={test}>Signup</button>
                </form>
            </div>

          );
    }

    
}

export default SignUpForm
