import React from "react";
import { Route, Routes } from "react-router-dom";
import "./components_css/industries.css";
import {
    Financial,
    IndustrialManufacturing,
    ConsumerProducts,
    HealtCare,
    HighTechnology,
    Lifesciences,
    Media_Enter,
    Professional,
    Retails,
    TransportationandLogistics,
} from "./industries_components";

const Industries = () => {
    return (
        <>
            <Route path="/financial" Component={Financial} />
            <Route
                path="/industrialmanufacturing"
                Component={IndustrialManufacturing}
            />
            <Route path="/consumerproducts" Component={ConsumerProducts} />
            <Route path="/healthcare" Component={HealtCare} />
            <Route path="/hightechnology" Component={HighTechnology} />
            <Route path="/lifesciences" Component={Lifesciences} />
            <Route path="/mediaentertainment" Component={Media_Enter} />
            <Route path="/professional" Component={Professional} />
            <Route path="/retails" Component={Retails} />
            <Route
                path="/transportationandLogistics"
                Component={TransportationandLogistics}
            />

            <Route path="*" element={<p>Path not resolved</p>} />
        </>
    );
};

export default Industries;
