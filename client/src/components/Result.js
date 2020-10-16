import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

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
          Here's what we think you should do:

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