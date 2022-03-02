// No.005 整数値を2つ入力させ、それらの値の和、差、積、商と余りを求めるプログラムを作成せよ。なお、差と商は1つ目の値から2つ目の値を引いた、あるいは割った結果とする。余りは無い場合も0と表示するのでよい。

exports.answer = (args) => {
  const [arg1, arg2] = args.map(arg => Number.parseInt(arg))

  const sum = arg1 + arg2
  const difference = arg1 - arg2
  const product = arg1 * arg2
  const quotient = Math.floor(arg1 / arg2)
  const remainder = arg1 % arg2

  console.log(`input number 1: ${arg1}`)
  console.log(`input number 2: ${arg2}`)
  console.log(`和: ${sum}`)
  console.log(`差: ${difference}`)
  console.log(`積: ${product}`)
  console.log(`商: ${quotient}, 余り: ${remainder}`)
}
