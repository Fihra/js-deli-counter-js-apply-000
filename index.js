var katzDeliLine = [];

function takeANumber(currentLine, name){
  currentLine.push(name);
  return `Welcome ${name}. You are number ${currentLine.length}.`;
}
