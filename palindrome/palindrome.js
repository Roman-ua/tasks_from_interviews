const output_data = document.getElementById('output')
const preparation_button = document.getElementById('preparation_data')
const first_input = document.getElementById('screen_input')

const palindrome = (string) => {
  const revertString = string.split('').reverse().join('')
  output_data.innerText = revertString === string ? 'YES' : 'NO'
}

preparation_button.addEventListener('click', ()=>palindrome(first_input.value))
