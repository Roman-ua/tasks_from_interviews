const second_output_data = document.getElementById('second_output')
const second_preparation_button = document.getElementById('second_preparation_data')
const input = document.getElementById('second_screen_input')

const countingLetter = (string) => {
  const arrayChar = string.split('').filter((char)=> char !== ' ')
  const uniqCharSet = new Set (arrayChar)
  second_output_data.innerText = `${uniqCharSet.size}`
}

second_preparation_button.addEventListener('click', ()=>countingLetter(input.value))
