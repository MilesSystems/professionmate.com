import Footer from "src/Footer";
import Header from "src/Header";
import isLocal from "src/hoc/isLocal";
import isTest from "src/hoc/isTest";
import {ppr} from "src/hoc/passPropertiesAndRender";
import Elements, {ELEMENTS} from "src/pages/Examples/Elements";
import Generic, {GENERIC} from "src/pages/Examples/Generic";
import Home, {HOME} from "src/pages/Home/Home";
import {createRoot} from 'react-dom/client';
import {BrowserRouter, HashRouter, MemoryRouter, Navigate, Route, Routes} from "react-router-dom";
import Allies, {ALLIES} from "src/pages/Allies/Allies";
import Contact, {CONTACT} from "src/pages/Contact/Contact";
import Pricing, {PRICING} from "src/pages/Pricing/Pricing";
import Review, {REVIEWS} from "src/pages/Reviews/Reviews";
import Services, {SERVICES} from "src/pages/Services/Services";

const root = createRoot(document.getElementById('app') as HTMLElement);


const reactRouterContext = (children: any) => {

    if (isTest) {

        return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>

    }

    return <HashRouter>{children}</HashRouter>

}

root.render(reactRouterContext(<>
    <Header/>
    <Routes>
        <Route path={HOME} element={ppr(Home, {})}/>
        <Route path={ALLIES} element={ppr(Allies, {})}/>
        <Route path={CONTACT} element={ppr(Contact, {})}/>
        <Route path={PRICING} element={ppr(Pricing, {})}/>
        <Route path={REVIEWS} element={ppr(Review, {})}/>
        <Route path={SERVICES} element={ppr(Services, {})}/>
        {isLocal
            ? <>
                <Route path={GENERIC} element={ppr(Generic, {})}/>
                <Route path={ELEMENTS} element={ppr(Elements, {})}/>
            </>
            : ''}

        <Route path={'*'} element={<Navigate to={'/' + HOME}/>}/>
    </Routes>
    <Footer/>
</>));
