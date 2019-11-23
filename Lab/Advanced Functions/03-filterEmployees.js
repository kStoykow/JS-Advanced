function solution(data, criteria) {
    function splitter(criteria) {
        return criteria.split('-');
    }

    function filterByProp(prop, val, el) {
        return el[prop] == val;
    }

    function formatOutput(e, i) {
        return `${i}. ${e.first_name} ${e.last_name} - ${e.email}`;
    }

    return criteria === 'all'
        ? JSON.parse(data)
            .map(formatOutput)
            .join('\n')

        : JSON.parse(data)
            .filter(filterByProp.bind(undefined, ...splitter(criteria)))
            .map(formatOutput)
            .join('\n');
}

console.log(
    solution(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
        'gender-Male'
    ));