'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var AMR = require('amazeui-react');
var Topbar = AMR.Topbar;
var Nav = AMR.Nav;
var CollapsibleNav = AMR.CollapsibleNav;
var Container = AMR.Container;

var RouteLink = require('./components/RouteLink');
var SiteFooter = require('./components/SiteFooter');

var App = React.createClass({
  render: function() {
    return (
      <div className="ask-page">
        <Topbar
          className="ask-header"
          brand="Amaze UI"
          brandLink="/"
          inverse>
          <CollapsibleNav>
            <Nav topbar>
              <RouteLink to="page1">页面 1</RouteLink>
              <RouteLink to="page2">页面 2</RouteLink>
            </Nav>
          </CollapsibleNav>
        </Topbar>
        <main className="ask-main">
          <RouteHandler />
        </main>
        <SiteFooter />
      </div>
    );
  }
});

// Pages
var Index = require('./pages/Index');
var Page1 = require('./pages/Page1');
var Page2 = require('./pages/Page2');

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="index" handler={Index}/>
    <Route name='page1' handler={Page1}/>
    <Route name='page2' handler={Page2}/>
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  Router.run(routes,
    function(Handler) {
      React.render(<Handler />, document.body);
    });
});
