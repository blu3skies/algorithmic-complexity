function randomArray(arrLength) {
  return Array.from({length: arrLength}, () => Math.floor(Math.random() * arrLength));
}