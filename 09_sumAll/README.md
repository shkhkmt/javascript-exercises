# Exercise 09 - sumAll

Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop


## PSEUDOCODE 

GET input values.
CREATE output variable. 
Loop from the first value to the last value.
ADD each iteration to the sum.
Return Final value. 


sumAll(integerOne, integerTwo) {
    let output; 
    for (let i = integerOne; i <= integerTwo, i++){
        output++
    }
}
