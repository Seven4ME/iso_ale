import React, { Component } from 'react';
import Slider from 'react-rangeslider';


class DaysSlider extends Component {
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
        let days = document.getElementById('days');
        days.innerHTML = value + ' дн.';

    }
     
    render() {
        let { volume } = this.state
        return (
        <Slider
            min = {1}
            max = {30}
            step = {1}
            value= {volume}
            tooltip = {false}
            orientation= "horizontal"
            onChange= {this.handleChange}
        />
        )
    }
    }

export default DaysSlider;
