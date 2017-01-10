/*
 *
 * Header
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Logo from 'components/Logo';
import SignIn from 'components/SignIn';
import Wrapper from './Wrapper';
import * as actions from './actions';
import * as selectors from './selectors';

export class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Wrapper>
        <Logo />
        <SignIn
          showModel={this.props.showModel}
          userName={this.props.userName}
          disableSignIn={this.props.disableSignIn}
          showSignIn={this.props.showSignIn}
          hideSignIn={this.props.hideSignIn}
          socialSignIn={this.props.socialSignIn}
          signOut={this.props.signOut}
          error={this.props.error}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  showModel: selectors.selectShowModel(),
  signedIn: selectors.selectSignedIn(),
  userName: selectors.selectUserName(),
  disableSignIn: selectors.selectDisableSignIn(),
  error: selectors.selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    showSignIn: () => dispatch(actions.showSignIn()),
    hideSignIn: () => dispatch(actions.hideSignIn()),
    socialSignIn: (provider) => dispatch(actions.socialSignIn(provider)),
    signOut: () => dispatch(actions.signOut()),
  };
}

Header.propTypes = {
  showModel: React.PropTypes.bool,
  userName: React.PropTypes.string,
  disableSignIn: React.PropTypes.bool,
  showSignIn: React.PropTypes.func,
  hideSignIn: React.PropTypes.func,
  socialSignIn: React.PropTypes.func,
  signOut: React.PropTypes.func,
  error: React.PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
