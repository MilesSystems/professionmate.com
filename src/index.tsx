import {ppr} from "src/hoc/passPropertiesAndRender";
import Home from "src/Home";
import { createRoot } from 'react-dom/client';
import {HashRouter, Route, Routes} from "react-router-dom";
import Wrapper from "src/Wrapper";

const root = createRoot(document.getElementById('app') as HTMLElement);

root.render(
    <HashRouter>
        <Routes>
            <Route path={'*'} element={ppr(Wrapper, {})}>
                <Route path={'*'} element={ppr(Home, {})}/>
            </Route>
        </Routes>
    </HashRouter>
);
