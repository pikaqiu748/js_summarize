var quickSort = function (arr, l, r) {
  if (l < r) {
    let temp = arr[l];
    let right = r, left = l;
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

let a = [12, 32, 453, 456, 45, 675, 567]
quickSort(a, 0, a.length - 1)
console.log(a)