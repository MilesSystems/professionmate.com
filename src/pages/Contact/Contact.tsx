import dalle from "assets/dalle16.webp";
import {useState, FormEvent} from "react";

export const CONTACT = 'contact';

export default function Contact() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:support@professionmate.com?subject=Contact Form Submission&body=From: ${email}, Message: ${message}`;
    };

    return <article id="main">
        <header>
            <h2>Contact Us</h2>
            <p>Lets schedule an initial introduction today!</p>
        </header>
        <section className="wrapper style5">
            <div className="inner">

                <h3>Profession Mate Operation Hours</h3>
                <div className={'row'}>
                    <div className={'col-3'}>
                        <p>
                            Hours ar in <u>Mountain Time.</u><br/><br/>
                            <dl>
                                <dt><b>Sunday</b></dt>
                                <dd>Closed</dd>

                                <dt><b>Monday</b></dt>
                                <dd> 09:00 am – 05:00 pm</dd>

                                <dt><b>Tuesday</b></dt>
                                <dd>09:00 am – 05:00 pm</dd>

                                <dt><b>Wednesday</b></dt>
                                <dd>09:00 am – 05:00 pm</dd>

                                <dt><b>Thursday</b></dt>
                                <dd>09:00 am – 05:00 pm</dd>

                                <dt><b>Friday</b></dt>
                                <dd> 09:00 am – 05:00 pm</dd>

                                <dt><b>Saturday</b></dt>
                                <dd>Closed</dd>

                            </dl>
                        </p>
                    </div>
                    <div className={'col-9'}>
                        <div className={'card m5'}>
                            <div className={'card-header'}>
                                Contact Us
                            </div>
                            <div className={'card-body'}>

                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email
                                        address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                           placeholder="name@example.com" value={email}
                                           onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <div className="mb-3 mt-5">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message
                                        textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}
                                              value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                </div>
                                <small className={'mt-5'}><b>This form will populate your computer's email client
                                    with the
                                    above ready to email <a href={'mailto: team@professionmate.com'}>
                                        <u>team@professionmate.com</u></a></b></small>
                            </div>
                            <div className={'card-footer'}>
                                <button type="button" className="btn btn-info" onClick={handleSubmit}>Send</button>
                                <button type="button" className="btn btn-secondary float-end">Clear</button>
                            </div>

                        </div>
                    </div>
                </div>

                <hr/>
                <h3>Phone Number</h3>
                (972) 608-3465<br/>
                We love our customers, so feel free to contact us during normal business hours. We understand that every
                career path has unique its own unique twists and turns.
                Feel free to message or call us with any specific concerns.
                Your time is valuable, and we will make sure to get back to you as soon as we
                can.<br/>

                Thanks!
                <hr/>
                <h3>Family-friendly environment</h3>
                <p> At Profession Mate, we believe that every job seeker deserves personalized attention and unwavering
                    support. Our dedicated team is here to make your career journey as smooth and successful as
                    possible. We pride ourselves on providing a family-friendly environment where your needs are our top
                    priority.
                </p>

                <hr/>

                <h3>Our Commitment to You</h3>
                <p>At Profession Mate, we understand that each career path has its own unique twists and turns. That’s
                    why we offer personalized, one-on-one support to help you navigate your job search with confidence.
                    Our dedicated team of experts works closely with you to understand your specific needs, goals, and
                    challenges, ensuring that you receive tailored guidance and support every step of the way.<br/>
                    <br/>
                    We take pride in fostering a warm, inclusive, and family-friendly environment where you can feel
                    comfortable and supported. Whether you need help refining your resume, preparing for interviews, or
                    exploring new career opportunities, we’re here to help you succeed.</p>

                <hr/>

                <h3>Why Choose Us?</h3>
                <p>Our approach is built on the foundation of genuine care and dedication. We don’t just see you as a
                    client; we see you as part of our Profession Mate family. We are committed to your success and work
                    tirelessly to ensure that you have the resources, support, and opportunities you need to achieve
                    your career goals.<br/>
                    <br/>
                    Thank you for choosing Profession Mate. We look forward to partnering with you on your journey to
                    career success. Reach out to us today – we’re here to help!

                </p>

            </div>
        </section>
    </article>

}

