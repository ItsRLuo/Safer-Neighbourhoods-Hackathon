import * as React from "react"
import './Home.css'
import TripsPage from "./TripsPage";
class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            on: false,
        }
        this.interval = null
        this.latitudeRange = [43.593, 43.849]
        this.longtitudeRange = [-79.621 , -79.156]
  
        this.dangerMapping = {
          0: 'Safe',
          1: 'Risky',
          2: 'Danger',
        }
  
        this.lastLevel = null
      }
  
      createSpeech = () => {
  
        const latitude = this.latitudeRange[0] +
              Math.random() * ( this.latitudeRange[1] - this.latitudeRange[0])
  
        const longtitude = this.longtitudeRange[0] +
              Math.random() * ( this.longtitudeRange[1] - this.longtitudeRange[0])
  
        fetch(
              `https://safety-hackathon-toronto.herokuapp.com/dangerLevel/lat/${latitude}/lon/${longtitude}`,
            {
              method: 'Get',
              headers: {
                Accept: 'application/json'
              }
            }).then(res=> {
              if (res.ok){
                return res.json()
              }
              return Promise.reject(res)
            }).then(json => {
  
              if (json.level !== this.lastLevel && json.level !== 0){
                this.lastLevel = json.level
                const level = this.dangerMapping[json.level]? this.dangerMapping[json.level]: 'danger'
                console.log(level)

                var levelSpeech = {'Risky':'Area with sharp turns, please drive with caution', 'Danger':'Entering Accident Prone Area, please drive with caution', 'Safe':''}

                window.responsiveVoice.speak(levelSpeech[level])
                setTimeout(()=>{},4000)
              }
            })
  
      }
  
      componentDidUpdate(){
  
        if (this.state.on){
  
          this.interval = setInterval(this.createSpeech, 1500)
  
        }else{
          clearInterval(this.interval)
          this.interval = null
        }
  
      }
  
      handleSubmit = () => {
        this.setState({
          on: !this.state.on
        })
      }

      tripsPage = () => {
        this.props.test(16);
      }
    render(){
        
var circleBar = function() {
    var can = document.getElementById('canvas'),
        spanProcent = document.getElementById('procent'),
         c = can.getContext('2d');
   
    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * 64;
    
    c.lineCap = 'round';
    arcMove();
    
    function arcMove(){
      var deegres = 0;
      var acrInterval = setInterval (function() {
        deegres += 1;
        c.clearRect( 0, 0, can.width, can.height );
        procent = deegres / oneProcent;
  
        spanProcent.innerHTML = procent.toFixed();
  
        c.beginPath();
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
        c.strokeStyle = '#b1b1b1';
        c.lineWidth = '10';
        c.stroke();
  
        c.beginPath();
        c.strokeStyle = '#3949AB';
        c.lineWidth = '10';
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
        c.stroke();
        if( deegres >= result ) clearInterval(acrInterval);
      }, fps);
      
    }    
  }
        return (
            
            <div>
                <h4 style={{float:'left'}}>Start Trip</h4>
                <label class="switch switch_type1" role="switch" style={{float:'right'}}>
                  <input type="checkbox" class="switch__toggle"  />
                  <span class="switch__label"></span>
                </label>

                <div id={'button-holder'}>
                    <button id={'score'} onClick={this.tripsPage}></button>
                    <button id={'trip'} ></button>
                    <button id={'user'}></button>
                </div>

                <div className="canvas-wrap">
                    <canvas id="canvas" height="350" width="350"></canvas>
                    <span id="procent"></span>
                </div>
                <h4>Overall Points Collected</h4>
                

                <ul className="list-ic vertical">
                <h4 style={{float:'right'}}> Last Trip Details</h4>

                    <li>
                    <span>1</span>
                    <a href="https://www.google.com/maps?client=ubuntu&channel=fs&q=325+front+street+west&oe=utf-8&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjIwcfP8u7eAhXmy4MKHVP4B98Q_AUIDigB">One Eleven</a>
                    </li>
                    <li>
                    <span>2</span>
                    <a href="https://www.google.com/maps/place/Finch+Station/@43.6499559,-79.5229331,11z/data=!4m8!1m2!2m1!1sfinch+station!3m4!1s0x882b2d0e11cae715:0x59918ef0fd7ad7fa!8m2!3d43.7812624!4d-79.4150846">Finch Station</a>
                    </li>
                    <li>
                    <span>3</span>
                    <a href="https://www.google.com/maps/search/hillcrest+mall/@43.8553029,-79.437926,17z/data=!3m1!4b1">Hillcrest Mall</a>
                    </li>
                </ul>

                <div className="slidecontainer">
                    
                    <p>Focused Driving: 77% <span id="demo"></span></p>
                    <input type="range" min="1" max="100" value="77" className="sliderLine" id="myRange" />
                    <p>Speed Control: 90% <span id="demo"></span></p>
                    <input type="range" min="1" max="100" value="90" className="sliderLine" id="myRange" />
                    <p>Breaking: 88% <span id="demo"></span></p>
                    <input type="range" min="1" max="100" value="88" className="sliderLine" id="myRange" />
                    <p>Acceleration: 91% <span id="demo"></span></p>
                    <input type="range" min="1" max="100" value="91" className="sliderLine" id="myRange" />
                </div>
                <div>
          <button onClick={this.handleSubmit} className='btn btn-primary'>
            {this.state.on? 'ON': 'OFF'}
          </button>
          <div style={{visibility:'hidden'}}>
            {setTimeout(circleBar,0)}
          </div>
          
        </div>
            </div>

            
        )
}
}

export default HomePage
