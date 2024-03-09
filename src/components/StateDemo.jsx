import {React,useState} from "react";
import { Container,Button } from "react-bootstrap";
function StateDemo()
{
    // destructuring or initialisations state
    const[name,setName]=useState("brijesh");
    return(
        <>
          <Container className="container w-50 mx-auto mt-5 p-5 bg-secondary">
           <h1>Hi i am {name}</h1>
           <Button className="btn btn-lg btn-danger text-white" type="button" onClick={()=>{setName("rutu")}}>click to update Name</Button>
           </Container>

        </>
    )
}
export default StateDemo