async function bubbleSort(array, speed){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<(array.length-i-1);j++){
            if(array[j+1]<array[j]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                bubbleHelper(array,j);
                await sleep(300*(1/speed));
            }
            else{
                bubbleHelper2(array, j);
                await sleep(300*(1/speed));
            }
            bubbleHelper1(array,j);
        }
    }
    document.getElementById('1button').disabled = false;
    document.getElementById('2button').disabled = false;
    return false;
}  
function bubbleHelper(array, idx){
    document.getElementById(idx).style.backgroundColor = "pink";
    document.getElementById(idx).innerHTML = array[idx];
    document.getElementById(idx+1).style.backgroundColor = "pink";
    document.getElementById(idx+1).innerHTML = array[idx+1];
    document.getElementById(idx).style.height=`${array[idx]}px`;
    document.getElementById(idx+1).style.height=`${array[idx+1]}px`;
}

function bubbleHelper2(array, idx){
    document.getElementById(idx).style.backgroundColor = "green";
    document.getElementById(idx+1).style.backgroundColor = "green";
}

function bubbleHelper1(array, idx){
    document.getElementById(idx).style.backgroundColor = "turquoise";
    document.getElementById(idx+1).style.backgroundColor = "turquoise";
}
    
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default bubbleSort;