import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import Congrats from './Congrats';
import GuessList from './GuessList';
import Input from './Input';
import {correctGuess, getGuesses} from './store/actions/guesses';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.props.getGuesses();
  }

  increment = () => {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    })
  }

  decrement = (a, b) => {
    this.setState((state) => {
      if(!state.counter) {
        return {};
      }
      return {
        counter: state.counter - 1
      };
    })
  }

  render() {

    return (
      <div className="App">
       
        <div> 
          <button data-test="btn-increment" 
            onClick={ this.increment }>
            increment
          </button>  
          <button data-test="btn-decrement" 
            onClick={ this.decrement }>
            decrement
          </button>  
          <h1> current counter is { this.state.counter } </h1>
        </div>

        <Congrats show={ false } />
        <Input show={ true } />
        <GuessList guesses={ this.props.guesses } />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  guesses: state.guesses.guesses
})

const mapDispatchToProps = dispatch => ({
  correctGuess: () => dispatch(correctGuess()),
  getGuesses: () => dispatch(getGuesses())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
