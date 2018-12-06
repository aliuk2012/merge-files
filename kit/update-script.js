const merge = require('merge')
const originalFile = require('../app/config.js')
const updatedFile = require('./config/config.js')
const mergedJSON = merge(updatedFile, originalFile )
const configGuidance = require('./config/config-help-text.js')
const chalk = require('chalk')
const emoji = require('node-emoji')
let fs = require('fs')
const oldConfig = fs.readFileSync('./app/config.js')
let output = ''

function mergeConfig(){
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


mergeConfig();
