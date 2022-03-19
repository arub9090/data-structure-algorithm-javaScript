//Helper Funtion of QuickSort

function pivot(arr, start=0, end= arr.length -1) {
    const swap =(arr,indx1, indx2) => {
        [arr[indx1], arr[indx2]]=[arr[indx2], arr[indx1]]
    };

    let pivot= arr[start];
     let swapIndex= start;

    for (let i = start+1; i <=end; i++) {
        if(arr[i] < pivot){
            swapIndex++;
            console.log(`Swaping ${arr[swapIndex]} with ${arr[i]}`)
            swap(arr, swapIndex, i)
            
        }
    }

    swap(arr, start, swapIndex)

    return swapIndex;
}

function quickSort(arr, left=0, right= arr.length-1) {
    if(left < right){
        let pivotIndx= pivot(arr, left, right)
    //left
    quickSort(arr,left, pivotIndx-1);
    // right
    quickSort(arr,pivotIndx+1,right)
    }

    return arr;
}



quickSort([2,4,5,6,85,9,54,-115,1,45,5,2,5,-3,-24,475])
