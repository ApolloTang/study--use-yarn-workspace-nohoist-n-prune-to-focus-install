const pkgJson = require('../package.json')


let output = `${pkgJson.name}:${pkgJson.version} ---> no dependency`
console.log(output)


module.exports = pkgJson

