import React, { useState, useEffect } from "react";

import Datatable from "../datatable";
import './styles.css';

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://anapioficeandfire.com/api/houses")
        .then(response => response.json())
        .then(json => setData(json));
    }, []);

    return (
        <div>
            <div>
                <Datatable data = {data}/>
            </div>
        </div>
    );
}