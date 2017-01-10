/**
*
* SignIn
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import Button from './Button';
import SignInModel from 'components/SignInModel';
import SignOut from 'components/SignOut';

function SignIn(props) {
  const { showModel, userName, disableSignIn, showSignIn, hideSignIn, socialSignIn, signOut, error } = props;
  return (
    <Wrapper>
      {showModel && <SignInModel
        hideSignIn={hideSignIn}
        disableSignIn={disableSignIn}
        socialSignIn={socialSignIn}
        error={error}
      />}
      {!userName && <Button onClick={showSignIn}>
      Sign In
      </Button>}
      {userName && <SignOut
        userName={userName}
        signOut={signOut}
      /> }
    </Wrapper>
  );
}

SignIn.propTypes = {
  showModel: React.PropTypes.bool,
  userName: React.PropTypes.string,
  disableSignIn: React.PropTypes.bool,
  showSignIn: React.PropTypes.func,
  hideSignIn: React.PropTypes.func,
  socialSignIn: React.PropTypes.func,
  signOut: React.PropTypes.func,
  error: React.PropTypes.string,
};


export default SignIn;
