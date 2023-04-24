const ActivitySelection = (arr) => {
  //sort based on the finish time
  arr.sort((a, b) => a.end - b.end);
  let selectedActivities = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let prev = selectedActivities[selectedActivities.length - 1];
    if (prev.end <= arr[i].start) {
      selectedActivities.push(arr[i]);
    }
  }
  return selectedActivities;
};
const activities = [
  { start: 1, end: 4 },
  { start: 3, end: 5 }, //no
  { start: 0, end: 6 }, //
  { start: 5, end: 7 },
  { start: 3, end: 8 }, //
  { start: 5, end: 9 }, //
  { start: 6, end: 10 }, //
  { start: 8, end: 11 },
  { start: 8, end: 12 }, //
  { start: 2, end: 13 }, //
  { start: 12, end: 14 },
];
const expected = 5;
console.log(ActivitySelection(activities));
//t.c ==> o(nlogn)
//s.c ==> o(n)
