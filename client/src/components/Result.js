import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Form, Button } from 'react-bootstrap';
import API from '../utils/API';

function Result(props) {
  const [inputObject, saveUserInput] = useState({});
  const [loading, setLoading] = useState(false);

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
          <Form onSubmit={saveUserInput}>
            <Form.Group id="userInput">
              <Form.Control type="text"/>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">Submit</Button>
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