import {NextPage} from "next";
import {BrowserRouter, Route, Routes} from "react-router-dom";
const NetflixClone: NextPage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/projects/clone" element={<><h1>하이</h1></>}></Route>

            </Routes>
        </BrowserRouter>
    )

}

export default NetflixClone