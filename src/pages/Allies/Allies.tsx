import DataAllies from "src/data/allies";


export const ALLIES = 'allies/'

export default function Allies() {


    return <section id="three" className="wrapper style1 special">
        <div className="inner">
            <header className="major">
                <h2>We partner with the best organizations to maximize your job search!</h2>
                <p>Our strategic alliances with top-tier organizations across various industries empower us to enhance
                    your job search experience significantly. By leveraging our extensive network and industry
                    connections, we ensure your resume gets the visibility it deserves, putting your name at the
                    forefront of the hiring process. Whether you're seeking opportunities in technology, finance,
                    healthcare, or any other field, our partnerships enable us to match you with the most coveted
                    positions available. We are dedicated to providing you with unparalleled access to exclusive job
                    openings, ensuring your career advancement is both swift and seamless. Trust us to open doors to
                    opportunities that might otherwise remain out of reach, making your job search not only efficient
                    but also remarkably effective.</p>

            </header>
            <ul className="features">
                {DataAllies.map((ally, index) =>
                    <li key={index} className={`icon solid fa-${ally.icon.iconName}`}>
                        <h3>{ally.name}</h3>
                        <img src={ally.image} alt={ally.name} />
                    </li>)}
            </ul>
        </div>
    </section>
}