import "./App.css";
import Navbar from "./components/Navbar";
import Maindiv from "./components/Maindiv";
// import Subdiv from "./components/subdiv";
import Leaderbord from "./components/Leaderbord";
import Footer from "./components/Footer";
import About from "./components/About";
import Notification from "./components/Notification";
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Signup from "./components/Signup";
import Testing from "./components/Testing";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Reward from "./components/Reward";
import Cancel from "./components/Cancel";
import Shipping from "./components/Shipping";
import authContext from "./context/auth/authContext";
import AuthState from "./context/auth/AuthState";
import DiwaliBg from "./components/DiwaliBg";
import Payment from "./components/Payment";
import Logout from "./components/Logout";
import Tnc from "./components/Tnc";
import Profile1 from "./components/Profile1";
import Forgotpassword from "./components/Forgotpassword";
import Savepromotoken from "./components/Savepromotoken";
import Privacy from "./components/Privacy";
import Contact from "./components/Contact";
import Influence from "./components/Influence";
import Thankyou from "./components/Thankyou";
import Saveqna from "./components/Saveqna";
import Startexam from "./components/Startexam";
import Exam from "./components/Exam";
import Updateboard from "./components/Updateboard";

// import { webpack } from "webpack";
// import webpack from './webpack.config';

function App() {
    const context = useContext(authContext);

    const { loggedInUser } = context;
    const { paramsToken } = useParams();

    useEffect(() => {
        AOS.init({ duration: 1000 });
        // console.log("frm app", loggedInUser);
    }, []);

    // const [reloadNav, setReloadNav] = useState(loggedInUser);

    return (
        <>
            <BrowserRouter>
                <Navbar />
                {/* <Navbar login={user}/> */}

                <div
                    className="cont"
                    style={{
                        margin: "50px 0 0 0",
                        background: "rgba(0 0 0 0)",
                    }}></div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {/* <Subdiv />  */}
                                {/* <Notification/> */}
                                <DiwaliBg />
                                <Maindiv />
                                <Reward />
                                <Tnc home={true} />
                            </>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <>
                                <Contact />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <About />
                            </>
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            <>
                                <Login />
                            </>
                        }
                    />

                    <Route
                        path="/leaderbord"
                        element={
                            <>
                                <Leaderbord />
                            </>
                        }
                    />

                    <Route
                        path="/signin"
                        element={
                            <>
                                <Signup />
                            </>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <>
                                <Profile1 />
                            </>
                        }
                    />
                    <Route
                        path="/payment"
                        element={
                            <>
                                <Payment />
                            </>
                        }
                    />
                    <Route
                        path="/logout"
                        element={
                            <>
                                <Logout />
                            </>
                        }
                    />

                    <Route
                        path="/tnc"
                        element={
                            <>
                                <Tnc />
                                <Privacy />
                            </>
                        }
                    />
                    <Route
                        path="cancel"
                        element={
                            <>
                                <Cancel />
                            </>
                        }
                    />
                    <Route
                        path="/forgotpassword"
                        element={
                            <>
                                <Forgotpassword />
                            </>
                        }
                    />

                    <Route
                        path="/register"
                        element={
                            <>
                                <Savepromotoken />
                            </>
                        }
                    />
                    <Route
                        path="/register/:paramToken"
                        element={
                            <>
                                <Savepromotoken />
                            </>
                        }
                    />

                    <Route
                        path="/testing"
                        element={
                            <>
                                <Profile1 />
                            </>
                        }
                    />
                    <Route
                        path="/privacy-policy"
                        element={
                            <>
                                <Privacy />
                            </>
                        }
                    />
                    <Route
                        path="/shipping"
                        element={
                            <>
                                <Shipping />
                            </>
                        }
                    />

                    <Route
                        path="/thankyou"
                        element={
                            <>
                                <Thankyou />
                            </>
                        }
                    />

                    <Route
                        path="/startexam"
                        element={
                            <>
                                <Startexam />
                            </>
                        }
                    />

                    <Route
                        path="/saveqna"
                        element={
                            <>
                                <Saveqna />
                            </>
                        }
                    />

                    <Route
                        path="/exam"
                        element={
                            <>
                                <Exam />
                            </>
                        }
                    />
                    <Route
                        path="/exam/:param"
                        element={
                            <>
                                <Exam />
                            </>
                        }
                    />

                    <Route
                        path="/liveupdate"
                        element={
                            <>
                                <Updateboard />
                            </>
                        }
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
