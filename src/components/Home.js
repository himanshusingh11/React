import React from 'react';
import { Jumbotron, Container , Button } from 'reactstrap';

const Home=()=>{
  return(
    <div>
    <Jumbotron className="text-center bg-light" >
      <h1 className="display-3">LearnCode with HIMANSHU SINGH</h1>
      <p>
     
      This is a demo application in React Js for Learning Purpose only ..
      </p>
      <hr className="my-2" />
      <Container>
        <Button color="primary" outline>
          Start Using
        </Button>
      </Container>
    </Jumbotron>
    </div>
  )
} 
export default Home;