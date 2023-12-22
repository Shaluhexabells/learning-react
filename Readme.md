

// *********************************************** Learning React **********************************************************
# Because we are dealing with browsers, we use ReactDOM

# npm is standard repository for all the packages. It's a package manager, it manages packages

npm init
npm install -D parcel // D is dev dependencies


# caret "^" and tilde "`"
# caret will help to keep the version updated - minor updates
	* It's okay to update minor versions instead of major versions.
	* Without these signs, it means we don't want any upgrade in version
# tilde ` will update the major versions autmomatically

# package-lock.js keeps the track of exact version. It basically locks the version

# integrity: "sha" hash helps to verify the version and dependencies on local and productions are same

# transitive dependendies: Depenedencies have their own dependencies

# ************** Git **********
#  git branch -M main : it basically creates a new brach as main, checkout to the same
#  git remote add origin : to setup our local to remote repository. Required to do it once when we create repository


//*************************  **********************//
Module: module attr in app.js




# Parcel
	- Dev Build
	- Local Server
	- HMR: Hot Module Replacement
	- File watching Algorithm - written in C++
	- Caching - Faster Builds
	- Image optimisation
	- Minification for production build
	- Bundling
	- Compress
	- Consistent Hashing
	- Code splitting
	- Differential Bundling
	- Support older browsers
	- Diagnostc
	- Error handling
	- HTTPS 
	- Tree shaking - remove unused code
	- Different dev and prod bundles

# Production builds take more time than the dev build
# Optimisation



- Parcel does the caching data, that's why it gives faster builds. 


# dev build: npx parcel index.html : it'll serve the page on local

# "main": "App.js", : in package.json: It tells that this is the entry point of the app
# prod build - npx parcel build index.html : But when we run this command, it get's conflicted as it says index.html is the entry point


# When run the dev-build, file get optimised under dist folder
	- So when we refresh the page, parcel uses dist and cache to reflect the changes in a few ms
# Now, when we will build for production, it will get built inside dist folder only



// ******************* Layout foundation ***************
    "start": "parcel index.html",
    "build": "parcel build index.html",

npm run start (shortcut npm start) - dev build - shortcut works for start only
npm run build - prod build


// ************** JSX
# JSX is not HTML in JS, it's html like syntax


# Javascript is any piece of code that javascript engine understands, but it doesn't understand jsx.
# JSX is not javascript code
# JS engine understand Ecmascript(pure javascript)
# JSX is noting but React element
# JSX is not react element, it's just a syntax


# the JSX code is being transpiled before it goes to the js engine. And these are being manages by parcel.
Parcel does not do it by own, but get it done through babel(js package).
Babel is already being installed by Parcel
Babel job is to basically transpile or convert the jsx code into react code


React.createElement => React Element - JS Object => rendered on to the DOM as HTML ELement

# JSX attr follows camelcase
# JSX Example:
	const jsxHeading = <h1>Hello World!</h1>;
# We need to wrap inside ( ) brackets if we want to add multiple line inside JSX

// ******************* React Components *******************
# Class based components
# Functional components


Functional components
	* A normal js function returning react component or a piece of JSX is a functional components
	* Arrow function
	* First letter should be capital, this is how react understands otherwise it'll give error

Examples:
    const headingComponent = () => {
        return <h1>React Component</h1>;
    }


// Difference between react element and react component
const heading = (<h2>H2 heading</h2>);

const Heading = () => (<h2>H2 heading</h2>); // component name in capitalize along with arrow function

    // ****** Or *************
    const headingComponent2 = () => <h1>React Component in more simpler syntax</h1>


// Render functional component
root.render(<Heading />);


// ********** what is component composition 
=> Component inside another component

    // Component composition example
    const HeadingComponent2 = () => <h1>React Component in more simpler syntax</h1>
      // ****** Or *************
    const headingComponent = () => {
        return <div>
            <HeadingComponent2 />
            <h1>React Component</h1>;
        </div> 
    }


// Functional component
# We can use normal function as well to create a component. But we will have add 'return' to it.

Example:
 const HeadingComponent4 = function(){
        return (<div>
            <HeadingComponent2 />
            <h1>React Component</h1>;
        </div> )
 }




// style in react component
1. style is being defined as JS object

const styleCard = {
	backgroundColor: "red"
}
<h1 style={ styleCard }>React Component</h1>

// **** inline CSS
<h1 style={{ backgroundColor: "red" }}>React Component</h1>

style attribute will accept javascript object, and js object is being wrapped inside { } braces





// ************* props **************
# props are normal argument to our functions, props values passed through components. Props are the properties that we pass in our components
# Whenever we want to pass dynamic data, we do it through props
# React will wrap everything into the props and will pass into the function

# console.log(props)
	- props is an object

# Any data passing through { } braces, it'll sanitise the data. It's cross site scripting. It helps to prevent the data from attacker.
# Example
	const jsxHeading = <h1>Hello World!</h1>;
	const headingComponent = () => {
        return <div>
            {jsxHeading}
            <HeadingComponent2 />
            <h1 style={ styleCard }>React Component</h1>
        </div>
    }


# COnventions for rendering component
	<Title />
	<Title></Title>
	<Title()> // This will be called as we call a normal javascript function, because component is just a javascript function

# The code readable, web app is faster because of JSX not react.

// ******************* Extensions *****************
1. Bracket pair colorizer:different color brackets 
2. Eslint: an open source project that helps you find and fix problems with your JavaScript code
3. Better Comments 


