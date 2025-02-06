import {Route, ROutes} from "react-router-dom";
import MicroorganismPage from "../pages/Microorganism";


const projectRoutes = () => {
    return(
        <Routes>
            <Route path="/microorganismo" element={<MicroorganismPage/>} />
        </Routes>
    );
};

export default projectRoutes;