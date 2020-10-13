import React from 'react';
import PropTypes from 'prop-types';

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
    </CSSTransitionGroup>
  );
}

Result.PropTypes = {
  questionnaireResult: PropTypes.string.isRequired,
};

export default Result;