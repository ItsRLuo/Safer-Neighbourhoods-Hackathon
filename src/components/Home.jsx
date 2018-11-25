import * as React from "react"
class HomePage extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
          wordsToSay: "",
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

            if (json.level !== this.lastLevel){
              this.lastLevel = json.level
              const level = this.dangerMapping[json.level]? this.dangerMapping[json.level]: 'danger'
              window.responsiveVoice.speak(level)
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
      console.log('a')
      this.setState({
        on: !this.state.on
      })
    }

    render(){
      return (
        <div>
          <button onClick={this.handleSubmit}>
            {this.state.on? 'ON': 'OFF'}
          </button>
        </div>
      )
    }
}

export default HomePage
