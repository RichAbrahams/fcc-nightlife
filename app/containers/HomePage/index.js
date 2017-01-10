/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as searchBarSelectors from 'containers/SearchBar/selectors';
import * as headerSelectors from 'containers/Header/selectors';
import * as actions from './actions';
import { incrementResults, decrementResults } from 'containers/SearchBar/actions';
import { createStructuredSelector } from 'reselect';
import Wrapper from './Wrapper';
import HomePageHeader from 'components/HomePageHeader';
import ResultsItem from 'components/ResultsItem';
import ResultsPager from 'components/ResultsPager';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const venues = this.props.mappedBusinesses;
    return (
      <Wrapper className="main-wrapper">
        <Helmet
          title="DrinkyTime"
          meta={[
            { name: 'DrinkyTime', content: 'Nightlife coordination app' },
          ]}
        />
        <HomePageHeader location={this.props.location} />
        {(!venues.isEmpty() && !this.props.searching) && venues.map((item, index) => <ResultsItem
          venue={item}
          key={index}
          userName={this.props.userName}
          addUserToVenue={this.props.addUserToVenue}
          removeUserFromVenue={this.props.removeUserFromVenue}
        />)}
        {!venues.isEmpty() && <ResultsPager
          total={this.props.total}
          offset={this.props.offset}
          loadNextResults={this.props.loadNextResults}
          loadPreviousResults={this.props.loadPreviousResults}
        />}
      </Wrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addUserToVenue: (data) => dispatch(actions.addUserToVenue(data)),
    removeUserFromVenue: (data) => dispatch(actions.removeUserFromVenue(data)),
    loadNextResults: () => dispatch(incrementResults()),
    loadPreviousResults: () => dispatch(decrementResults()),
  };
}

const mapStateToProps = createStructuredSelector({
  location: searchBarSelectors.selectLocation(),
  total: searchBarSelectors.selectTotal(),
  offset: searchBarSelectors.selectOffset(),
  mappedBusinesses: searchBarSelectors.selectMappedBusinesses(),
  userName: headerSelectors.selectUserName(),
  searching: searchBarSelectors.selectSearching(),
});

HomePage.propTypes = {
  mappedBusinesses: React.PropTypes.object,
  userName: React.PropTypes.string,
  addUserToVenue: React.PropTypes.func,
  removeUserFromVenue: React.PropTypes.func,
  total: React.PropTypes.number,
  offset: React.PropTypes.number,
  loadNextResults: React.PropTypes.func,
  loadPreviousResults: React.PropTypes.func,
  location: React.PropTypes.string,
  searching: React.PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
