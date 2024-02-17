console.log('Starting server');

const express = require('express');

const app = express();


app.get('/mean/:nums', function(req, res) {
  console.log("calculating mean")
  const nums = req.params.nums.split(',').map(Number); 
  const mean = calculateMean(nums);
  console.log(mean)
  return res.send(`The mean of the numbers ${nums} is: ${mean}`);
});




function calculateMean(numbers) {
  if (numbers.length === 0) {
      return 'No numbers provided';
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

app.get('/median/:nums', function(req, res){
  console.log("calculating median")
  const nums = req.params.nums.split(',').map(Number); 
  const median = calculateMedian(nums);

  return res.send(`The median of the numbers ${nums} is: ${median}`)


})


function calculateMedian(numbers) {
  numbers.sort((a, b) => a - b);
    const middleIndex = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
    } else {
        return numbers[middleIndex];
    }
}


app.get('/mode/:nums', function(req, res){
  console.log("calculating median")
  const nums = req.params.nums.split(',').map(Number); 
  const mode = calculateMode(nums);

  return res.send(`The mode of the numbers ${nums} is: ${mode}`)


})





function calculateMode(n){
  n.sort((a, b) => a - b); 
//console.log(arr) 
  let count = 1, 
    max = 0, 
    mode; 
  
  for (let i = 1; i < n.length; ++i) { 
    if (n[i] === n[i - 1]) { 
        count++; 
    } else { 
        count = 1; 
    } 
    if (count > max) { 
        max = count; 
        mode = n[i]; 

    } 
} 
return mode
}





app.listen(3000, function(){
    console.log('App on port 3000');
  }) 
