import dalle5 from 'assets/dalle5.webp';
import dalle12 from 'assets/dalle12.webp';


interface iHomeCardBody {
    title: string;
    description: string;
    link: string;
    image: string;
}

const HomeCards: iHomeCardBody[] = [
    {
        title: 'Profession',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        link: '#',
        image: dalle5
    },
    {
        title: 'Mate',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        link: '#',
        image: dalle12
    },
    {
        title: 'explore',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        link: '#',
        image: dalle5
    },
    {
        title: 'stuff',
        description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        link: '#',
        image: dalle12

    }
]
export default function Home() {

    const allHomeCards = [
        ...HomeCards,
        ...HomeCards,
        ...HomeCards,
        ...HomeCards,
        ...HomeCards,
        ...HomeCards,
        ...HomeCards,
    ]

    return <div className={'row'}>
        {allHomeCards.map(info => <div className={'col-3'}>
            <div className="card">
                <img src={info.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{info.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>)}
    </div>
}