const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  expr = [...expr]
  const exprLength = expr.length
  let arr = []
  let arr1 = []
  
  for (let i = 0; i <= exprLength; i++) {
    arr[i] = expr.splice(0, 10).join('').split('')
  
    while (arr[i][0] === '0') {
      arr[i].shift()
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr1[i] = []
    for (let j = 0; j < arr[i].length / 2; j++) {
      arr1[i][j] = (arr[i][2 * j] + arr[i][2 * j + 1])
      if (arr1[i][j] === '10') {
        arr1[i][j] = '.'
      } else if (arr1[i][j] === '11') {
        arr1[i][j] = '-'
      } else if(arr[i] = '**'){
      arr1[i][j] = ' '
      }
    }
    arr1[i] = arr1[i].join('')
  }

  for (let key in MORSE_TABLE) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === key) {
        arr1[i] = MORSE_TABLE[key]
      }
    }
  }
  
  return arr1.join('')

}

module.exports = {
    decode
}