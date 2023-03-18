import React,{useState} from "react";
import Navbar from "./Navbar";
import Icons from "./Icons";
import "./Blog.css";
import Footer from "./Footer";
export default function Blog() {
    const [playing, setPlaying] = useState(true);
    const [videoRef, setVideoRef] = useState(null);
  
    const handleClick = () => {
      if (videoRef.paused) {
        videoRef.play();
      } else {
        videoRef.pause();
      }
      setPlaying(!playing);
    };
  return (
    <div>
    <div className="main-blog-div">
        <div className="header-div">
            {/* <img src="/images/Logo black&white.svg" /> */}
            <Navbar />
            <Icons></Icons>
        </div>

        {/* top  */}
        <div className="top-div">
            <div className="left-side">
                <div className="txt-in-img">
                    <h1>Enjoy Our <br/>
                        blog posts<br/>
                        thrice a week
                    </h1>
                    <p>
                        txt required form aryan.<br/>
                        txt required form aryan.
                    </p>
                </div>
                <img src="images/Pexels Photo by Element5 Digital.png"/>
            </div>
            <div className="right-side">
                <div className="ryt-top" onClick={handleClick}>
                    <video className="Video"  
                        ref={(video) => {
                            setVideoRef(video);
                        }}
                        autoPlay={playing} muted loop 
                    >
                        <source src="images/production_ID_377_0017.mp4" type="video/mp4" />
                        Sorry, your browser doesn't support videos.
                    </video>
                </div>
                <div className="ryt-down">
                    <img src="images/QCM15347 (1).jpg"/>
                </div>
            </div>
        </div>
        
        {/* middle */}

        <div className="middle-div">
            <div>
                <div className="col">
                    <img src="images/limited.png"/>
                    <div className="col-txt-div">
                        <h1>some txt some txt </h1>
                        <p>txt required form aryan.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="col">
                    <h1>Dummy text Dummy text Dummy text </h1>
                </div>
            </div>
            <div>
                <div className="col-img">
                    <img src="images/106780F7-F084-4BCC-966F-8BAC4FA631C1 1.png"/>
                </div>
            </div>
            <div>
                <div className="col">
                    <img src="images/popular.png"/>
                    <div className="col-txt-div">
                        <h1>some txt some txt </h1>
                        <p>txt required form aryan.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* bottom */}

        <div className="btm-main-div">
            <div className="btm-left"> {/* bottom left side */}
                <div className="btm-top">
                    <img src="images/Pexels Photo by Karolina Grabowska.png"/>
                </div>
                <div className="btm-down">
                    <div className="btm-down-left">
                        <p>some text</p>
                    </div>
                    <div className="btm-down-right">
                        <p>some text</p>
                    </div>
                </div>
            </div>
            <div className="btm-ryt">
                <div className="tow-col">
                    <img src="images/popular.png"/>
                    <div className="col-txt-div">
                        <h1>some txt some txt </h1>
                        <p>txt required form aryan.</p>
                    </div>
                </div>
                <div className="tow-col">
                    <img src="images/popular.png"/>
                    <div className="col-txt-div">
                        <h1>some txt some txt </h1>
                        <p>txt required form aryan.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
  );
}
