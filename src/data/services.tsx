import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {faChess} from "@fortawesome/free-solid-svg-icons";
import Apply from "assets/services/Apply.webp";
import Consulting from "assets/services/Consulting.webp";
import Mock from "assets/services/Mock.webp";
import Money from "assets/services/Money.webp";
import Search from "assets/services/Search.webp";
import Optimization from "assets/services/Optimization.webp";

interface iService {
    title: string;
    description: string;
    link: string;
    image: string;
    icon: IconProp;
}

export  const serviceList: iService[] = [
    {
        title: 'Resume & Cover Letter Optimization',
        description: 'We 1. Analyze, 2. Consult, and 3. Enhance your Resume and Cover Letter. We thoroughly craft ATS-compliant resumes and cover letters that resonate with your target industries, ensuring you stand out in a competitive job market.',
        link: '#',
        image: Optimization,
        icon: faChess
    }, {
        title: 'Job Searching',
        description: 'We take care of the entire Job Searching process for you with 5-Star results. Our dedicated team leverages their deep industry knowledge an expansive network to connect you with exclusive job opportunities. We provide personalized guidance, assisting you in identifying the perfect position.',
        link: '#',
        image: Search,
        icon: faChess
    }, {
        title: 'Job Applying',
        description: 'Our team of experts meticulously tailor each application to the unique requirements of each job, showcasing your qualifications and experience in the best light. We automate the entire job application process and increase your chances of landing your dream position.',
        link: '#',
        image: Apply,
        icon: faChess
    }, {
        title: 'Career Consulting',
        description: 'With our personalized approach, we\'ll work closely with you to understand your unique strengths, interests, and career goals. From there, we\'ll provide you with tailored advice and services to help you succeed.',
        link: '#',
        image: Consulting,
        icon: faChess
    }, {
        title: 'Mock Interviews',
        description: 'Our mock interview services are unparalleled. With a keen eye for detail, we provide comprehensive feedback and guidance, helping you refine your interview skills, boost your confidence, and sharpen your responses. ',
        link: '#',
        image: Mock,
        icon: faChess
    }, {
        title: '60 Day Money Back Guarantee',
        description: 'If for some extraordinary reason, you don\'t get results after 60 days of continued services, we\'ll deliver 100% free unlimited services for the remainder of your job search. No questions asked!',
        link: '#',
        image: Money,
        icon: faChess
    }

]
