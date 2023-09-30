class Interval {


    constructor( start, end){
this.start = start
this.end = end
    }

    get interval (){
        return [this.start, this.end]
    }



}


class IntervalsOPerations{

    mergeIntervals(intervals){
        if (!intervals.length) return [];

        const sortedIntervals = [...intervals].sort((a, b) => a.start - b.start);
        let prev = sortedIntervals[0];
        let merged = [];
    
        for (let i = 1; i < sortedIntervals.length; i++) {
            const cur = sortedIntervals[i];
    
            if (cur.start <= prev.end) {
                // Merge overlapping intervals
                prev.end = Math.max(prev.end, cur.end);
            } else {
                // No overlap, push the previous interval and update 'prev'
                merged.push(prev);
                prev = cur;
            }
        }
    
        // Push the last interval
       merged.push(prev);
        return merged;
    }

}


const intervals = [new Interval(6,7), new Interval(2,4),new Interval(5,9)]
const intervalsOPerations = new IntervalsOPerations()
console.log(intervalsOPerations.mergeIntervals(intervals));

// time complexity ==> o(nlogn)