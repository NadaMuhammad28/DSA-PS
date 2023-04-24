const jobSequencing = (jobs) => {
  const res = [];
  jobs.sort((a, b) => b.profit - a.profit);
  for (let i = 0; i < jobs.length; i++) {
    const j = jobs[i].deadline - 1;
    if (res[j] == undefined) res[j] = jobs[i].id;
    else {
      let k = j - 1;
      while (k >= 0) {
        if (res[k] == undefined) {
          res[k] = jobs[i].id;

          break;
        }
        k--;
      }
    }
  }
  return res;
};
const jobs = [
  { id: "j1", deadline: 2, profit: 100 },
  { id: "j2", deadline: 1, profit: 19 },
  { id: "j3", deadline: 2, profit: 27 },
  { id: "j4", deadline: 1, profit: 25 },
  { id: "j5", deadline: 3, profit: 15 },
];
console.log(jobSequencing(jobs));
//t.c==> o(n^2)
//s.c==> o(n)
