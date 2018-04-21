function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
  return "I can\'t hear you!";}
<<<<<<< HEAD
  else if (string.toUpperCase() === string) {
  return "YES INDEED!";}
  else return "I love you, too.";
=======
  elseif (string.toUpperCase() === string) {
  return "YES INDEED!";}
  else {
    return "I love you, too."
>>>>>>> 32e5e6a8e31a80afff7af4929df7d763342aed31
}