import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Panel from "./components/Panel";
import Image from "./components/Image";
const shuffle = require('shuffle-array');

class App extends Component {
  state = {
    images: [
      { src: "http://bdfjade.com/data/out/18/5267162-cartoon-picture.png", alt: "simba", clicked: 0},
      { src: "http://vexoid.com/wp-content/uploads/2015/10/battletoads-game-128x128@2x.jpg", alt: "battletoads" },
      { src: "http://www.tutorialsscripts.com/free-icons/funny-icons/black-funny-icon-256-x-256.png", alt: "random"}
    ],
    counter: 0
  };

  clickImageHandler = () => {
    this.setState(
      shuffle(this.state.images)
    );
    this.setState(
      { counter: this.state.counter + 1 }
    );
  };

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <h1>Score: {this.state.counter}</h1>
        <Panel onClick={this.clickImageHandler}>
          <Image src={this.state.images[0].src} alt={this.state.images[0].alt} onclick={this.clickImageHandler} clicked={this.state.images[0].clicked} />
          <Image src={this.state.images[1].src} alt={this.state.images[1].alt} onclick={this.clickImageHandler} />
          <Image src={this.state.images[2].src} alt={this.state.images[2].alt} onclick={this.clickImageHandler} />
        </Panel>
      </div>
    )
  }
}

export default App;
