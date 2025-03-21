function wait(delay) {
  for (let buffer = 0; buffer < 89999999 * delay; buffer++) {
  }
}

function repeat(times, char) {
  let string = "";
  for (let j = 0; j < times; j++) {
    string += " ";
  }

  string += char + "\n";
  console.log(string);
  wait(1);
}

function sinWave(amplitude, angle, phase) {
  return amplitude * (Math.sin(angle / 4) + phase);
}

function wave() {
  let angle = 0;let count = 0;
  while (count < 100) {

    repeat(sinWave(30, angle, 65), '🟢');
    repeat(sinWave(30, -angle, 65), '🔴');

    angle += 1;count++;
  }   
}  

wave(); 
