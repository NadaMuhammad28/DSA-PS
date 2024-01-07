const insertInterval=(intervals, newInterval)=>{

let ind = 0 
  for(let i = 0 ; i < intervals.length; i++){
    let start = newInterval[0]
    let cur = intervals[i]
    if(start <=cur[0] ){
      intervals.splice (i,0,newInterval)
     console.log('true',cur);
     ind=i
     console.log('i',ind);
     break 
    }
let prev = intervals[ind]
    for (let j =ind+1; j<intervals.length; j++){


    }

  }
  return intervals
}


const intervals=[[1,3], [5,7], [8,12]]
const newInterval=[4,10]
console.log(insertInterval(intervals, newInterval));