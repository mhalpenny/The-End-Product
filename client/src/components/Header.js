import React, {UseContext} from 'react';
import UserContext from '../assets/js/UserContext'

function Header(props) {
    // const msg = useContext(UserContext);
  return (
    <div id='header'>
        <div className="helloContainer">
            <span id='headSpan' className='hidden'>
                <img id='userImg' className='icon' src='../assets/imgs/user.png' alt=''/><h1 className="hello">Hello, {props.user}!</h1>
            <p id='headPrice'> <b class='dollar'>$</b> 0.12</p>
            </span>
        </div>    
    </div>
  )
}

// <img id='dollarImg' className='icon' src='../assets/imgs/dollar.png' alt=''/>

// export class Header extends React.Component {
//     constructor(props) {
//         super();
//         // this.price = props.price;
//         this.state = {
//             user: props.initialUser,
//             price: props.initialPrice
//         };
//         setTimeout(() => {
//             this.setState({
//                 status: 1
//             });
//         }, 3000)
//     }

//     updateUser() {
//         this.setState({
//             user: this.initialUser
//         });
//     }

//     updatePrice() {
//         this.setState({
//             price: this.initialPrice
//         });
//     }

//     render(){
//         return (
//             <div id='header'>
//                 <div className="helloContainer">
//                     <span id='headSpan' className='hidden'>
//                         <h1 className="hello">{this.props.user}</h1>
//                         <p id='headPrice'> <b class='dollar'>$</b>{this.props.price}</p>
//                     </span>
//                 </div>    
//             </div>
//         )
//     }
// }

// Header.propTypes = {
//     user: React.propTypes.string
// }

export default Header;