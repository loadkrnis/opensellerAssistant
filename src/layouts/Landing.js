import React, {useEffect, useContext} from "react";
import {Link} from "react-router-dom";

import "../assets/css/animate.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/slick.css";
import "../assets/css/LineIcons.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/default.css";
import "../assets/css/style.css";
import "../hooks/useScript";

import Logo from '../assets/images/logo.svg';
// import Logo2 from '../assets/images/logo-2.svg';
import HeaderHero from '../assets/images/header-hero.png';
import Auction from '../assets/images/auction.png';
import Coupang from '../assets/images/coupang.png';
import GMarket from '../assets/images/gmarket.png';
import WeMakePrice from '../assets/images/wemakeprice.png';
import Tmon from '../assets/images/tmon.png';
import Shape from '../assets/images/services-shape.svg';
import Shape1 from '../assets/images/services-shape-1.svg';
import Shape2 from '../assets/images/services-shape-2.svg';
import Shape3 from '../assets/images/services-shape-3.svg';
import About1 from '../assets/images/about1.svg';
import About2 from '../assets/images/about2.svg';
import About3 from '../assets/images/about3.svg';
import AboutShape1 from '../assets/images/about-shape-1.svg';
import AboutShape2 from '../assets/images/about-shape-2.svg';
import Dots from '../assets/images/dots.svg';
import Video from '../assets/images/video.png';
import Team1 from '../assets/images/team-1.png';
import Team2 from '../assets/images/team-2.png';
import Team3 from '../assets/images/team-3.png';
import TextimonialShape from "../assets/images/textimonial-shape.svg";
import Author1 from '../assets/images/author-1.png';
import Author2 from '../assets/images/author-2.png';
import Author3 from '../assets/images/author-3.png';
import Blog1 from '../assets/images/blog-1.jpg';
import Blog2 from '../assets/images/blog-2.jpg';
import Blog3 from '../assets/images/blog-3.jpg';

import {AccountContext} from "../stores/AccountStore";

