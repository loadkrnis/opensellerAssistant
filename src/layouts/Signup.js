import React from 'react';
import Logo from "../assets/images/logo.svg";
import {Link} from "react-router-dom";
import HeaderHero from "../assets/images/header-hero.png";
import Shape from "../assets/images/services-shape.svg";
import Shape2 from "../assets/images/services-shape-2.svg";
import Shape3 from "../assets/images/services-shape-3.svg";



export default function Signup()
{
    return (
        <header className="header-area">
            <div className="navbar-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navbar navbar-expand-lg">
                                <img src={Logo} alt="Logo" />
                            </div>
                            {/* navbar */}
                        </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </div>
            {/* navbar area */}
            <div id="home" className="header-hero bg_cover"
                 style={{backgroundImage: 'url(../assets/images/banner-bg.svg)'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="header-hero-content text-center">

                            </div>
                            {/* header hero content */}
                        </div>
                    </div>
                    <div>
                        <div className="single-services text-center mt-30 wow fadeIn">
                            <div className="services-icon">
                                <img className="shape" src={Shape} alt="shape" />
                                <img className="shape-1" src={Shape2} alt="shape" />
                                <i className="lni-emoji-suspect" />
                            </div>
                            <form className="services-content mt-30">
                                <h4 className="services-title"><a href="#">회원가입 폼</a></h4>

                                <div className="m-5">
                                <p className="text" style={{display:'inline'}}>이메일 : </p>
                                    <input className="" type="text" placeholder="abc@abc.com" />
                                </div>
                                <div className="m-5">
                                <p className="text" style={{display:'inline'}}>비밀번호 : </p>
                                    <input className="" type="password" />
                                </div>
                                <div className="m-5">
                                <p className="text" style={{display:'inline'}}>비밀번호 확인 : </p>
                                    <input className="" type="password" />
                                </div>
                                <input className="w-25 shadow " type="button" value="가입하기" />
                            </form>
                        </div> {/* single services */}
                    </div>
                </div>
                {/* container */}
                <div id="particles-1" className="particles"/>
            </div>
            {/* header hero */}
        </header>
    );
}