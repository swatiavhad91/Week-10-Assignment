import React from "react";
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
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <label>
        First Name:
        <input {...register("firstName")} defaultValue={state.firstName} />
      </label>
      <label>
        Last Name:
        <input {...register("lastName")} defaultValue={state.lastName} />
      </label>
      <input type="submit" />
      <input type="Reset"/>
    </form>
  );
};

export default withRouter(Step1);
