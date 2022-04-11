function nullObj (obj) {
  if (JSON.stringify(obj) === '{}') {
    return true
  }
  return false;
}

console.log(nullObj({ a: 1 }))
