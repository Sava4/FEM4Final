import axios from "axios";

export const omponents =()=> {axios
    .get("http://localhost:5000/catalog")
    .then(result  => {
        console.log("Secsess ");
        console.log(result.data) 
        return (result.data)
     
    })
    .catch(err => {
      /*Do something with error, e.g. show error to user*/
    });
}; 