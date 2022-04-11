var quickSort = function (arr, l, r) {
  if (l < r) {
    let i = l, j = r, temp = arr[i];
    while (i < j) {
      while (i < j && arr[j] > temp) {
        j--;
      }
      if (i < j) {
        arr[i++] = arr[j]
      }
      while (i < j && arr[i] < temp) {
        i++;
      }
      if (i < j) {
        arr[j--] = arr[i];
      }
    }
    arr[i]=temp;
    quickSort(arr,l,i-1);
    quickSort(arr,i+1,r);
  }
}

let test = [34, 12, 65, 78, 3, 13, 56, 3]
quickSort(test, 0, 7)
console.log(test)