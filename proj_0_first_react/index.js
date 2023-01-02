//render stuff like html
// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));

function MainContent() {
    return(
        <h1>I'm learning React!</h1>
    )
}

//react 18 uses createRoot

ReactDOM.createRoot(document.getElementById("root")).render(<MainContent />);


// ReactDOM.render(
//                 <div>    
//                     <ul>
//                         <li>item 1</li>
//                         <li>item 2</li>
//                     </ul>
//                     <MainContent />
//                 </div>,
//                 document.getElementById("root"));