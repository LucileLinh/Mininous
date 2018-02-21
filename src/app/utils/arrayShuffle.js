// prototype cards shuffle:
export const shuffle = function (array) {
  var i = array.length;
  var j;
  var temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};
