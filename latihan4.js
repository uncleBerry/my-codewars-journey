function pickIt(arr){
    let odd = [], even = [];
    //coding here
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0 ) {
            even.push(arr[i]);
        } else {
            odd.push(arr[i]);
        }
    }
    return [odd,even];
  }

  console.log(pickIt([1, 2, 3, 4, 5])); 