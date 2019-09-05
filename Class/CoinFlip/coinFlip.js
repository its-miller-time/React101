
class CoinFlip extends React.Component{
    constructor(){
        super();//CALL SUPER B/C IT IS A CHILD OF REACT
        this.heads = "buffalo-nickel-heads.jpg"
        this.tails = "buffalo-nickel-tails.png"
        this.coin = [
            this.heads,
            this.tails
        ]
        //REACT CARES ABOUT STATE....A LOT. REACT IS SPECIAL
        this.state = {
            image: this.coin[0]
        }
        // this.flip
    }

    // flip(){
    //     let coinSide = Math.round(Math.random())
    //     this.setState({
    //         image: this.coin[coinSide]
    //     })
    // }

    flip = () => {
        let coinSide = Math.round(Math.random())
        this.setState({
            image: this.coin[coinSide]
        })
    }

    render(){
        //React events are mostly identical to DOM events
        //we attach them to the element and use camelCare
        //we hand them CODE
        return(
            <div className="coin-flip">
                <button className="waves-effect waves-light btn" onClick={this.flip}>Flip</button>
                <img src={this.state.image} />
            </div>
        )
    }
}

ReactDOM.render(
    <CoinFlip />,
    document.querySelector("#root")
)