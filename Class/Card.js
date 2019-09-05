
class Card extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="col s4">
                <div className="card hoverable medium">
                    <div className="card-image">
                        <img src={this.props.data.image} />
                    </div>
                    <div className="card-content">
                        <p>{this.props.data.course}</p>
                        <p>{this.props.data.instructor}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">${saleOn ? 9.99 : 59.99}</a>
                    </div>
                </div>
            </div> 
        )
    }
}