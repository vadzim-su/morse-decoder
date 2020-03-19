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
    expr = expr.split('')
    let newStr = null
  
    for (let key in MORSE_TABLE) {
      for (let i = 0; i < expr.length; i++) {
        if (expr[i] === MORSE_TABLE[key]) {
          expr[i] = key
        }
      }
    }
  
    newStr = expr.join(',').split(',')
  
    for (let i = 0; i < newStr.length; i++) {
      if (newStr[i] === ' ') {
        newStr[i] = '**********'
      }
    }
  
    for (let i = 0; i < newStr.length; i++) {
      newStr[i] = newStr[i].split('')
      for (let j = 0; j < newStr[i].length; j++)
        if (newStr[i][j] === '.') {
          newStr[i][j] = 10
        } else if (newStr[i][j] === '-') {
        newStr[i][j] = 11
      }
      
      while (newStr[i].join('').length < 10) {
        newStr[i].unshift(0)
      }
  
      newStr[i] = newStr[i].join('')
    }
    
    return newStr.join('')
}

module.exports = {
    decode
}