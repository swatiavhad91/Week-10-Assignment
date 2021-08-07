// react
import React, { useState } from "react";
import "./App.css"


export default function Openings() {
    // react Hook For State Handler
    const [data, setData] = useState(null)

    // Fetch Function   
    fetch("./data.json").then(
        function (res) {
            return res.json()
        }).then(function (data) {
            // store Data in State Data Variable
            setData(data)
        }).catch(
            function (err) {
                console.log(err, ' error')
            }
        )

    return (
        <div className="Openings">

            {
                // use data State Variable For Get Data Use JavaScript Map Mathod
                data ? data.map(
                    function (data) {
                        return (<div className="card">
                            <div class="card-body">

                                <h5 class="card-title" style={{ textDecoration: "underline", fontWeight: "bolder" }}> {data.role}  </h5>
                                <h8 class="card-subtitle">{data.technology}</h8><br></br>
                                <h8 class="card-subtitle">{data.designation + " / "} {data.experience + " Yrs"}</h8>

                            </div>
                        </div>)
                    }
                ) : ""
            }
        </div>
    );
}