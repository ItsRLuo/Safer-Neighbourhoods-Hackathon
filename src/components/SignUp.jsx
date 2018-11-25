import * as React from "react"
import './SignUp.css'


class SignUpForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {name: '', age: '', gender: '', vehicle: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        var id = event.target.id;
        switch (id) {
            case 'name':
                this.setState({name: event.target.value});
                break;
            case 'age':
                this.setState({age: event.target.value});
                break;
            case 'gender':
                this.setState({gender: event.target.value});
                break;
            case 'vehicle':
                this.setState({vehicle: event.target.value});
                break;
            default:
                break;
        }
      }

      handleSubmit(event) {
        this.props.style(15);
        fetch(`https://safety-hackathon-toronto.herokuapp.com/signup?name=${encodeURIComponent(this.state.name)}&age=${encodeURIComponent(this.state.age)}&gender=${encodeURIComponent(this.state.gender)}&vehicle=${encodeURIComponent(this.state.vehicle)}`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          }).then(response => console.log(response));
      }
    
    render() {
        return (
            <div>
                <img src={require('../images/car-Green-2.png')} alt="Green Car" className='image'/>
                <p className='welcome'>Welcome Abroad!</p>
                <p className='signupSteps'>Signup with Roadie in simple steps</p>
                <form>
                    <div className='form-group'>
                        <input type="text" className="form-control" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                        <br/>
                        <div>
                            <input type="number" className="form-control" id="age" placeholder="Age" pattern="[0-9]" value={this.state.age} onChange={this.handleChange}/>
                            <select className='form-control' name="gender" id="gender" value={this.state.gender} onChange={this.handleChange}>
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
                        <select className='form-control' name="vehicle" id="vehicle" value={this.state.vehicle} onChange={this.handleChange}>
                                <option value="" disabled={true}>Choose a Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="light-duty truck">Light-duty truck</option>
                                <option value="medium-duty truck">Medium-duty truck</option>
                                <option value="heavy-duty truck">Heavy-duty truck</option>
                            </select>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary submit" onClick={this.handleSubmit}>Signup</button>
                </form>
            </div>

          );
    }

    
}

export default SignUpForm
