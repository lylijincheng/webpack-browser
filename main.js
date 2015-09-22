var $ = require('jquery');
var _ = require('underscore');

var sdk = require('./common.js');

require('normalize.css');
require('./common.css');
require('./style.css');

sdk.init();

$('body').append(_.template('<h1 class="title"><%= title %></h1>')({
  title: 'webpack example!'
}));