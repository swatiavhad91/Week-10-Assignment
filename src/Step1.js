import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";


const Step1 = (props) => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./Openings");
  };

  return (
      <div className="form_container"> 
         <form onSubmit={handleSubmit(onSubmit)} >

        <div className="Parent">

        <div className="Fname_container">
      
      <input className="inputfields" placeholder="First Name *" style={{width:"100%"}} id="firstname" required pattern="[A-Za-z]+"
        title="First Name must be character only.. It can not contain numbers or symbols.."
        {...register("FirstName")} defaultValue={state.firstName} />
        </div>

        <div className="Lname_container">
        
      <input className="inputfields" placeholder="Last Name *" style={{width:"100%"}} id="lastname" required pattern="[A-Za-z]+" 
        title="Last Name must be character only.. It can not contain numbers or symbols.."
        {...register("Lastname")} defaultValue={state.lastName} /><br></br>
      </div>
      </div>

      <div className="Parent2">      
      
      <input className="inputfields" placeholder="Email *"  style={{width:"100%"}} type="text" id="email" required pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        title="Please enter valid email.."
        {...register("Email")} defaultValue={state.email} />

      <div>
        
        <label for="gender" style={{marginTop:"4%", color:"gray"}}>Gender</label>
        <div>
        <input type="radio" name="exampleRadios" id="exampleRadios1" value="male" checked />
        <label style={{marginLeft:"1%"}} for="exampleRadios1">
          Male
        </label>
      

      <input type="radio" name="exampleRadios" id="exampleRadios2" value="female"  style={{marginLeft:"4%"}}/>
      <label style={{marginLeft:"1%"}} for="exampleRadios2">
        Female
      </label>
      </div></div>

      <div>
        <label style={{marginTop:"2%", color:"gray"}} for="technology">Technology</label><br></br>
        <input type="checkbox" id="inlineCheckbox1" value="ReactJs"
          {...register("Course")} defaultValue={state.ReactJs} style={{}} />
        <label for="inlineCheckbox1"style={{marginLeft:"1%"}}>ReactJs</label>



        <input type="checkbox" id="inlineCheckbox2" value="Node"
          {...register("Course")} defaultValue={state.Node} style={{marginLeft:"3%"}} />
        <label for="inlineCheckbox2"style={{marginLeft:"1%"}}>Node</label>



        <input type="checkbox" id="inlineCheckbox3" value="Angular"
          {...register("Course")} defaultValue={state.Angular} style={{marginLeft:"3%"}} />
        <label for="inlineCheckbox3"style={{marginLeft:"1%"}}>Angular</label>



        <input type="checkbox" id="inlineCheckbox4" value="Java"
          {...register("Course")} defaultValue={state.Java} style={{marginLeft:"3%"}} />
        <label for="inlineCheckbox4" style={{marginLeft:"1%"}}>Java</label>
      </div>


      <div>
        
        <textarea style={{width:"100%",marginTop:"2%"}} placeholder="Short Description" required  {...register("Description")} defaultValue={state.description}></textarea>

      </div>

      <label for="inputState" style={{marginTop:"2%",color:"gray"}}>Select a City</label>
      <div>        
        <select id="inputState" placeholder="" className="inputfields" style={{width:"100%", color:"gray"}} >
          <option selected  >Choose...</option>
          <option value="Pune"  {...register("City")} defaultValue={state.Pune}>Pune</option>
          <option value="Mumbai" {...register("City")} defaultValue={state.Mumbai}>Mumbai</option>
          <option value="Banglore" {...register("City")} defaultValue={state.Banglore}>Banglore</option>
          <option value="Hydrabad" {...register("City")} defaultValue={state.Hydrabad}>Hydrabad</option>
        </select>
      </div>
      </div>

      <div className="Parent3">
      <div className="Exp">
        <label style={{color:"gray"}} for="expeience">Experience</label>
        <input className="inputfields" id="experience" required pattern="^[+-]?([0-9]*[.])?[0-9]+$" title="Experience can be decimal OR floating point
            number only.. It can not character or symbols.."
          {...register("Experience")} defaultValue={state.Experience} />
        </div>

        <div className="DOB">
        <label style={{color:"gray"}} for="dob">Date of Birth</label>
        <input className="inputfields" required  {...register("DOB")} defaultValue={state.DOB} type="date" id="dob" />

      </div>
      </div>

      <div className="buttons">
      <input style={{width:"20%", marginLeft:"25%"}} type="submit" />
      <input type="reset" style={{ marginLeft: "2%", width:"20%" }} />
      </div>

    </form >
    </div>

  );
};

export default withRouter(Step1);
