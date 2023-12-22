************** Higher Order Functions ***************
A function that takes another function as an argument or returns a function from it is known as higher order functions
# push() : The push() method adds new items to the end of an array.
# A function which is passed inside higher order function is a callback function.
# This is possible only because these are first class function.

********** example
const radius = [3,5,7,9];

const calculateArea = function(radius){
    const output = [];
    for (let i=0; i < radius.length; i++){
        output.push( Math.PI * radius[i] * radius[i]);
    }
    return output;
    
}
console.log(calculateArea(radius));

const calculateCircumference = function(radius){
    const output = [];
    for (let i=0; i < radius.length; i++){
        output.push(2 * Math.PI * radius[i] * radius[i]);
    }
    return output;
    
}
console.log(calculateCircumference(radius));

const calculateDiameter = function(radius){
    const output = [];
    for (let i=0; i < radius.length; i++){
        output.push(2 * radius[i]);
    }
    return output;
    
}
console.log(calculateDiameter(radius));

# Now instead of writing repeatative functions, we can abstract the logics out for them
# We will pass logic and radius both as argument



**************************** Map, filter(), reduce() *************************
arr.these3(logic==functions)

filter() = Filter() basically filters the array. It'll filter as per logic passed
const arr = [1, 2, 3, 4, 5, 6, 7];

function isOdd(x){
    return x % 2;
}

function isEven(x){
    return x % 2 === 0;
}

const output = arr.filter(isEven);
console.log(output);




Reduce() = Array.reduce() takes all the elements from the array and come out with a single value.
//********* sum and max using reduce() ************
const output1 = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0);



const output2 = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);

console.log(output1, output2);
# reduce() takes accumulator and current values = reduce(acc, curr);



/********* map & filter for array objects
const users = [
    {firstName: "Shalu", lastName: "Shah", age: 26},
    {firstName: "Xyz", lastName: "wer", age: 75},
    {firstName: "abc", lastName: "def", age: 43},
    {firstName: "pqr", lastName: "stu", age: 26},
];

// let fullName = users.map(x => x.firstName + " " + x.lastName);
// console.log(fullName);


let maxAge = users.filter(x => x.age < 30).map(x => x.firstName);
console.log(maxAge);
'




// ****************************************************************** Learning React **********************************************************************************
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
	* First bracket { } - there's a price of some javascript
	* Second bracket {{ }} - there's javascript object





// ************* props **************
# props are normal argument to our functions, props values passed through components. Props are the properties that we pass in our components
# Whenever we want to pass dynamic data, we do it through props
# React will wrap everything into the props and will pass into the function

# console.log(props)
	- props is an object


# ********* Destructuring *********************
	* React will wraping inside object and passing to that function
	* Example
	const RestaurantCards = ({name, location, rating, eta, price}) => {

    // react is wraping all these inside props
    // const restaurantCards = {name, location, rating, eta, price} = props; // and here we have
    return (
    return (
        <div className="res-cards">
            <div className="thumbnail">
                <img src="https://b.zmtcdn.com/data/pictures/chains/6/18384116/3973d350a93af15c5d302627bf10b4ab.jpg?fit=around|960:500&crop=960:500;*,*" 
                alt="restaurant cover"/>
            </div>
            <div className="details">
                <h3 className="res-name">{name}</h3>
                <div className="location">{location}</div>
                <div className="flex">
                    <div className="rating">{rating}</div>
                    <div className="eta">{eta}</div>
                    <div className="price">{price}</div>
                </div>
                <div className="discount">
                    10% Off | Use code SPECIAL10
                </div>
            </div>
        </div>
    )
}

// Further destructuring
	resData?.data //"?" - this is optional chaining

//********* Optional Chaining *********
	- accesses an object's property or calls a function


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


// *********** Check from where the data is coming
	* Go the the network tab
	* Select Fetch/XHR
	* Preview


// (Interview Question) - Config Driven UI: All the UIs driven by config. 
	* Controlling the UI (how the UI will look like) by using the data(config) - comes from backedn api
	* Example:
		- Swiggy can have carousel with different offers. So for different location it'll show different offers, and these are being controlled by api (config data)


// API 
	* Api that we will be using is a list of objects. Each object will denote to the restaurant

	* const resObj = {
		
	} 
	This we define for a single object.
	Rendering: resObj.data.name

	* If it's a array of object:
		* const resObj = [{
			
		},
		{ 
		}]
		This we define for array of objects.
		Rendering: resObj[0].data.name 		// will be called through index


// Array: to display array items separated with commas: {restData[0].data.cuisines.join(", ")}


// Run the cards in loop, we will use map
	* {restaurantList.map((restaurant) => (<RestaurantCards restData={restaurant}/> ))}
	* Here we are looping restaurantList and for each restaurant, we are returning a piece of jsx

// ******************* Extensions *****************
1. Bracket pair colorizer:different color brackets 
2. Eslint: an open source project that helps you find and fix problems with your JavaScript code
3. Better Comments 
4. JSON Viewer - Chrome extension


