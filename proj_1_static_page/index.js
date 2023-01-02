function Page() {
    return(
    <div>
        <img src="v1013-e-0002.jpg" width="90"></img>
        <h1>Fun Facts About Vikki Wong</h1>
        <ul>
            <li>I was born in Hong Kong in 2000</li>
            <li>I really like to eat Chinese Food</li>
            <li>I have played the piano since I was 5</li>
            <li>I am trying my best to learn React before break ends</li>
            <li>I am very sensitive to caffeine</li>
        </ul>
        
    </div>
)

}

//react 18 uses createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);