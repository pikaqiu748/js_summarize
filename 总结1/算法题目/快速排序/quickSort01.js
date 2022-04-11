function quickSort (arr, left, right) {
  if (left < right) {
    let i = left;
    let j = right;
    let temp = arr[i]
    while (i < j) {
      while (i < j && arr[j] > temp) {
        j--;
      }
      if (i < j) {
        arr[i++] = arr[j];
      }
      while (i < j && arr[i] < temp) {
        i++;
      }
      if (i < j) {
        arr[j--] = arr[i]
      }
    }
    arr[i] = temp;
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
}

let arr = [234, 345, 23, 45, 67, 23, 645]
quickSort(arr, 0, 6)
console.log(arr)