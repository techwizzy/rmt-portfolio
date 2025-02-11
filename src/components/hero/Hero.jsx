import React from 'react';
import "./hero.css";
import Speech from './Speech';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hSection left">
            <h1 className="hTitle">
                Hey There,
                <br/>
                <span>I'm Alois!</span>
            </h1>
            <div className="awards">
                <h2>Full Stack Software Engineer </h2>
                <p>PowerBI Specialist | Data Analyst | Data Engineer | DHIS2 | Frappe.</p>
            </div>
            <div className="awardList">
                <img src="/award1.png" alt="" />
                <img src="/award2.png" alt="" />
                <img src="/award3.png" alt="" />
            </div>

            <a href="#services" className='scroll'>
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none">
                    <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="white" stroke-width="1"  />
                    <path d="M12 6V14" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M15 11L12 14L9 11" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
        <div className="hSection right">
            {/* Follow  */}
            <div className="follow">
                <a href="/">
                   <img src="/instagram.png" alt="" />
                </a>
                <a href="/">
                   <img src="/facebook.png" alt="" />
                </a>
                <a href="/">
                   <img src="/youtube.png" alt="" />
                </a>
                <div className="followTextContainer">
                    <div className="followText">
                        Follow Me
                    </div>
                </div>
            </div>
            {/* Speech Bubble */}
            <Speech/>
            {/* Cerificate */}
            <div className="certificate">
                <img src="/certificate.png" alt="" />
                 Microsoft Certified 
                 <br/>
            </div>
            {/* contact button */}
            <a href="/#contact" className='contactLink'>
            <div className="contactButton">
                    <svg viewBox="0 0 200 200 " width="150" height="150"  >
                    <circle cx="100" cy="100" r="90" fill="#dfb9b9"></circle>
                        <path  id='innerCirclePath'
                            fill='none'
                            d='M 100, 100 m -60, 0 a 60, 60 0 1, 1 120, 0 a 60, 60 0 1, 1 -120, 0'
                        />
                    <text className='circleText'>
                        <textPath href='#innerCirclePath'>Hire Me </textPath>
                        </text>
                        <text className='circleText'>
                        <textPath href='#innerCirclePath' startOffset="44%">Available For Work</textPath>
                        </text>
                    </svg>
                    <div className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"   viewBox="0 0 24 24" fill="none">
                    
                        <path d="M7 13.4545L8.97619 15.3409C9.36262 15.7098 9.97072 15.7098 10.3571 15.3409L17 9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="12" cy="12" r="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Hero