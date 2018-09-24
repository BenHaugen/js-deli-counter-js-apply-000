var katzDeli = [];
var number = 0
const takeANumber = (katzDeli) => { 
  katzDeli.push(number)
  number++;
  
  return (`Welcome, you are number ${number}`);
}

const nowServing = (katzDeli) => {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
<<<<<<< HEAD
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!"
  }
    else {
    return (`Currently serving ${katzDeli.shift()}.`)
    }
}

var line = [];
const currentLine = (katzDeli) => {
  for (let i=0; i < katzDeli.length; i++) {
    line.push(` ` + [i+1] + `. ` + katzDeli[i])
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }
  else {
    return (`The line is currently:` + line)
  }
=======
  if (i===0) {
    return "There is nobody waiting to be served!"
  }
    else {
    return (`Currently serving ${name.shift}.`)
    }
>>>>>>> 5bf0917b3a1b3dd3d4e7d1f7f42b6b5dcd2080fb
}