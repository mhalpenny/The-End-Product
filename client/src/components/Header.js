import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        super();
        // this.price = props.price;
        this.state = {
            user: props.initialUser,
            price: props.initialPrice
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000)
    }

    updateUser() {
        this.setState({
            user: this.initialUser
        });
    }

    updatePrice() {
        this.setState({
            price: this.initialPrice
        });
    }

    render(){
        return (
            <div id='header'>
                <div className="helloContainer">
                    <span id='headSpan' className='hidden'>
                        <h1 className="hello">{this.props.user}</h1>
                        <p id='headPrice'> <b class='dollar'>$</b>{this.props.price}</p>
                    </span>
                </div>    
            </div>
        )
    }
}

// Header.propTypes = {
//     user: React.propTypes.string
// }

// export default Header;