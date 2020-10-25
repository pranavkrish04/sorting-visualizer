import React from 'react';
import './SoritngVisualizer.css'
import SortingAlgos from './SortingAlgos';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


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
    resetOptions(algoName){
        console.log("shit man");
        this.setState({algoName: algoName, active: true});
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

    render(){
        const stateVar = this.state;
        return(
            <div>
                <SortingAlgos array={this.state.array} speed={this.state.speed} algoName={this.state.algoName} active={this.state.active} />
                <button id="2button" onClick={() => this.resetArray()} style={{margin:"10px"}}>New Array</button>
                <button id="1button" onClick={() => this.resetOptions("bubbleSort")} style={{margin:"10px"}}>Bubble Sort</button>
                <Typography id="discrete-slider-small-steps" gutterBottom>
                Speed
                </Typography>
                <div className="slider-class">
                    <Slider
                        defaultValue={1}
                        getAriaValueText={valuetext}
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

  
function valuetext(value) {
    return `${value}*x`;
}

export default SortingVisualizer;
