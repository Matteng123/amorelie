var config = require('../config')
var compact = require('lodash/compact')

// Grouped by what can run in parallel
var assetTasks = ['fonts', 'iconFont', 'images', 'maps', 'panos', 'skin', 'downloads']
var codeTasks = ['pug', 'html', 'css', 'js', 'htdocs']


module.exports = function(env) {
  var jsTasks = {
    watch: 'webpack:watch',
    development: 'webpack:watch',
    production: 'webpack:production'
  }

  var matchFilter = function(task) {
    if(config.tasks[task]) {
      if(task === 'js') {
        task = jsTasks[env] || jsTask.watch
      }
      return task
    }
  }

  return {
    assetTasks: compact(assetTasks.map(matchFilter)),
    codeTasks: compact(codeTasks.map(matchFilter))
  }
}
