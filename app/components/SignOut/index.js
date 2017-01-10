/**
*
* SignOut
*
*/

import React from 'react';
import UserWrapper from './UserWrapper';
import Wrapper from './Wrapper';
import IconWrapper from './IconWrapper';
import FontAwesome from 'react-fontawesome';
import Span from './Span';

function SignOut(props) {
  const { userName, signOut } = props;
  return (
    <Wrapper>
      <UserWrapper>
        <Span>Welcome</Span>
        <Span>{userName}</Span>
      </UserWrapper>
      <IconWrapper onClick={signOut}>
        <Span>Sign Out</Span>
        <FontAwesome
          name="sign-out"
          size="2x"
        />
      </IconWrapper>
    </Wrapper>
  );
}

SignOut.propTypes = {
  userName: React.PropTypes.string,
  signOut: React.PropTypes.func,
};

export default SignOut;
