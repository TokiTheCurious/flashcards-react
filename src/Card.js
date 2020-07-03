import React from 'react';
import './Card.css';

    class Card extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isFront: true
        }
    }

    flipCard = () => {
        this.setState({isFront: !this.state.isFront})
    }



    render() {
        return (
        <div onClick={this.flipCard} className='flashcard'>
            {this.state.isFront ? this.props.front : this.props.back}
        </div>
        )
    }

}



export default Card