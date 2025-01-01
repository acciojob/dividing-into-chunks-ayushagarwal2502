const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	 let result = [];
    let chunk = [];
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(sum + arr[i] > n){
            result.push(chunk);
            chunk = [];
            sum = 0;
        }
        chunk.push(arr[i]);
        sum += arr[i];
    }
    if(chunk.length > 0){
        result.push(chunk);
    }
    return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
