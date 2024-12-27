import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: 'John Doe',
        bio: 'Développeur web passionné par les technologies modernes.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Développeur Front-End',
      },
      show: false,
      startTime: new Date(),
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        elapsedTime: Math.floor((new Date() - this.state.startTime) / 1000)
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { show, elapsedTime } = this.state;

    return (
      <div className="App">
        <h1>Profil de la Personne</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>
        
        {show && (
          <div>
            <img src={imgSrc} alt="Personne" />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p><strong>Profession: </strong>{profession}</p>
          </div>
        )}

        <p>Temps écoulé depuis le montage du composant: {elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;
