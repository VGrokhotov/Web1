var arr = [];

for (i = 0; i < 1001; i++) {
  var a = Math.round(Math.random() * 1000);
  arr.push(a);
}

function min(array) {
  var min = 100000000000000;
  for (number of arr) {
    if (min > number) {
      min = number;
    }
  }
  return min;
}

function max(array) {
  var max = -100000000000000;
  for (number of arr) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function median(array) {
  var newArr = arr.slice().sort(compareNumeric);
  return newArr[Math.floor(newArr.length / 2)];
}

var minimun = min(arr);
var maximum = max(arr);
var mediana = median(arr);

console.log(minimun, maximum, mediana);

function swap(array, firstIndex, secondIndex) {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

function partition(array, left, right) {
  var pivot = array[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(array, left, right) {
  var index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if (index < right) {
      quickSort(array, index, right);
    }
  }
  return array;
}

arr = quickSort(arr, 0, arr.length - 1);
console.log(arr);

var dict = new Map();
var info = document.querySelectorAll("*")
for (tag of info) {
  var tagName = tag.tagName
  if (dict.has(tagName)) {
    dict.set(tagName, dict.get(tagName) + 1 )
  } else {
    dict.set(tagName, 1)
  }
}
for (var [key, value] of dict) {
  console.log(key + ": " + value);
}