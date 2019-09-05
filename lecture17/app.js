let cards = data.map((course,i)=>{
    return(<Card key={i} data={course} />)
})

ReactDOM.render(
    <div className="container">
        <div className="row">
            {cards}
        </div>
    </div>,
    document.querySelector('#root')
)
