import Pic01 from "/src/assets/images/pic01.jpg";
import Pic02 from "/src/assets/images/pic02.jpg";
import Pic03 from "/src/assets/images/pic03.jpg";

import {Link as ScrollLink, Element} from 'react-scroll';
import serviceList from "src/data/services";


export const HOME = 'home'

export default function Home() {

    return <>
        {/*-- Banner --*/}
        <section id="banner">
            <div className="inner">
                <h2>Profession Mate</h2>
                <p>#1 Job Searching Agency<br/>
                    Handling The Entire Job Searching and Applying Process For You!</p>
                <ul className="actions special">
                    <li><a href="#" className="button primary">Get Started Today</a></li>
                </ul>
            </div>
            <a href="#one" className="more scrolly">Learn More</a>
            <ScrollLink to="one" smooth={true} duration={500} className="more scrolly">Learn More</ScrollLink>

        </section>

        {/*-- One -*/}
        <Element name="one">
            <section id="one" className="wrapper style1 special">
                <div className="inner">
                    <header className="major">
                        <h2>PARTNER WITH THE EXPERTS<br/>
                            We're REALLY Good at What We Do 🐐</h2>
                        <p>
                            As a national, full-service agency, we have obtained knowledge across 12 lines of
                            business, and take pride in providing you an unparalleled experience and service.
                            Our job searching and applying services are built to get you hired 3x as fast while
                            saving you valuable time and money. We review your work history, education,
                            strengths, accomplishments, problem areas, skills, values, motivations and goals to
                            make sure we identify the perfect career opportunities.</p>
                    </header>
                    <ul className="icons major">
                        <li>
                            <span className="icon solid fa-search major style3">
                                <span className="label">
                                    Dolor
                                </span>
                            </span>
                        </li>
                        <li>
                            <span className="icon fa-plus major style2">
                                <span className="label">
                                    Ipsum
                                </span>
                            </span>
                        </li>
                        <li>
                            <span className="icon fa-heart major style1">
                                <span className="label">
                                    Lorem
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
        </Element>

        {/*-- Two --*/}
        <section id="two" className="wrapper alt style2">
            <section className="spotlight">
                <div className="image"><img src={Pic01} alt=""/></div>
                <div className="content">
                <h2>We guarantee results in <br/>
                        60 days or less!</h2>
                    <p>We are here to take care of the entire job searching process for you. Whether you
                        are seeking internships or high level positions, our career services and coaches
                        will assist you in landing your ideal positions.</p>
                </div>
            </section>
            <section className="spotlight">
                <div className="image"><img src={Pic02} alt=""/></div>
                <div className="content">
                    <h2>TRY OUR SERVICES FOR FREE<br/>
                        During the Free Trial we will...</h2>
                    <ol>
                        <li>Schedule a call to outline your specific Job Requirements</li>
                        <li> Create a Job Searching Strategy tailored to your career path.</li>
                        <li>Perform Career Consulting</li>
                    </ol>
                </div>
            </section>
            <section className="spotlight">
                <div className="image"><img src={Pic03} alt=""/></div>
                <div className="content">
                    <h2>What are you waiting for?<br/>
                        Schedule your first call today!</h2>
                    <p>
                        Book a time that works best for you! Our expert team will
                        call you during your scheduled booking to discuss what
                        options are available to you. After we're all on the same
                        page we will begin the process of finding you the perfect position.
                    </p>
                    <button type="button" className="btn btn-outline-secondary"
                            onClick={() => window.open('https://calendly.com/professionmate/30min', '_blank')}>
                        <b>Schedule a call</b>
                    </button>
                </div>
            </section>
        </section>

        {/*-- Three --*/}
        <section id="three" className="wrapper style3 special">
            <div className="inner">
                <header className="major">
                    <h2>Why Choose Us?</h2>
                    <p>By choosing us, you’re not just getting a service; you’re gaining a dedicated partner in your
                        career journey, committed to helping you succeed every step of the way.</p>
                </header>
                <ul className="features">
                    {serviceList.map(service =>
                        <li key={service.title} className={`icon solid fa-${service.icon.iconName}`}>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </li>)}
                </ul>
            </div>
        </section>

        {/*!-- CTA --*/}
        <section id="cta" className="wrapper style4">
            <div className="inner">
                <header>
                    <h2>zero commitment call</h2>
                    <p>
                        Let us tell you how we work and what we can do for you!
                        Booking and attending a call is completely free and without any commitment necessary.
                    </p>
                </header>
                <ul className="actions stacked">
                    <li><a href="#" className="button fit primary">Book a Call</a></li>
                    <li><a href="#" className="button fit">Learn More</a></li>
                </ul>
            </div>
        </section>
    </>


}


