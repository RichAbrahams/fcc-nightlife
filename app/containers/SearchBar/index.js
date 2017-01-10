/*
 *
 * SearchBar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import * as selectors from './selectors';
import Section from './Section';
import FormWrapper from './FormWrapper';
import SearchForm from 'components/SearchForm';
import Searching from 'components/Searching';
import SearchError from 'components/SearchError';
import { fromJS } from 'immutable';

export class SearchBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    const location = JSON.parse(localStorage.getItem('location'));
    if (location) {
      this.props.searchSubmit(fromJS({
        offset: 0,
        location,
      }));
    }
  }

  render() {
    return (
      <Section>
        <FormWrapper>
          {!this.props.searching && <SearchForm onSubmit={this.props.searchSubmit} />}
          {this.props.searching && <Searching />}
        </FormWrapper>
        {this.props.error && <SearchError error={this.props.error} />}
      </Section>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  searching: selectors.selectSearching(),
  location: selectors.selectLocation(),
  error: selectors.selectError(),
  total: selectors.selectTotal(),
  offset: selectors.selectOffset(),
  mappedBusinesses: selectors.selectMappedBusinesses(),
});

function mapDispatchToProps(dispatch) {
  return {
    searchSubmit: (searchInput) => dispatch(actions.searchSubmit(searchInput)),
  };
}

SearchBar.propTypes = {
  searching: React.PropTypes.bool,
  searchSubmit: React.PropTypes.func,
  error: React.PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
