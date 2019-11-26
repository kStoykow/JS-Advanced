function solve(name, age, weight, height) {
    const bmiCalc = Math.round(weight / (height / 100) ** 2);
    function statusCalc() {
        if (bmiCalc < 18.5) {
            return 'underweight';
        }
        if (bmiCalc < 25) {
            return 'normal';
        }
        if (bmiCalc < 30) {
            return 'overweight'
        }
        if (bmiCalc >= 30) {
            return 'obese';
        }
    }
    function addRecomendIfNeeded(obj) {
        if (obj.status == 'obese') {
            obj.recommendation = 'admission required';
        }
    }

    let chart = {
        name,
        personalInfo: { age, weight, height },
        BMI: bmiCalc,
        status: statusCalc(),
    }

    addRecomendIfNeeded(chart);

    return chart;
}

console.log(solve('Peter', 29, 76, 182));