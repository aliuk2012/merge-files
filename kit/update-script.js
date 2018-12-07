const merge = require('merge')
const chalk = require('chalk')
const emoji = require('node-emoji')
let fs = require('fs')

function mergeConfig(){
  const originalFile = require('../app/config.js')
  const updatedFile = require('./config/config.js')
  const mergedJSON = merge(updatedFile, originalFile )
  const configGuidance = require('./config/config-help-text.js')
  const oldConfig = fs.readFileSync('./app/config.js')
  let output = ''


  //For each object in merged JSON look up any guidance
  for(let key in mergedJSON){
    if (typeof configGuidance[key] !== 'undefined' ){
      output = output + `\n\n\t// ${ configGuidance[key]}\n\t${ key } : ${ JSON.stringify(mergedJSON[key])},`
    } else {
      output = output + `\n\n\t${ key } : ${ JSON.stringify(mergedJSON[key])},`
    }
  }

  // Remove trailing ','
  output = output.substr(0, output.length-1)

  // Write out contents
  fs.writeFile('./app/config.js', `module.exports = {${ output }\n}`, function(err){
    if(err){
      fs.writeFileSync('./app/config.js', oldConfig)
      throw err
    }
    console.log(chalk.green(emoji.emojify(':floppy_disk:   App configuration file successfully updated  :floppy_disk:')))
  })
}


function mergeApplicationSCSS() {
  const originalFile = fs.readFileSync(__dirname + '/../app/assets/sass/application.scss', 'utf8')
  const updatedFile = fs.readFileSync('./kit/assets/sass/application.scss', 'utf8')
  let newOutput = originalFile.substr(originalFile.match(/\/\/ Add extra styles here/).index + 96)

  // Write out contents
  fs.writeFile(__dirname + '/../app/assets/sass/application.scss', `${updatedFile.trim()}${newOutput}`, function(err){
    if(err){
      fs.writeFileSync(__dirname + '/../app/assets/sass/application.scss', originalFile)
      throw err
    }
    console.log(chalk.green(emoji.emojify(':floppy_disk:   App SCSS file successfully updated  :floppy_disk:')))
  })

}

mergeConfig();
mergeApplicationSCSS();
