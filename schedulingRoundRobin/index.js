const roundRobin = (jobs, slice, index) => {
  let clockCyclesTime = 0;
  while (jobs[index] > 0) {
    for (const index in jobs) {
      // If the job for the given index is completed, exit the loop
      if (jobs[index] === 0) break;
      // If the current job is already completed, skip to the next iteration
      if (jobs[i] === 0) continue;
      // Calculate the time for the current job based on the slice
      const time = Math.min(jobs[i], slice);
      clockCyclesTime += time;
      jobs[i] -= time;
    }
  }
  return clockCyclesTime;
};
