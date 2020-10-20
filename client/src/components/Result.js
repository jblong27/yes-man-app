import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl } from 'react-bootstrap';

function Result(props) {
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
          <InputGroup size="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
            <InputGroup.Append>
              <InputGroup.Text id="inputGroup-sizing-default">Submit</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
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