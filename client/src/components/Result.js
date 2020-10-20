import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import API from '../utils/API';


function Result(props) {
  // const [loading, setLoading] = useState(false);
  const [inputObject, setInputObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setInputObject({...inputObject, [name]: value})
    console.log(name);
  };

  function handleInputSubmit(event) {
    event.preventDefault();
    if (inputObject) {
      API.saveUserInput({
        author: inputObject.email,
        activity: inputObject.activity,
        class: 'test'
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  

  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
      >  
        <div className="result">
          Say Yes to: <strong>{props.questionnaireResult}</strong>
        </div>
        
        <br/>
        <br/>
        <div> If you have something else in mind, let us know what it is here: 
          <Form onSubmit={handleInputSubmit}>
            <Form.Group id="userInput">
              <Form.Control type="text" onChange={handleInputChange} name="activity"/>
            </Form.Group>
            <Form.Group id="email">
              <Form.Control placeholder="Email" onChange={handleInputChange} type="email" name="email" required />
            </Form.Group>
            <Button disabled={!(inputObject.activity)} onClick={handleInputSubmit} className="w-100" type="submit">Submit</Button>
          </Form>   
        </div>
        <div>
          <Link to="/" className="btn btn-primary w-100 mt-3">Back to Profile</Link>
        </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  questionnaireResult: PropTypes.string.isRequired,
};

export default Result;