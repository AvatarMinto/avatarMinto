import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import MainSection from "../components/hero";
import GetStarted from "../components/getStarted";
import Avatars from "../components/avatars";
const Home = () => {
    return (
        <>
            <NavBar />
            <MainSection/>
            <Avatars/>
            <GetStarted/>
            <Footer/>
        </>
    )
}

export default Home