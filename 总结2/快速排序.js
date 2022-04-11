var quickSort = function (arr, l, r) {
  if (arr.length === 0) return [];
  if (l < r) {
    let left = l, right = r;
    let temp = arr[l];
    while (left < right) {
      while (left < right && arr[right] > temp) right--;
      if (left < right) arr[left++] = arr[right];
      while (left < right && arr[left] < temp) left++;
      if (left < right) arr[right--] = arr[left];
    }
    arr[left] = temp;
    quickSort(arr, l, left - 1);
    quickSort(arr, left + 1, r);
  }
}

let arr = [23, 35, 12, 54, 54]

quickSort(arr, 0, 4);

console.log(arr)