import React, {useState, useEffect, useContext} from 'react';
import Logo from "../assets/images/logo.svg";
import Shape from "../assets/images/services-shape.svg";
import Shape2 from "../assets/images/services-shape-2.svg";
import {Link} from "react-router-dom";

import axios from 'axios';

import {AccountContext} from "../stores/AccountStore";

export default function Signup()
{
    // eslint-disable-next-line no-unused-vars
    const {account, setAccount} = useContext(AccountContext);

    const [emoji, setEmoji] = useState("lni-emoji-suspect")

    function submit_form() {
        let data = {
            account: document.getElementById("email").value,
            password : document.getElementById("password").value,
            name : document.getElementById("name").value,
            phone : document.getElementById("phone").value,
            company : document.getElementById("company").value
        }

        axios.post('http://openseller.ddns.net:3001/users/create',
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                },
            })
            .then((res)=>{
                console.log(res);
                setAccount({email: data.account, password: data.password, isLogin:true});
            })
    }

    useEffect(() => {
        document.getElementById('form_emoji').className = emoji;
    }, [emoji])

    useEffect(() => {

        let inputs = [
            document.getElementById("email"),
            document.getElementById("password"),
            document.getElementById("password_verify"),
            document.getElementById("name"),
            document.getElementById("phone"),
            document.getElementById("company")
        ]
        inputs.forEach((input) => {
            input.addEventListener("focus", () => {
                setEmoji("lni-emoji-smile")
            })
            input.addEventListener("blur", () => {
                if (input.value === "")
                    setEmoji("lni-emoji-sad")
                else
                    setEmoji("lni-emoji-suspect")
            })
            input.addEventListener("keypress", () => {
              setEmoji("lni-emoji-happy")
            })
        })

    }, [])

    return (
        <header className="header-area">
            <div className="navbar-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="navbar navbar-expand-lg">
                                <Link to="/"><img src={Logo} alt="Logo" /></Link>
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
                                <i className={emoji} id="form_emoji" />
                            </div>
                            <form className="services-content mt-30" id="signup_form" >
                                <h4 className="services-title">회원가입 폼</h4>

                                <div className="m-5">
                                <p className="text" style={{display:'inline'}}>이메일 : </p>
                                    <input id="email" type="text" placeholder="abc@abc.com" />
                                </div>
                                <div className="m-5">
                                <p className="text" style={{display:'inline'}}>비밀번호 : </p>
                                    <input id="password" type="password" />
                                </div>
                                <div className="m-5">
                                <p className="text" style={{display:'inline'}}>비밀번호 확인 : </p>
                                    <input id="password_verify" type="password" />
                                </div>
                                <div className="m-5">
                                    <p className="text" style={{display:'inline'}}>이름 : </p>
                                    <input id="name" type="text" />
                                </div>
                                <div className="m-5">
                                    <p className="text" style={{display:'inline'}}>휴대폰 번호 : </p>
                                    <input id="phone" type="text" placeholder="010-0000-0000" />
                                </div>
                                <div className="m-5">
                                    <p className="text" style={{display:'inline'}}>상호명 : </p>
                                    <input id="company" type="text" />
                                </div>
                                <Link to="/" onClick={submit_form} className="w-25 shadow" ><input style={{width:'100%'}} type="submit" value="가입하기" /></Link>
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