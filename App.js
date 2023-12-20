    const heading = React.createElement("h1", { }, "Hello World!");
   
    
    const parent = React.createElement("div", { class: "wrapper" }, [
        React.createElement("h1", { id:"parent" }, "This is H1 tag."),
        React.createElement("h2", { id:"parent" }, "This is H2 tag.")
    ]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(parent);

