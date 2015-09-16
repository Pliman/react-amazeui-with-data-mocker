'use strict';

var React = require('react');
var AMR = require('amazeui-react');
var year = new Date().getFullYear();

var SiteFooter = React.createClass({

  render: function() {
    return (
      <footer className="ask-footer">
        <AMR.Container>
          <p>© {year} AllMobilize, Inc. Licensed under MIT license.
            Developed with WebStorm.</p>
        </AMR.Container>
      </footer>
    );
  }
});

module.exports = SiteFooter;
