import React from 'react';

class SortingAlgos extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array:this.props.array,
            speed:this.props.speed,
            algoName: this.props.algoName,
            active: this.props.active,

        }
    }
    runAlgorithm(){
        this.bubbleSort(this.props.array);
    }
    componentDidMount(){
        console.log(typeof this.state.active);
        console.log(this.state.active);
        if(this.state.active){
            console.log(this.state);
            this.runAlgorithm();
        }
    }

    async bubbleSort(array){
        for(let i=0;i<array.length;i++){
            for(let j=0;j<(array.length-i-1);j++){
                if(array[j+1]<array[j]){
                    const temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                    this.bubbleHelper(array,j);
                    await sleep(500*(1/this.state.speed));
                }
                else{
                    this.bubbleHelper2(array, j);
                    await sleep(500*(1/this.state.speed));
                }
                this.bubbleHelper1(array,j);
            }
        }
        return array;
    }
    bubbleHelper(array, idx){
        document.getElementById(idx).style.backgroundColor = "pink";
        document.getElementById(idx).innerHTML = array[idx];
        document.getElementById(idx+1).style.backgroundColor = "pink";
        document.getElementById(idx+1).innerHTML = array[idx+1];
        document.getElementById(idx).style.height=`${array[idx]}px`;
        document.getElementById(idx+1).style.height=`${array[idx+1]}px`;
    }
    
    bubbleHelper2(array, idx){
        document.getElementById(idx).style.backgroundColor = "green";
        document.getElementById(idx+1).style.backgroundColor = "green";
    }
    
    bubbleHelper1(array, idx){
        document.getElementById(idx).style.backgroundColor = "turquoise";
        document.getElementById(idx+1).style.backgroundColor = "turquoise";
    }
    render(){
        if(this.state.active){
            return(
                <div><h1>Running Algorithm</h1></div>
            )
        }
        else{
            return (
                <div>
                    <h1>Select Algorithm</h1>
                </div>
            );
        }
            
    }
} 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default SortingAlgos;