import isTest from "src/hoc/isTest";
import {ppr} from "src/hoc/passPropertiesAndRender";
import Home, {HOME} from "src/Home";
import {createRoot} from 'react-dom/client';
import {BrowserRouter, MemoryRouter, Navigate, Route, Routes} from "react-router-dom";
import Allies, {ALLIES} from "src/pages/Allies/Allies";
import Contact, {CONTACT} from "src/pages/Contact/Contact";
import Pricing, {PRICING} from "src/pages/Pricing/Pricing";
import Review, {REVIEWS} from "src/pages/Reviews/Reviews";
import Services, {SERVICES} from "src/pages/Services/Services";
import Wrapper from "src/Wrapper";

const root = createRoot(document.getElementById('app') as HTMLElement);


const reactRouterContext = (children: any) => {

    if (isTest) {

        return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>

    }

    return <BrowserRouter>{children}</BrowserRouter>

}

root.render(reactRouterContext(
    <Routes>
        <Route path={'*'} element={ppr(Wrapper, {})}>
            <Route path={HOME} element={ppr(Home, {})}/>
            <Route path={ALLIES} element={ppr(Allies, {})}/>
            <Route path={CONTACT} element={ppr(Contact, {})}/>
            <Route path={PRICING} element={ppr(Pricing, {})}/>
            <Route path={REVIEWS} element={ppr(Review, {})}/>
            <Route path={SERVICES} element={ppr(Services, {})}/>
            <Route path={'*'} element={<Navigate to={'/' + HOME}/>}/>
        </Route>
    </Routes>));
