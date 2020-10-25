import React from 'react';
import './SoritngVisualizer.css'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import bubbleSort from './SortingAlgos';

class SortingVisualizer extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            speed: 1,
            active: false,
            algoName: 'bubbleSort',
            array : [],
            length_array : 10,
        };
    }

    componentDidMount(){
        this.resetArray();
    }
    callBubbleSort(algoName){
        this.setState({algoName: algoName});
        this.state.active = bubbleSort(this.state.array, this.state.speed);
        document.getElementById('1button').disabled = true;
        document.getElementById('2button').disabled = true;
        this.state.active = true;
    }
    resetArray(){
        
        const array = [];
        for(let i=0;i<this.state.length_array;i++){
            array.push(randomNumberGen(this.state.height));
        }
        this.setState({array: array});
    }
    handleChange = (event, value) => {
        this.setState({speed:value});
    }

    handleChange1 = (event, value) => {
        this.setState({length_array:value});
        this.resetArray();
    }

    reset(){
        this.resetArray();
        document.getElementById('1button').disabled = false;
        document.getElementById('2button').disabled = false;
        this.state.active = false;
    }

    render(){
        const stateVar = this.state;

        return(
            <div>      
                <button id="2button" onClick={() => this.resetArray()} style={{margin:"10px"}}>New Array</button>
                <button id="1button" onClick={() => this.callBubbleSort("bubbleSort")} style={{margin:"10px"}}>Bubble Sort</button>
                <button id="3button" onClick={() => this.reset()} style={{margin:"10px"}}>Reset</button>
                <Typography id="discrete-slider-small-steps" gutterBottom>
                Speed
                </Typography>
                <div className="slider-class">
                    <Slider
                        defaultValue={1}
                        getAriaValueText={valuetext1}
                        aria-labelledby="discrete-slider-small-steps"
                        step={1}
                        marks
                        disabled={this.state.active}
                        onChange={this.handleChange}
                        min={1}
                        max={5}
                        valueLabelDisplay="auto"
                    /> 
                </div>
                <Typography id="discrete-slider-small-steps" gutterBottom>
                Array Length
                </Typography>
                <div className="slider-class1">
                    <Slider
                        defaultValue={1}
                        getAriaValueText={valuetext2}
                        aria-labelledby="discrete-slider-small-steps"
                        step={1}
                        marks
                        disabled={this.state.active}
                        onChange={this.handleChange1}
                        min={10}
                        max={30}
                        valueLabelDisplay="auto"
                    /> 
                </div>
                <div className="array-container">
                    {stateVar.array.map((val, idx) => (
                        <div 
                        className="array-bar"
                        id={idx}
                        style={{
                            backgroundColor: "turquoise",
                            height: `${val}px`,
                        }}
                    >{val}</div>
                    ))}
                </div>
                
            </div>
            
        );
        
    }
    
}

function randomNumberGen(){
    const max = window.innerHeight/1.2;
    const min = 10;
    return Math.floor(Math.random() * (max - min) ) + min;
}

  
function valuetext1(value) {
    return `${value}*x`;
}
function valuetext2(value) {
    return `${value}*x`;
}
export default SortingVisualizer;
