import React from 'react';
import Wrapper from './Wrapper';
import PagerButton from './PagerButton';
import FontAwesome from 'react-fontawesome';

function ResultsPager(props) {
  const { total, offset, loadNextResults, loadPreviousResults } = props;
  const previousDisabled = offset <= 0;
  const nextDisabled = (offset + 20) > total;
  return (
    <Wrapper>
      <PagerButton onClick={loadPreviousResults} disabled={previousDisabled}>
        <FontAwesome
          name="arrow-circle-o-left"
          size="3x"
        />
      </PagerButton>
      <span>{(offset / 20) + 1} / {Math.ceil(total / 20)}</span>
      <PagerButton onClick={loadNextResults} disabled={nextDisabled}>
        <FontAwesome
          className="icon"
          name="arrow-circle-o-right"
          size="3x"
        />
      </PagerButton>
    </Wrapper>
  );
}

ResultsPager.propTypes = {
  total: React.PropTypes.number,
  offset: React.PropTypes.number,
  loadNextResults: React.PropTypes.func,
  loadPreviousResults: React.PropTypes.func,
};

export default ResultsPager;
