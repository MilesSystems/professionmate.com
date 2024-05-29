
export const PRICING = 'pricing/'
export default function Pricing() {
    return <>
        <article id="main">

            <header>
                <h2>Welcome to Profession Mate</h2>
                <p>
                    Profession Mate offers both Free and Premium services to fit your needs. <br/>
                    Schedule a call with us today to get a quote.
                </p>
            </header>

            <section className="wrapper style5">
                <div className="inner">

                    <h2>Premium Service</h2>
                    <p>
                        Our Premium package is Performance-Based, which means that we only get paid based on
                        your specific needs. The price of services varies depending your job requirements
                        and each of our services are tailor-made for your individual search.
                        <br/><br/>
                        In order to guarantee results in 60 days or less, we only service 25 Clients at a
                        time. Schedule a call first to see if spots are available.
                    </p>
                    <button type="button" className="btn btn-outline-secondary"
                            onClick={() => window.open('https://calendly.com/professionmate/30min', '_blank')}>
                        <b>Schedule a call</b>
                    </button>

                </div>
            </section>
        </article>
    </>
}

