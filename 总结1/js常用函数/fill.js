const getScore = (score) => {
  const scoreArray = new Array(101).fill(0).map((number, index) => {
    return [index, () => {
      return index < 60 ? '不合格' : '合格'
    }]
  })


  const scoreMap = new Map(scoreArray)
  return scoreMap.get(score) ? scoreMap.get(score)() : '未知分数'
}


const getScore01 = (score) => {
  const scoreArray = new Array(101).fill(0).map((number, index) => {
    return [index, () => {
      return index < 60 ? '不及格' : '及格'
    }]
  })


  const scoreMap = new Map(scoreArray)
  return scoreMap.get(score) ? scoreMap.get(score)() : '未知分数'
}


console.log(getScore01(60))
console.log(getScore(60))



console.log(new Map([1, 2, 3].map((number, index) => [index, number])).get(1))