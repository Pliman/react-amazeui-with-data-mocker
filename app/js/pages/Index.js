'use strict';

var React = require('react');
var AMR = require('amazeui-react');

var Index = React.createClass({
  render: function() {
    return (
      <div className="ask-banner">
        <AMR.Container>
          <h1>Hello World!</h1>
          <h2>欢迎使用 Amaze UI React 入门套件。</h2>
        </AMR.Container>
      </div>
    );
  }
});

module.exports = Index;
