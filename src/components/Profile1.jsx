import React, { useContext, Component, createRef } from "react";
import getuserinfo from "../context/auth/getuserinfo";
import Notification from "./Notification";
import "../css/Profile.css";
import authContext from "../context/auth/authContext";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { AiOutlinePoweroff } from "react-icons/ai";


export default class Profile1 extends Component {
    static contextType = authContext;

    constructor(props) {
        super(props);
        this.state = {
            fullname: 0,
            email: 0,
            username: 0,
            phone: 0,
            dataSet: 0,
            startEff: 0,
            user: 0,
            notiMessage: "",
            notiType: "succeess",
            enroll : false
        };

        this.cartRef = createRef();
        this.cartRef1 = createRef();
    }

    // Similar to componentDidMount and componentDidUpdate:
    componentDidMount() {
        if (this.context.loggedInUser) {
            const resp = getuserinfo();
            
            resp.then((res) => {
                if (res) {
                    this.setState({ fullname: res.fullname });
                    this.setState({ email: res.email });
                    this.setState({ username: res.email.split("@")[0] });
                    this.setState({ phone: res.phone });
                    this.setState({enroll:res.enroll });
                }
                this.setState({ user: this.context.loggedInUser });
            });
        }
    }

    handleMouseOnCart = (e) => {

        this.cartRef.current.className += " cart-zoom";
    };

    handleMouseLeave = (e) => {
        this.cartRef.current.className = "cart-1 ";
    };

    handleMouseOnCart1 = (e) => {
        this.cartRef1.current.className += " cart-zoom cart-zoom-1";
    };

    handleMouseLeave1 = (e) => {
        this.cartRef1.current.className = "cart-1";
    };

    handleGetNotes = (e) =>{
        this.setState({notiType:'success',notiMessage:'Get After Competition !'});
    }

    render() {
        if (this.context.loggedInUser) {
            return (
                <div>
                    <Notification
                        type={this.state.notiType}
                        message={this.state.notiMessage}
                    />

                    {/* <div className="top" ref={topCart}>
                <div className="cart-1">
                    <h2 className="cart-head">Coding Competition</h2>
                    <img src="/images/event-cart-img.png" alt="" />
                    <button>Enroll Now</button>
                </div>
            </div> */}

                    <div className="maindivprofile">
                        <div className="profileinfo">
                            <div className="left">
                                <p>Name: {this.state.fullname}</p>
                                <p>Email Address: {this.state.email}</p>
                            </div>
                            <div className="right">
                                <p>Username: {this.state.username}</p>
                                <p>Phone No: {this.state.phone}</p>
                            </div>
                            {/* <button className="editbtn"> */}
                                <Link  to="/logout" className="editbtn">Logout</Link>
                            {/* </button> */}
                        </div>

                        <div className="reward">
                            <h3>REWARD</h3>

                            <div className="reward-div" data-aos="fade-left">
                                <div
                                    className="cart-1"
                                    ref={this.cartRef}
                                    onMouseEnter={this.handleMouseOnCart}
                                    onMouseLeave={this.handleMouseLeave}
                                    
                                    >
                                    <img
                                        src="/images/reward-cart-img.png"
                                        alt="rewarad by codes clever"
                                     data-aos="fade-left"/>
                                    <h2 className="cart-head">
                                        Handwritten Notes
                                    </h2>
                                    <p>
                                        Get Now Python Handwritten Notes By
                                        Codes Clever !
                                    </p>
                                    <button className="getBtn" onClick={this.handleGetNotes}>Get Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="event" data-aos="fade-left">
                            <h3>EVENT</h3>
                            <div className="event-div">
                                <div
                                    className="cart-1"
                                    ref={this.cartRef1}
                                    onMouseEnter={this.handleMouseOnCart1}
                                    onMouseLeave={this.handleMouseLeave1}
                                    
                                    >
                                    <img
                                        src="/images/event-cart-img.png"
                                        alt=""
                                    />
                                    <h2 className="cart-head">
                                        Coding Competition
                                    </h2>
                                    <p>
                                        Enroll Now And Get Surprising Cash Prize
                                        And Beautiful Gifts !{" "}
                                    </p>
                                    {this.state.enroll && <button>Enrolled</button>}
                                    {!this.state.enroll && <button> <Link to="/payment" style={{color:'blue'}}> Enroll Now </Link></button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } 
        else {
            return(
                <Logout/>
            )
        }
    }
}
