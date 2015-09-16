'use strict';

var React = require('react');
var AMR = require('amazeui-react');

var Page1 = React.createClass({
  render: function() {
    return (
      <AMR.Container className="am-padding-vertical-lg">
        <h2>页面 1</h2>
        <p>页面内容</p>
      </AMR.Container>
    );
  }
});

module.exports = Page1;