function SignButton(props) {

    let class_name = "main-btn";
    let to = "";
    let innertext = "";
    let styleDisplay = "";

    if (props.displayType === "signup")
    {
        to = "/signup";
        innertext = "회원가입";
    }
    else if (props.displayType === "signin")
    {
        to = "/signin";
        innertext = "로그인";
    }

    if (props.isSignIn) {
        to = "/admin";
        innertext = "관리페이지";
        if (props.displayType === "signup")
        {
            styleDisplay = "none";
        }
    }
    return (
        <Link to={to} className={class_name} data-scroll-nav={0} style={{marginLeft:'30px', display:styleDisplay}}>{innertext}</Link>
    );
}
export default function Landing() {

    // eslint-disable-next-line no-unused-vars
    const {account, setAccount} = useContext(AccountContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function fadeOut(target) {
        let level = 1;
        let outTimer = null;
        outTimer = setInterval(() => {
            level = fadeOutAction(target, level, outTimer);
        }, 50);
    }
    function fadeOutAction(target, level, outTimer) {
        level = level - 0.1;
        changeOpacity(target, level);
        if (level < 0) {
            clearInterval(outTimer);
            target.style.display = 'none';
        }
        return level;
    }
    function changeOpacity(target, level) {
        var obj = target;
        obj.style.opacity = level;
        obj.style.MozOpacity = level;
        obj.KhtmlOpacity = level;
    }
    useEffect(()=>{
        let preloader = document.getElementsByClassName('preloader').item(0);
        setTimeout(() =>{
            fadeOut(preloader);
        }, 500);
    }, [fadeOut]);

    return (
        <>
            <div className="preloader">
                <div className="loader">
                    <div className="ytp-spinner">
                        <div className="ytp-spinner-container">
                            <div className="ytp-spinner-rotator">
                                <div className="ytp-spinner-left">
                                    <div className="ytp-spinner-circle"/>
                                </div>
                                <div className="ytp-spinner-right">
                                    <div className="ytp-spinner-circle"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className="header-area">
                <div className="navbar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    {/*<a className="navbar-brand" href="index.html">*/}
                                        <img src={Logo} alt="Logo" />
                                    {/*</a>*/}
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"/>
                                        <span className="toggler-icon"/>
                                        <span className="toggler-icon"/>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ml-auto">
                                            <li className="nav-item active">
                                                <a className="page-scroll" href="#home">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#features">Features</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#about">About</a>
                                            </li>
                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="page-scroll" href="#facts">Why</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="page-scroll" href="#team">Team</a>*/}
                                            {/*</li>*/}
                                            {/*<li className="nav-item">*/}
                                            {/*    <a className="page-scroll" href="#blog">Blog</a>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </div>
                                    {/* navbar collapse */}
                                    <div className="navbar-btn d-none d-sm-inline-block">
                                        {/*<Link className="main-btn" data-scroll-nav={0} to='/signup'>회원가입</Link>*/}
                                        <SignButton isSignIn={account.isLogin} displayType="signin" />
                                        <SignButton isSignIn={account.isLogin} displayType="signup" />
                                    </div>
                                </nav>
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
                                    <h3 className="header-sub-title wow fadeInUp" data-wow-duration="1.3s"
                                        data-wow-delay="0.2s">오픈마켓 판매자 솔루션</h3>
                                    <h2 className="header-title wow fadeInUp" data-wow-duration="1.3s"
                                        data-wow-delay="0.5s">OpenSeller Assistant</h2>
                                    <p className="text wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.8s">초보
                                        사장님부터 만렙 사장님까지!<br/>키냅스로 오픈마켓과 개인 쇼핑몰을 키우고<br/>상품 판매룰 극대화하는 마케팅 전략을 세울 수 있습니다.
                                    </p>
                                    <Link to="/signup" className="main-btn wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="1.1s">무료 체험하러 가기</Link>
                                </div>
                                {/* header hero content */}
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s"
                                     data-wow-delay="1.4s">
                                    <img src={HeaderHero} alt="hero" />
                                </div>
                                {/* header hero image */}
                            </div>
                        </div>
                        {/* row */}
                    </div>
                    {/* container */}
                    <div id="particles-1" className="particles"/>
                </div>
                {/* header hero */}
            </header>

            <div className="brand-area pt-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brand-logo d-flex align-items-center justify-content-center justify-content-md-between">
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <img src={Auction} alt="brand" />
                                </div> {/* single logo */}
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <img src={Coupang} alt="brand" />
                                </div> {/* single logo */}
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                    <img src={GMarket} alt="brand" />
                                </div> {/* single logo */}
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                    <img src={WeMakePrice} alt="brand" />
                                </div> {/* single logo */}
                                <div className="single-logo mt-30 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                    <img src={Tmon} alt="brand" />
                                </div> {/* single logo */}
                            </div> {/* brand logo */}
                        </div>
                    </div>   {/* row */}
                </div> {/* container */}
            </div>

            <section id="features" className="services-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center pb-40">
                                <div className="line m-auto" />
                                <h3 className="title">Clean and simple design, <span> Comes with everything you need to get started!</span></h3>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <div className="services-icon">
                                    <img className="shape" src={Shape} alt="shape" />
                                    <img className="shape-1" src={Shape1} alt="shape" />
                                    <i className="lni-baloon" />
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="/">Clean</a></h4>
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right" /></a>
                                </div>
                            </div> {/* single services */}
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="services-icon">
                                    <img className="shape" src={Shape} alt="shape" />
                                    <img className="shape-1" src={Shape2} alt="shape" />
                                    <i className="lni-cog" />
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="/">Robust</a></h4>
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right" /></a>
                                </div>
                            </div> {/* single services */}
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-services text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div className="services-icon">
                                    <img className="shape" src={Shape} alt="shape" />
                                    <img className="shape-1" src={Shape3} alt="shape" />
                                    <i className="lni-bolt-alt" />
                                </div>
                                <div className="services-content mt-30">
                                    <h4 className="services-title"><a href="/">Powerful</a></h4>
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right" /></a>
                                </div>
                            </div> {/* single services */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>

            {/*====== ABOUT PART START ======*/}
            <section id="about" className="about-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="section-title">
                                    <div className="line" />
                                    <h3 className="title">Quick &amp; Easy <span>to Use Bootstrap Template</span></h3>
                                </div> {/* section title */}
                                <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                                <a href="/" className="main-btn">Try it Free</a>
                            </div> {/* about content */}
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src={About1} alt="about" />
                            </div> {/* about image */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
                <div className="about-shape-1">
                    <img src={AboutShape1} alt="shape" />
                </div>
            </section>
            {/*====== ABOUT PART ENDS ======*/}
            {/*====== ABOUT PART START ======*/}
            <section className="about-area pt-70">
                <div className="about-shape-2">
                    <img src={AboutShape2} alt="shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-last">
                            <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="section-title">
                                    <div className="line" />
                                    <h3 className="title">Modern design <span> with Essential Features</span></h3>
                                </div> {/* section title */}
                                <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                                <a href="/" className="main-btn">Try it Free</a>
                            </div> {/* about content */}
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src={About2} alt="about" />
                            </div> {/* about image */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
            {/*====== ABOUT PART START ======*/}
            <section className="about-area pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content mt-50 wow fadeInLeftBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="section-title">
                                    <div className="line" />
                                    <h3 className="title"><span>Crafted for</span> SaaS, App and Software Landing Page</h3>
                                </div> {/* section title */}
                                <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                                <a href="/" className="main-btn">Try it Free</a>
                            </div> {/* about content */}
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image text-center mt-50 wow fadeInRightBig" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src={About3} alt="about" />
                            </div> {/* about image */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
                <div className="about-shape-1">
                    <img src={AboutShape1} alt="shape" />
                </div>
            </section>
            {/*====== ABOUT PART ENDS ======*/}
            {/*====== ABOUT PART ENDS ======*/}
            {/*====== VIDEO COUNTER PART START ======*/}
            <section id="facts" className="video-counter pt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="video-content mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img className="dots" src={Dots} alt="dots" />
                                <div className="video-wrapper">
                                    <div className="video-image">
                                        <img src={Video} alt="video" />
                                    </div>
                                    <div className="video-icon">
                                        <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" className="video-popup"><i className="lni-play" /></a>
                                    </div>
                                </div> {/* video wrapper */}
                            </div> {/* video content */}
                        </div>
                        <div className="col-lg-6">
                            <div className="counter-wrapper mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div className="counter-content">
                                    <div className="section-title">
                                        <div className="line" />
                                        <h3 className="title">Cool facts <span> this about app</span></h3>
                                    </div> {/* section title */}
                                    <p className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                </div> {/* counter content */}
                                <div className="row no-gutters">
                                    <div className="col-4">
                                        <div className="single-counter counter-color-1 d-flex align-items-center justify-content-center">
                                            <div className="counter-items text-center">
                                                <span className="count"><span className="counter">125</span>K</span>
                                                <p className="text">Downloads</p>
                                            </div>
                                        </div> {/* single counter */}
                                    </div>
                                    <div className="col-4">
                                        <div className="single-counter counter-color-2 d-flex align-items-center justify-content-center">
                                            <div className="counter-items text-center">
                                                <span className="count"><span className="counter">87</span>K</span>
                                                <p className="text">Active Users</p>
                                            </div>
                                        </div> {/* single counter */}
                                    </div>
                                    <div className="col-4">
                                        <div className="single-counter counter-color-3 d-flex align-items-center justify-content-center">
                                            <div className="counter-items text-center">
                                                <span className="count"><span className="counter">4.8</span></span>
                                                <p className="text">User Rating</p>
                                            </div>
                                        </div> {/* single counter */}
                                    </div>
                                </div> {/* row */}
                            </div> {/* counter wrapper */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
            {/*====== VIDEO COUNTER PART ENDS ======*/}
            {/*====== TEAM PART START ======*/}
            <section id="team" className="team-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center pb-30">
                                <div className="line m-auto" />
                                <h3 className="title"><span>Meet Our</span> Creative Team Members</h3>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <div className="team-image">
                                    <img src={Team1} alt="Team" />
                                    <div className="social">
                                        <ul>
                                            <li><a href="/"><i className="lni-facebook-filled" /></a></li>
                                            <li><a href="/"><i className="lni-twitter-filled" /></a></li>
                                            <li><a href="/"><i className="lni-instagram-filled" /></a></li>
                                            <li><a href="/"><i className="lni-linkedin-original" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h5 className="holder-name"><a href="/">Isabela Moreira</a></h5>
                                    <p className="text">Founder and CEO</p>
                                </div>
                            </div> {/* single team */}
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="team-image">
                                    <img src={Team2} alt="Team" />
                                    <div className="social">
                                        <ul>
                                            <li><a href="/"><i className="lni-facebook-filled" /></a></li>
                                            <li><a href="/"><i className="lni-twitter-filled" /></a></li>
                                            <li><a href="/"><i className="lni-instagram-filled" /></a></li>
                                            <li><a href="/"><i className="lni-linkedin-original" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h5 className="holder-name"><a href="/">Elon Musk</a></h5>
                                    <p className="text">Sr. Software Engineer</p>
                                </div>
                            </div> {/* single team */}
                        </div>
                        <div className="col-lg-4 col-md-7 col-sm-8">
                            <div className="single-team text-center mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div className="team-image">
                                    <img src={Team3} alt="Team" />
                                    <div className="social">
                                        <ul>
                                            <li><a href="/"><i className="lni-facebook-filled" /></a></li>
                                            <li><a href="/"><i className="lni-twitter-filled" /></a></li>
                                            <li><a href="/"><i className="lni-instagram-filled" /></a></li>
                                            <li><a href="/"><i className="lni-linkedin-original" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team-content">
                                    <h5 className="holder-name"><a href="/">Fiona Smith</a></h5>
                                    <p className="text">Business Development Manager</p>
                                </div>
                            </div> {/* single team */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
            {/*====== TEAM PART ENDS ======*/}
            {/*====== TESTIMONIAL PART START ======*/}
            <section id="testimonial" className="testimonial-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="section-title text-center pb-40">
                                <div className="line m-auto" />
                                <h3 className="title">Users sharing<span> their experience</span></h3>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row testimonial-active wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div className="col-lg-4">
                            <div className="single-testimonial">
                                <div className="testimonial-review d-flex align-items-center justify-content-between">
                                    <div className="quota">
                                        <i className="lni-quotation" />
                                    </div>
                                    <div className="star">
                                        <ul>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author-image">
                                        <img className="shape" src={TextimonialShape} alt="shape" />
                                        <img className="author" src={Author1} alt="author" />
                                    </div>
                                    <div className="author-content media-body">
                                        <h6 className="holder-name">Jenny Deo</h6>
                                        <p className="text">CEO, SpaceX</p>
                                    </div>
                                </div>
                            </div> {/* single testimonial */}
                        </div>
                        <div className="col-lg-4">
                            <div className="single-testimonial">
                                <div className="testimonial-review d-flex align-items-center justify-content-between">
                                    <div className="quota">
                                        <i className="lni-quotation" />
                                    </div>
                                    <div className="star">
                                        <ul>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author-image">
                                        <img className="shape" src={TextimonialShape} alt="shape" />
                                        <img className="author" src={Author2} alt="author" />
                                    </div>
                                    <div className="author-content media-body">
                                        <h6 className="holder-name">Marjin Otte</h6>
                                        <p className="text">UX Specialist, Yoast</p>
                                    </div>
                                </div>
                            </div> {/* single testimonial */}
                        </div>
                        <div className="col-lg-4">
                            <div className="single-testimonial">
                                <div className="testimonial-review d-flex align-items-center justify-content-between">
                                    <div className="quota">
                                        <i className="lni-quotation" />
                                    </div>
                                    <div className="star">
                                        <ul>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author-image">
                                        <img className="shape" src={TextimonialShape} alt="shape" />
                                        <img className="author" src={Author3} alt="author" />
                                    </div>
                                    <div className="author-content media-body">
                                        <h6 className="holder-name">David Smith</h6>
                                        <p className="text">CTO, Alphabet</p>
                                    </div>
                                </div>
                            </div> {/* single testimonial */}
                        </div>
                        <div className="col-lg-4">
                            <div className="single-testimonial">
                                <div className="testimonial-review d-flex align-items-center justify-content-between">
                                    <div className="quota">
                                        <i className="lni-quotation" />
                                    </div>
                                    <div className="star">
                                        <ul>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                            <li><i className="lni-star-filled" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="testimonial-text">
                                    <p className="text">Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.</p>
                                </div>
                                <div className="testimonial-author d-flex align-items-center">
                                    <div className="author-image">
                                        <img className="shape" src={TextimonialShape} alt="shape" />
                                        <img className="author" src={Author2} alt="author" />
                                    </div>
                                    <div className="author-content media-body">
                                        <h6 className="holder-name">Fajar Siddiq</h6>
                                        <p className="text">COO, MakerFlix</p>
                                    </div>
                                </div>
                            </div> {/* single testimonial */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
            {/*====== TESTIMONIAL PART ENDS ======*/}
            {/*====== BLOG PART START ======*/}
            <section id="blog" className="blog-area pt-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title pb-35">
                                <div className="line" />
                                <h3 className="title"><span>Our Recent</span> Blog Posts</h3>
                            </div> {/* section title */}
                        </div>
                    </div> {/* row */}
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-7">
                            <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <div className="blog-image">
                                    <img src={Blog1} alt="blog" />
                                </div>
                                <div className="blog-content">
                                    <ul className="meta">
                                        <li>Posted By: <a href="/">Admin</a></li>
                                        <li>03 June, 2023</li>
                                    </ul>
                                    <p className="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right" /></a>
                                </div>
                            </div> {/* single blog */}
                        </div>
                        <div className="col-lg-4 col-md-7">
                            <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div className="blog-image">
                                    <img src={Blog2} alt="blog" />
                                </div>
                                <div className="blog-content">
                                    <ul className="meta">
                                        <li>Posted By: <a href="/">Admin</a></li>
                                        <li>03 June, 2023</li>
                                    </ul>
                                    <p className="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right" /></a>
                                </div>
                            </div> {/* single blog */}
                        </div>
                        <div className="col-lg-4 col-md-7">
                            <div className="single-blog mt-30 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div className="blog-image">
                                    <img src={Blog3} alt="blog" />
                                </div>
                                <div className="blog-content">
                                    <ul className="meta">
                                        <li>Posted By: <a href="/">Admin</a></li>
                                        <li>03 June, 2023</li>
                                    </ul>
                                    <p className="text">Lorem ipsuamet conset sadips cing elitr seddiam nonu eirmod tempor invidunt labore.</p>
                                    <a className="more" href="/">Learn More <i className="lni-chevron-right" /></a>
                                </div>
                            </div> {/* single blog */}
                        </div>
                    </div> {/* row */}
                </div> {/* container */}
            </section>
            {/*====== BLOG PART ENDS ======*/}
            {/*====== FOOTER PART START ======*/}
            <footer id="footer" className="footer-area pt-120">
                <div className="container">
                    <div className="subscribe-area wow fadeIn" style={{visibility:'hidden'}} data-wow-duration="1s" data-wow-delay="0.5s">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="subscribe-content mt-45">
                                    <h2 className="subscribe-title">Subscribe Our
                                        Newsletter <span>get reguler updates</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="subscribe-form mt-50">
                                    <form action="#">
                                        <input type="text" placeholder="Enter eamil" />
                                        <button className="main-btn">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-widget pb-100">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="footer-about mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                    <a className="logo" href="/">
                                        <img src={Logo} alt="logo" />
                                    </a>
                                    <p className="text">Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.</p>
                                    <ul className="social">
                                        <li><a href="/"><i className="lni-facebook-filled" /></a></li>
                                        <li><a href="/"><i className="lni-twitter-filled" /></a></li>
                                        <li><a href="/"><i className="lni-instagram-filled" /></a></li>
                                        <li><a href="/"><i className="lni-linkedin-original" /></a></li>
                                    </ul>
                                </div> {/* footer about */}
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-7">
                                <div className="footer-link d-flex mt-50 justify-content-md-between">
                                    <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                                        <div className="footer-title">
                                            <h4 className="title">Quick Link</h4>
                                        </div>
                                        <ul className="link">
                                            <li><a href="/">Road Map</a></li>
                                            <li><a href="/">Privacy Policy</a></li>
                                            <li><a href="/">Refund Policy</a></li>
                                            <li><a href="/">Terms of Service</a></li>
                                            <li><a href="/">Pricing</a></li>
                                        </ul>
                                    </div> {/* footer wrapper */}
                                    <div className="link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                                        <div className="footer-title">
                                            <h4 className="title">Resources</h4>
                                        </div>
                                        <ul className="link">
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/">Page</a></li>
                                            <li><a href="/">Portfolio</a></li>
                                            <li><a href="/">Blog</a></li>
                                            <li><a href="/">Contact</a></li>
                                        </ul>
                                    </div> {/* footer wrapper */}
                                </div> {/* footer link */}
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-5">
                                <div className="footer-contact mt-50 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                                    <div className="footer-title">
                                        <h4 className="title">Contact Us</h4>
                                    </div>
                                    <ul className="contact">
                                        <li>+809272561823</li>
                                        <li>info@gmail.com</li>
                                        <li>www.yourweb.com</li>
                                        <li>123 Stree New York City , United <br /> States Of America 750.</li>
                                    </ul>
                                </div> {/* footer contact */}
                            </div>
                        </div> {/* row */}
                    </div> {/* footer widget */}
                </div> {/* container */}
                <div id="particles-2" />
            </footer>
            {/*====== FOOTER PART ENDS ======*/}
            {/*====== BACK TOP TOP PART START ======*/}
            <a href="/" className="back-to-top"><i className="lni-chevron-up" /></a>
            {/*====== BACK TOP TOP PART ENDS ======*/}
        </>
    );
}