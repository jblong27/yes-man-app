import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="result">
      Here's what we think you should do:
    </div>
  );
}

Result.PropTypes = {
  questionnaireResult: PropTypes.string.isRequired,
};

export default Result;