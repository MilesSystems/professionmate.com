
import serviceList from "src/data/services";

export const SERVICES = 'services/'

export default function Services() {

    return  <section id="three" className="wrapper style3 special">
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
}

