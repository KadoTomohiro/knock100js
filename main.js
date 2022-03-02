const [questionNoArg, ...args] = process.argv.slice(2)
const questionNo = questionNoArg.padStart(3, '0')

const question = require(`./answers/knock${questionNo}.js`)

if (question === undefined) throw new ReferenceError(`knock${questionNo}.js is not defined`)

if (typeof question.answer !== 'function') throw new Error(`The answer to Question ${questionNo} is not implemented`)

question.answer(args)
