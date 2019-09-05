ReactDOM.render(
    <div className="container">
        <div className="row">
            <Card instructor={data[0]} />
            <Card instructor={data[1]} />
            <Card instructor={data[2]} />
            <Card instructor={data[3]} />
        </div>
    </div>,
    document.querySelector('#root')
)