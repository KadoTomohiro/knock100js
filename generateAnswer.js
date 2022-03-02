const  fs = require('fs')

const [questionNoArg] = process.argv.slice(2)
const questionNo = questionNoArg.padStart(3, '0')
const  template = `// No.${questionNo}

exports.answer = (args) => {
  // implement answer here
}
`

fs.writeFile(`answers/knock${questionNo}.js`, template, (err, data) => {
  if(err) {
    console.log(err)
    return
  }
  console.log('write end')
});
