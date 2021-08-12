
export default function updateAction(state, payload) {

  console.log("state:", state);
  alert("State is : \n\n"+JSON.stringify(state));
  console.log("payload:", payload);
  alert("Payload is : \n\n"+JSON.stringify(payload));
  
  return {
    ...state,
    ...payload,    
  };
  }
