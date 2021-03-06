import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import "./App.css";

const Step1 = (props) => {
  
  
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./Openings");
    
  };

  return  (
    <React.Fragment>
      
    <div className="form_container">
      <form onSubmit={handleSubmit(onSubmit)} >

        <div className="Parent">

          <div className="Fname_container">
            
            <input className="inputfields" placeholder="First Name *" style={{ width: "100%" }} id="firstname" required pattern="[A-Za-z]+"
              title="First Name must be character only.. It can not contain numbers or symbols.."
              {...register("FirstName")} defaultValue={state.firstName} />
            
            
          </div>

          <div className="Lname_container">

            <input className="inputfields" placeholder="Last Name *" style={{ width: "100%" }} id="lastname" required pattern="[A-Za-z]+"
              title="Last Name must be character only.. It can not contain numbers or symbols.."
              {...register("Lastname")} defaultValue={state.lastName} /><br></br>
          </div>
        </div>

        <div className="Parent2">

          <input className="inputfields" placeholder="Email *" style={{ width: "100%" }} type="text" id="email" required pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            title="Please enter valid email.."
            {...register("Email")} defaultValue={state.email} />

          <div>

            <label htmlFor="gender" style={{ marginTop: "4%", color: "gray" }}>Gender</label>
            <div>
              <input type="radio" name="exampleRadios" id="exampleRadios1" value="male" checked
              {...register("Gender")} defaultValue={state.value} />
              <label style={{ marginLeft: "1%" }} htmlFor="exampleRadios1">
                Male
              </label>


              <input type="radio" name="exampleRadios" id="exampleRadios2" value="female" 
              {...register("Gender")} defaultValue={state.value}
              style={{ marginLeft: "4%" }} />
              <label style={{ marginLeft: "1%" }} htmlFor="exampleRadios2">
                Female
              </label>
            </div></div>

          <div>
            <label style={{ marginTop: "2%", color: "gray" }} htmlFor="technology">Technology</label><br></br>
            <input type="checkbox" id="inlineCheckbox1" value="ReactJs"
              {...register("Course")} defaultValue={state.ReactJs} style={{}} />
            <label htmlFor="inlineCheckbox1" style={{ marginLeft: "1%" }}>ReactJs</label>



            <input type="checkbox" id="inlineCheckbox2" value="Node"
              {...register("Course")} defaultValue={state.Node} style={{ marginLeft: "3%" }} />
            <label htmlFor="inlineCheckbox2" style={{ marginLeft: "1%" }}>Node</label>



            <input type="checkbox" id="inlineCheckbox3" value="Angular"
              {...register("Course")} defaultValue={state.Angular} style={{ marginLeft: "3%" }} />
            <label htmlFor="inlineCheckbox3" style={{ marginLeft: "1%" }}>Angular</label>



            <input type="checkbox" id="inlineCheckbox4" value="Java"
              {...register("Course")} defaultValue={state.Java} style={{ marginLeft: "3%" }} />
            <label htmlfor="inlineCheckbox4" style={{ marginLeft: "1%" }}>Java</label>
          </div>


          <div>

            <textarea style={{ width: "100%", marginTop: "2%" }} placeholder="Short Description" required  {...register("Description")} defaultValue={state.description}></textarea>

          </div>

          <label htmlFor="inputState" style={{ marginTop: "2%", color: "gray" }}>Select a City</label>
          <div>
            <select id="inputState" placeholder="" className="inputfields" style={{ width: "100%", color: "gray" }} >
              <option value  >Choose...</option>
              <option value="Pune"  {...register("City")} defaultValue={state.Pune}>Pune</option>
              <option value="Mumbai" {...register("City")} defaultValue={state.Mumbai}>Mumbai</option>
              <option value="Banglore" {...register("City")} defaultValue={state.Banglore}>Banglore</option>
              <option value="Hydrabad" {...register("City")} defaultValue={state.Hydrabad}>Hydrabad</option>
            </select>
          </div>
        </div>

        <div className="Parent3">
          <div className="Exp">
            <label style={{ color: "gray" }} htmlFor="expeience">Experience</label>
            <input className="inputfields" id="experience" required pattern="^[+-]?([0-9]*[.])?[0-9]+$" title="Experience can be decimal OR floating point
            number only.. It can not character or symbols.."
              {...register("Experience")} defaultValue={state.Experience} />
          </div>

          <div className="DOB">
            <label style={{ color: "gray" }} htmlFor="dob">Date of Birth</label>
            <input  className="inputfields"  required  {...register("DOB")} 
            defaultValue={state.DOB} type="date" id="dob" />

          </div>
        </div>

        <div className="buttons">
          <input style={{ width: "20%", marginLeft: "25%", backgroundColor:"blue",color:"white",borderRadius:"4%",
          fontWeight:"bold", borderColor:"blue"}} 
          type="submit" />

          <input type="reset" style={{ marginLeft: "2%", width: "20%",backgroundColor:"gray",color:"white",borderRadius:"4%",
           borderColor:"gray",fontWeight:"bold" }} />
        </div>

      </form >
      
    </div>
    
    
   
    </React.Fragment>
    
  );

};

export default withRouter(Step1);
