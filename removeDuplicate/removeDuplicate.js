const three_output_data = document.getElementById('three_output')
const three_preparation_button = document.getElementById('three_preparation_data')
const data_example = document.getElementById('data_example')

const array = [
  {"id": 11, "timestamp": 4, "amount": 2},
  {"id": 11, "timestamp": 121, "amount": 2},
  {"id": 2, "timestamp": 4, "amount": 8},
  {"id": 1, "timestamp": 2, "amount": 1},
  {"id": 2, "timestamp": 3, "amount": 8},
  {"id": 1, "timestamp": 3, "amount": 2},
  {"id": 10, "timestamp": 1, "amount": 8},
  {"id": 10, "timestamp": 4, "amount": 2},
  {"id": 10, "timestamp": 10, "amount": 2},
]

const filter = (operations) => {
  const result = operations.reduce((acc, curr) => {
    if (!acc[curr.id]) {
      acc[curr.id] = curr
    }
    Object.values(acc).map((item)=>{
      if(item.id === curr.id && item.timestamp < curr.timestamp){
        acc[curr.id] = curr
      }
    })
    return acc;
  }, {});
  return Object.values(result);
};

data_example.insertAdjacentHTML('beforeend', JSON.stringify(array))
three_preparation_button.addEventListener('click', ()=>{
  three_output_data.insertAdjacentHTML('beforeend', JSON.stringify(filter(array)))
})
