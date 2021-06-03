function formatNumber(num){
    //convert number to string with 2 decimal places
    let cStr = num.toFixed(2).toString();
    //this contains the new formatted number (it's gonna be reversed, gotta flip it at the end)
    let nStr = [''];
    //to easily keep track of digits
    let idx = 1;
    //iterate backwards through string 
    for(let i = cStr.length - 1; i >= 0; i--){
        //push current digit to the array 
        //(you could use .charAt() but this seemed better)
        nStr.push(cStr[i]);
        //check if:
        //index is a multiple of 3
        //not at the last digit 
        //and after the decimal point
        //if true add ',' 
        if(idx % 3 === 0 && idx + 1 <= cStr.length && idx > 3){
            nStr.push(',');
        };
        //increment index
        idx++;
    };
//reverse the array, join it's elements into a single string then return the value
    return nStr.reverse().join('');
};
export {formatNumber};