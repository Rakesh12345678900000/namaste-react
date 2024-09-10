/**
 1  )  const heading = React.createElement("html element",{attribute is define here for eg ->> id:heading }, children)

 * 
 */

//  const heading = React.createElement("h1", { id: "heading" }, "Hello, how are you?");

//  // Getting the root DOM node and creating a root for React to render into
//  const root = ReactDOM.createRoot(document.getElementById('root'));
 
//  // Rendering the React element into the root
//  root.render(heading);


 

//2 )    now suppose we have to render nested html element


// const heading =React.createElement("div",{id:"parent"},
//      React.createElement("div",{id:"child"},
//         React.createElement("h1",{},"hellow from child component heading")
//      ))

//      const root = ReactDOM.createRoot(document.getElementById("root"))

//      root.render(heading)

// 3 ) if we have to make two sibling inside the child


const heading =React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       [React.createElement("h1",{},"hellow from child sibling 1 component heading"),React.createElement("h1",{},"hellow from child sibling 2 component heading")]
    ))

    const root = ReactDOM.createRoot(document.getElementById("root"))

    root.render(heading)
