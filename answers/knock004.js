// No.004 整数値を入力させ、その入力値を3倍した計算結果を表示するプログラムを作成せよ。

exports.answer = (args) => {
  const [multiplicand] = args
  const product = multiplicand * 3
  console.log(product)
}
