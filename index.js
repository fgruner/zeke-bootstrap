
exports.attach = function() {
  this.helpers['topbar'] = function(t) {
    return div('#navbar.navbar.navbar-fixed-top', t);
  };
  this.helpers['navbar_inner'] = function(t) {
    return div('.navbar-inner', t);
  };
  this.helpers['container'] = function(t) {
    return div('.container', t);
  };
  this.helpers['collaspeBtn'] = require('./collaspe_btn');
  this.helpers['brandLink'] = require('./brand_link');
  this.helpers['pageLink'] = require('./page_link');
  return this.helpers['dropdownMenu'] = require('./dropdown_menu');
};