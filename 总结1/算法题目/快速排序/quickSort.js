function quickSort (a, l, r) {
  // a = [1, 2, 2]
  if (l < r) {
    let i, j, x;
    i = l;
    j = r;
    x = a[i];
    while (i < j) {
      while (i < j && a[j] > x) {
        j--;
      }
      if (i < j) {
        a[i++] = a[j]
      }
      while (i < j && a[i] < x) {
        i++;
      }
      if (i < j) {
        a[j--] = a[i];
      }
    }
    a[i] = x
    quickSort(a, l, i - 1);
    quickSort(a, i + 1, r);
  }
}

let test = [34, 12, 65, 78, 3, 13, 56, 3]
quickSort(test, 0, 7)
console.log(test)