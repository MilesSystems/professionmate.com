import Pic01 from "/src/assets/images/pic01.jpg";
import Pic02 from "/src/assets/images/pic02.jpg";
import Pic03 from "/src/assets/images/pic03.jpg";
import {reviews} from "src/data/reviews";

export const REVIEWS = 'reviews/'

export default function Reviews() {
    return <section id="two" className="wrapper alt style2">

        {reviews.map(review => <section className="spotlight">
            <div className="image"><img src={Pic01} alt=""/></div>
            <div className="content">
                <h2>{review.name}</h2>
                <p>{review.review}</p>
            </div>
        </section>)}

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
}