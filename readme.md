# Building Application with React and Redux in ES6
>This article is the second part of the Building Application with React and Redux in ES6 blog series.  If you would like to setup Dev Environment for React and Redux in ES6, I strongly recommend you to read the first article: [Building Application with React and Redux in ES6 Part 1 - Setup Dev Environment](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment).


## React Component and Setup React Router - Part 2

In the previous article, we setup the dev environment for React and Redux in ES6. Now it's time to explore React Component and React Router.

### React  - Is React a framework?
**In short: no, it's not.**
React is the "Declarative View" in the application. React is just one of many ways to build components, but React contains a number of innovations that set if apart from other frameworks/libraries like Angular, Ember. Those innovation includes [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and the [Virtual DOM](https://facebook.github.io/react/docs/working-with-the-browser.html#the-virtual-dom). As I said React is "Declarative views" which make your code more predictable and easier to debug.

React is a web view in JavaScript that's designed to take application state and allow you to write code that takes input and return Virtual DOM, which is then  passed into React Reconciling and Rendering Engine and then generates from that a set of optimized DOM operations that performed on browsers to make it real DOM.

**Why React?**
So why should you consider React over all other frameworks/components options are available out there?

* **Fast -** React is know for being extremely fast and responsive . React can scale to large and complex UIs because it very efficients about how and when if manipulates the DOM. React is designed to help eliminates layout thrash by using a Virtual DOM behind the scenes.
* **Composable -** React offers a really simple model for composing the components. You can easily nest components within other components and pass data down to child components. React supports recombinant components that can be selected and assembled in various combinations to satisfy specific user requirements.
* **Pluggable -** React is only a view layer so it can easily integrate with other technologies or existing applications.
* **Isomorphice Friendly -** React components are support isomorphic it mean they can be rendered on both the client and the server side. React doesn't need the DOM to be able to render it components. Isomorphic rendering can increase loading performance, avoid repeating code on the client and the server.
* **Simple -** It's quite simple, fun to learn and understand.
* **React is proven -** it was created by [Facebook](https://facebook.com) and it's used extensively on [facebook.com](https://facebook.com), which is one of the most popular and highly trafficked websites in the world.

React is embraced well-know companies like Yahoo, Netflix, Dropbox, Paypal, Instagram ect.


### React vs MVC
MVC model is widely used to build an applications. [ASP.NET MCV](http://www.asp.net/mvc) utilize this pattern. Client side frameworks like angular, ember, knockout uses  `MV-ish` pattern. React works differently it doesn't dictate developer how to handle data flow, routing or other aspect of the application. React is a simple composable component library. React provide power-full and flexible solution to [CBD](component-based development).

If we compare with MVC model React is typically `V` or sometime act as `CV` Controller View to recombinant components.   
   
  
### [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
JSX is a way to easily represent HTML inside of your JavaScript. React offers a XML-like syntax called JSX for handle markup it almost identical to HTML.

    var myComponent = <div className="foo" />;
    ReactDOM.render(myComponent, document.getElementById('app'));

JSX uses the upper vs. lower case convention to distinguish between local component classes and HTML tags.

**Why JSX**
JSX is optional if you prefer, you can also use plain JavaScript to declare markup in the components, but most people prefer JSX because it easier to write, and read and understand. JSX compiled down to Javascript by calling `#React.createElement`
  
    var Nav;
    var app = <Nav color="blue" />;
    var app = React.createElement(Nav, {color:"blue"});
  

**JSX is  Easy to Debug**
As we know javascript offer clear error messages in application but what about HTML? Suppose when you make a typo in HTML, it will silently fail and browsers will simple ignore the problem as a developer you typically have no idea what line just failed or break the application. 

JSX is just JavaScript so it mean when you make a typo the JSX it won't even compile. JSX will throw an error and reference the line number width details message about the error. That make JSX or React application very easy to debug and a huge win against other frameworks.  Someone said "Fail fast, fail loudly" and JSX does the same.


### [Virtual DOM](https://facebook.github.io/react/docs/working-with-the-browser.html#the-virtual-dom)
> React is a web view in JavaScript that's designed to take application state and allow you to write code that takes input and return Virtual DOM, which is then  passed into Reacts' Reconciling and Rendering Engine and then generates from that a set of optimized DOM operations that performed on browsers to make it real DOM.

DOM is dangerously unperformant for developer to work with directly, so React create that abstraction layer over DOM because called **Virtual DOM** to work on:

* Virtual DOM is a pure JavaScript intermediate representation of DOM
* When your app state changes, your code return a new Virtual DOM
* React diffs the new Virtual DOM against the previous one
* React generates performance optimized DOM operations that will then go to the browser

React can do thing like batching reads and writes which results in fewer reflows  and it can even generate a big blocks of inner HTML for maximum speed. This approach avoids layout thrashing, it mean browser doesn't need to recalculate the position of everything when a DOM element changes. Virual DOM concept is more appropriate where more and more people are using mobile devices.

Virtual DOM isn't just about the performance, Reach also offers synthetic Events and render on the server where no DOM exits at all, it mean React can be used for implementing components in native applications using react native. 

To get more about how Virtual DOM diff algorithm works follows the link [Virtual DOM diff algorithm](https://facebook.github.io/react/docs/reconciliation.html)

  
### React Components 
In react we create application with React components, React components works similar like javascript function, in function when you call it typical return a value, React components will returns with rendered DOM. If you pass different data it will return new rendered DOM

    export default class HomePage extends React.Component {
        render(){
            return (
                <div className="jumbotron">
                    <h1>Hello World</h1>
                </div>
            );
        }
    }

     
React Components held data into `props` properties and `state` 

* **Props -** Look like HTML attribute, it allow you to pass data down to child components. Props are immutable `this.props.username`. React offer  you set default properties a via `getDefaultProps` function.
* **State -** Is mutable state and typically use on the top level components. `this.state.username`.  React offer option to define a `getInitialState` function to set iniat state for the componenet.


**React Components Life Cycle**
React component has multiple lifecycle methods, it very similar concept what ASP.NET offers, each react component has a lifecycle and provide list of functions that allow you to hook into to utilize them.

* **componentWillMount** - *__When__*: Before initial render. *__Best User__*: Good sport to set initial state.
* **componentDidMount** - *__When__*: After initial render. *__Best User__*: Access DOM. AJAX request, Integrate with other 3rd party frameworks.
* **componentWillReceiveProps** -  *When*: When receiving new props/properties has changes.  *__Best for__*: Set state before next render.
* **shouldComponentUpdate** -  *__When__*: Before render when new props or state are being received. *__Best for__*:  Performance, if props and/or state changes but we don't need re-render component, if this is the case return false this function to avoid rendering.
* **componentWillUpdate** -  *__When__*: Immediately before rendering when new props or state are being received. *__Best for__*: Usefull for prepare for an update.
* **componentDidUpdate** -  *__When__*: After  component's updates are flushed to the DOM. *__Best for__*: sefull to operate on the DOM after an update.
* **componentWillUnmount** -  *__When__*:Immediately before component is removed from the DOM. *__Best for__*: Best place for Cleanup any related resources.


### Component Composition
#### ES5 Class Component
```js
var HelloWord = React.createClass({
    render: function () {
        return (
        <h1>Hello World</h1>
        );
    }
});
```


#### ES5 Stateless Functional Component
Stateless components it typically a child component and don't hold any state, it receive data from parent component via props/properties.
```js
var HelloWord = function(props) {
    return (
            <h1>Hello World</h1>
    );
})
```

#### ES6 Class  Component
```js
const HelloWord =extends React.Component {
    render()(
         return <h1>Hello World</h1>;
    );
})
```

#### ES6 Stateless Functional Component
```js
const HelloWord = (props) => {
    return (
        <h1>Hello World</h1>
    );
})
```



### React Routes
Routing on application we will used React Router, it provide a simple, nested approach to routing it give ability to support complex UIs that are many layers deep. React Routes has been used at Facebook.com
 
**Route Configuration**
**Route** - You define a `Route` for each page in your application.
**DefaultRoute** - Your application landing page e.g. `/` or `index.html`
**NotFoundRoute** - Client-side 404 
**Redirect** - To use redirect to another route

Example Route Configuration for the Application
        
      import React from 'react';
      import {Route, IndexRoute} from 'react-router';
      import Layout from './app';
      import HomePage from './componenets/home';
      import AboutPage from './componenets/about';
      import ContactUs from './componenets/contact';
      
      export default (
          <Route path="/" component={Layout}>
              <IndexRoute component={HomePage} />
              <Route path ="about" component={AboutPage} />
              <Route path ="contact" component={ContactUs} />
          </Route>
      );

      
### Creating app foundation
Now we have explore the core concepts in React now lets build foundation for application we created in [Part-1](https://github.com/asimzsaeed/building-application-with-react-and-redux-in-es6-part1-setup-dev-environment). We will Create out application pages, Create layout to used those pages, Configure routing via React Routing and finally we will Setup navigation.

This will be a foundation we need, that serve out application and then we can enhance with Redex.

Let's create following pages in application.

**app.js** `./src/app.js`
   
    import React, {PropTypes} from 'react';
    import Navbar from './components/shared/navbar';
    
    class AppLayout extends React.Component {
        render(){
            return (
                <div className="container-fluid">
                    <Navbar/>
                    {this.props.children}
                </div>
            );
        }
    }
    
    AppLayout.PropTypes = {
        children: PropTypes.object.isRequired
    };
    
    
    export default AppLayout;


**routes.js** `./src/routes.js`
   
    import React from 'react';
    import {Route, IndexRoute} from 'react-router';
    import Layout from './app';
    import HomePage from './components/home';
    import AboutPage from './components/about';
    
    export default (
        <Route path="/" component={Layout}>
            <IndexRoute component={HomePage} />
            <Route path ="about" component={AboutPage} />
        </Route>
    );


**Home Component** `./src/components/home/index.js`

```js
import React  from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <h1>Hello World</h1>
                <p>Building Application with React and Redux in ES6.</p>
                <Link to="about" className="btn btn-primary btn-lg">About Us</Link>
            </div>
        );
    }
}
```


**About Component** `./src/components/about/index.js`

```js
import React  from 'react';

export default class AboutPage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <h1>About Us</h1>
                <p>This application used React and React router.</p>
            </div>
        );
    }
}

```



**Navbar Component** `./src/components/shared/navbar/index.js`

```js
import React, {PropTypes}  from 'react';
import {Link, IndexLink} from 'react-router';

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"> <IndexLink to="/" activeClassName="active">Home</IndexLink> </li>
                        <li> <Link to="/about" activeClassName="active">About</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
```


**Index.js** `./index.js` - update the index page

    import 'babel-polyfill';
    import React from 'react';
    import {render} from 'react-dom';
    import {Router, browserHistory} from 'react-router';
    import routes from './routes';
    import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    
    render(
        <Router history={browserHistory} routes={routes}/>,
        document.getElementById('app')
    );


Finally our foundation app is ready now open the console and type `npm start` to run your application. 


In next part we will explore Redux, Actions, Stores and Reducers and how integrate React with Redux
