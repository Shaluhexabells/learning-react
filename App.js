import React from "react"
import ReactDOM from "react-dom/client"; 


/*
* Header
    - Logo
    - Navitems - along with cart
* Body 
    - Search
    - Restaurant cards
* Footer
    - Links
    - Address
    - Copyright
*
*/

const styleCard = {
	backgroundColor: "red"
}

    const heading = React.createElement("h1", { }, "Hello World!");
    console.log(heading);
    
    const parent = React.createElement("div", { className: "wrapper" }, [
        React.createElement("h1", { id:"parent" }, "This is H1 tag."),
        React.createElement("h2", { id:"parent" }, "This is H2 tag.")
    ]);

    const jsxHeading = <h1>Hello World!</h1>; //not pure javascript

    
    // Component
    const HeadingComponent2 = () => <h1>React Component in more simpler syntax</h1>
      // ****** Or *************
    const headingComponent = () => {
        return <div>
            {jsxHeading}
            <HeadingComponent2 />
            <h1 style={ styleCard }>React Component</h1>
        </div>
    }
  

    console.log("headingComponent " , headingComponent);

    console.log(jsxHeading);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(parent);

