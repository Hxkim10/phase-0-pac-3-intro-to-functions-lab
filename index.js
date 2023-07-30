/// 1 ///
let string_ = "Hustler";
function shout(string) {
  return string.toUpperCase();
}
const stringUpperCase = shout(string_);

/// 2 ///
function whisper(string) {
  return string.toLowerCase();
}
const stringLowerCase = whisper(stringUpperCase);

/// 3 ///
function logShout(string) {
  string = string.toUpperCase();

  console.log(string);
}
logShout("HELLO");

/// 4 ///
function logWhisper(string) {
  string = string.toLowerCase();
  console.log(string);
}
logWhisper("HELLO");

/// 5 ///
function sayHiToHeadphonedRoommate(string) {
  let stringLowerCase_ = string.toLowerCase();
  let stringUpperCase_ = string.toUpperCase();
  if (string === stringLowerCase_) {
    return "I can't hear you!";
  } else if (string === stringUpperCase_) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
let response = sayHiToHeadphonedRoommate("HELLO");
console.log(response);
