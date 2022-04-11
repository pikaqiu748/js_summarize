function nullObj (obj) {
  if (Object.keys(obj).length === 0) {
    return true
  }
  return false;
}

console.log(nullObj({}))