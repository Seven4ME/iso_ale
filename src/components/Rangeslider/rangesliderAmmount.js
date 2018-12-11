import './Rangeslider.css';
import React, { Component } from 'react';
import Slider from 'react-rangeslider';




class AmmountSlider extends Component {
	constructor(props, context) {
	  super(props, context)
	  this.state = {
		volume: 0
	  }
	}
	handleChange = (value) => {
	  this.setState({
		volume: value
	  })
	  let money = document.getElementById('money');
	  let moneyConclusion = document.getElementById('rangeValue');
	  money.innerHTML = value + ' грн.';
	  moneyConclusion.innerHTML = value + ' грн';
	}   
	render() {
	  let { volume } = this.state
	  return (
		<Slider
		  min = {100}
		  max = {3500}
		  step = {50}
		  value = {volume}
		  tooltip = {false}
		  orientation= "horizontal"
		  onChange= {this.handleChange}
      universal = {true}
		/>
	  )
	}
  }



export default AmmountSlider;

