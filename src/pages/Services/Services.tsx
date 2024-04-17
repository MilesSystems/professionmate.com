import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import dalle from "assets/dalle18.webp";
import Parallax, {eParallaxStyle} from "src/components/Parallax";
import {faChess} from "@fortawesome/free-solid-svg-icons";

interface iService {
    title: string;
    description: string;
    link: string;
    image: string;
    icon: IconProp;
}

const serviceList: iService[] = [
    {
        title: 'Resume & Cover Letter Optimization',
        description: 'We 1. Analyze, 2. Consult, and 3. Enhance your Resume and Cover Letter. We thoroughly craft ATS-compliant resumes and cover letters that resonate with your target industries, ensuring you stand out in a competitive job market.',
        link: '#',
        image: dalle,
        icon: faChess
    }, {
        title: 'Job Searching',
        description: 'We take care of the entire Job Searching process for you with 5-Star results. Our dedicated team leverages their deep industry knowledge an expansive network to connect you with exclusive job opportunities. We provide personalized guidance, assisting you in identifying the perfect position.',
        link: '#',
        image: dalle,
        icon: faChess
    }, {
        title: 'Job Applying',
        description: 'Our team of experts meticulously tailor each application to the unique requirements of each job, showcasing your qualifications and experience in the best light. We automate the entire job application process and increase your chances of landing your dream position.',
        link: '#',
        image: dalle,
        icon: faChess
    }, {
        title: 'Career Consulting',
        description: 'With our personalized approach, we\'ll work closely with you to understand your unique strengths, interests, and career goals. From there, we\'ll provide you with tailored advice and services to help you succeed.',
        link: '#',
        image: dalle,
        icon: faChess
    }, {
        title: 'Mock Interviews',
        description: 'Our mock interview services are unparalleled. With a keen eye for detail, we provide comprehensive feedback and guidance, helping you refine your interview skills, boost your confidence, and sharpen your responses. ',
        link: '#',
        image: dalle,
        icon: faChess
    }, {
        title: '60 Day Money Back Guarantee',
        description: 'If for some extraordinary reason, you don\'t get results after 60 days of continued services, we\'ll deliver 100% free unlimited services for the remainder of your job search. No questions asked!',
        link: '#',
        image: dalle,
        icon: faChess
    }

]

export const SERVICES = 'services/'

export default function Services() {

    const allServices = serviceList.map((service, index) => {
        return <div className={'col-6'}>
            <div className={'card m-2'} key={index}>
                <div className={'card-header'}>
                    {service.title}
                </div>
                <div className={'card-body'}>
                    <div className={'row d-flex justify-content-center'}>
                        <div style={{
                            backgroundColor: 'grey', /* Set your desired shade of grey here */
                            borderRadius: '50%',     /* Makes the div circular */
                            width: '100px',           /* Set the width as desired */
                            height: '100px',          /* Set the height as desired */
                            display: 'flex',
                            justifyContent: 'center', /* Centers the icon horizontally */
                            alignItems: 'center',     /* Centers the icon vertically */
                            marginBottom: '20px'     /* Adjusts the position of the icon */
                        }}>
                            <FontAwesomeIcon
                                icon={service.icon}
                                size={'4x'}/>
                        </div>
                    </div>
                    {service.description}
                </div>
                <div className={'card-footer'}>
                </div>
            </div>
        </div>
    })

    return <Parallax height={'97vh'} backgroundImage={dalle} parallaxStyle={eParallaxStyle.SCROLL}>
        <div className="container">
            <div className={'row'}>
                {allServices}
            </div>
        </div>
    </Parallax>
}

