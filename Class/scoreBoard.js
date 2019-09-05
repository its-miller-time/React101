function Counter(props){
    return(
        <div className="counter">
            <div className="buttons">
                <button className="minus waves-effect waves-light btn" >-</button>
                <button className="plus waves-effect waves-light btn">+</button>
            </div>
            <div className="team-score">0</div>
        </div>   
    )
}

function Team(props){
    return(
        <div className="team">
            <div className="team-name">{props.name}</div>
            <Counter />
            <Counter />                    
        </div>
    )
}


function App(props){
    return(
        <div className="container">
            <div className="row">
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
            </div>
            <div className="teams">
                <Team name="Bears" />
                <Team name="Packers" />
            </div>
            
        </div>
    )
}

ReactDOM.render(
    <App title="Opening NFL Game"/>,
    document.querySelector("#root")
)