// react
import { StateMachineProvider } from "little-state-machine";
import React, { useContext, useState } from "react";
import "./App.css";


export default function Openings() {
    // react Hook For State Handler
    //useContext(myContext);
    const [data, setData] = useState(null);  
    
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
        <div>
             <h1 style={{
                backgroundColor: "blueviolet", color: "white", width: "90%", marginTop: "2%", marginLeft: "5%",
                textAlign: "center", padding: "2%"
            }} >  Welcome {}  ! We Have Following Openings.. </h1> 

            <div className="Openings">
                {
                    // use data State Variable For Get Data Use JavaScript Map Mathod
                    data ? data.map(
                        function (data) {
                            return (

                                <React.Fragment>

                                    <div className="card"  style={{ borderRadius: "10%" }}>
                                        <div className="card-body">

                                            <h5 className="card-title" style={{ textDecoration: "underline", fontWeight: "bolder" }}> {data.role}  </h5><br></br>
                                            <h6 className="card-subtitle">{data.technology}</h6><br></br>
                                            <h6 className="card-subtitle">{data.designation + " / "} {data.experience + " Yrs"}</h6>

                                        </div>
                                    </div>
                                    

                                </React.Fragment>
                                
                            )
                            
                        }
                    ) : ""
                    
                }

                
            </div>
        </div>
    );
    
}