function solve() {
   document.querySelector('#btnSend').addEventListener('click', clickHandler);

   function clickHandler() {
      let btn = document.getElementById('btnSend');
      let inputElem = document.querySelector('#inputs textarea');
      let bestRestourantPElem = document.querySelector('#bestRestaurant p');
      let workersPElem = document.querySelector('#workers p');
      if (btn == null || inputElem == null || bestRestourantPElem == null || workersPElem == null) {
         throw new Error('Missing DOM element!');
      }

      let data = JSON.parse(inputElem.value);
      function restourantsFactory(data) {
         let restourants = data.reduce((a, b) => {
            let [restourant, workersInfo] = b.split(' - ');
            let ppl = workersInfo.split(', ');

            let currRestourant = a.find(e => e.name == restourant);

            if (currRestourant == undefined) {
               let currWorkers = ppl.reduce((a, b) => {
                  let [name, salary] = b.split(' ');
                  a[name] = Number(salary);
                  return a;
               }, {});
               a.push({
                  name: restourant,
                  workers: currWorkers,
               })

            } else {
               ppl.forEach((e) => {
                  let [name, salary] = e.split(' ');
                  currRestourant.workers[name] = Number(salary);
               });
            }

            return a;
         }, []);
         return restourants;
      }
      function bestRestourantInfo(restourants) {
         let bestRestourant = '';
         let avgSalary = 0;
         let bestSalary = 0;

         for (const e of restourants) {
            let currAvg = Object.values(e.workers).reduce((a, b) => a + b, 0) / Object.values(e.workers).length;

            if (currAvg > avgSalary) {
               bestRestourant = e.name;
               avgSalary = currAvg;
               bestSalary = Math.max(...Object.values(e.workers));
            }
         }
         let best = {
            restourant: bestRestourant,
            avg: avgSalary,
            salary: bestSalary
         }
         return best;
      }

      const restourants = restourantsFactory(data);
      const best = bestRestourantInfo(restourants);

      bestRestourantPElem.textContent = `Name: ${best.restourant} Average Salary: ${best.avg.toFixed(2)} Best Salary: ${best.salary.toFixed(2)}`;
      let workersOutput = Object.entries(restourants.find(e => e.name == best.restourant).workers).sort((a, b) => b[1] - a[1]).map(([name, salary] = e) => `Name: ${name} With Salary: ${salary}`).join(' ');
      workersPElem.textContent = `${workersOutput}`;
   }
}