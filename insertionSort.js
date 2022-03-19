function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentItem= arr[i];
            for (var j = i-1; j >=0 && currentItem <arr[j]; j--) {    
            arr[j+1]= arr[j];
        } 
        arr[j+1] = currentItem; 
    }
    return arr;
}

insertionSort([8,2,4,1,3])
