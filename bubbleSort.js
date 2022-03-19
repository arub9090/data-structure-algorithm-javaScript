function bubbleSort(arr) {
    const swap =(arr,indx1, indx2) => {
        [arr[indx1], arr[indx2]]=[arr[indx2], arr[indx1]]
    };

    
    for (let i = arr.length; i > 0; i--) {
        let swapNotDone= true
        for (let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1) // if j large put it behind
                swapNotDone= false; // better optimization 
            }
        }
        if(swapNotDone) break;  // doing short circuit here
    }
    
return arr;
}

bubbleSort([2,3,-5,6,12,18,5,6,-9,-6,25])
