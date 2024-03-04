import { Route, Routes } from "react-router-dom";
import { ERP, EPM, SCM, HCM, CX, ATT, PAAS, AMS } from "./services_components";
import "./components_css/Services.css";

const Services = () => {
    return (
        <>
            <Route path="/erp" Component={ERP} />
            <Route path="/epm" Component={EPM} />
            <Route path="/scm" Component={SCM} />
            <Route path="/hcm" Component={HCM} />
            <Route path="/cx" Component={CX} />
            <Route path="/att" Component={ATT} />
            <Route path="/paas" Component={PAAS} />
            <Route path="/AMS" Component={AMS} />
        </>
    );
};

export default Services;
