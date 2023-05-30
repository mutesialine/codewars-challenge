function roundRobin(jobs, slice, index) {
  let clockCyclesTime = 0;
  while (jobs[index] > 0) {
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[index] === 0) {
        break;
      }
      if (jobs[i] === 0) {
        continue;
      }
      clockCyclesTime += jobs[i] < slice ? jobs[i] : slice;
      jobs[i] = jobs[i] < slice ? 0 : jobs[i] - slice;
    }
  }
  return clockCyclesTime;
}
