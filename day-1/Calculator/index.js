let typeOfOperation=process.argv[2]
let numArr=process.argv.slice(3).map(Number);



let calculator=(operation, nums)=>{
    let ans=0;
// operation=="add"? ans=add(nums) : operation=="sub" ? ans=sub(nums) : operation 
switch (operation) {
    case "add":        
       ans=add(nums)
       break;
    case "sub":
        ans=sub(nums)
        break;
    case "mult":
        ans=mult(nums)
        break;
    case "divide":
        ans=divide(nums)
        break;
    case "sin":
        ans=sinFun(nums)
        break;
    case "cos":
        ans=cosFun(nums)
        break;
    case "tan":
        ans=tanFun(nums)
        break;
    default:
        ans
        break;
}

    console.log(ans)
}

let add=(num)=>{
let count=0;
for(let i=0; i<num.length; i++)
count+=num[i]
    return count
}
let sub=(num)=>{
    return num[0]-num[1]
}
let mult=(num)=>{
    let multiVal=1;
    for(let i=0; i<num.length; i++)
    multiVal=multiVal*num[i]
    return multiVal
}

let divide=(num)=>{
return num[0]/num[1]
}
let sinFun=(num)=>{
return Math.sin(num[0])
}
let cosFun=(num)=>{
    return Math.cos(num[0])
}
let tanFun=(num)=>{
    return Math.tan(num[0])
}

calculator(typeOfOperation, numArr)







