const { log } = require('console')
const { sep, join, basename, resolve } = require('path')
// const path = require('path')

const filePath = join('/content', 'subfolder', 'test.txt')

log(sep)
log(filePath)
log(basename(filePath))
log(__dirname)

const aboolute = resolve(__dirname, 'content', 'subfolder', 'test.txt')

log(aboolute)