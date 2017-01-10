/**
*
* LoginModel
*
*/

import React from 'react';
import FullScreenCover from './FullScreenCover';
import Wrapper from './Wrapper';
import Button from './Button';
import CloseWrapper from './CloseWrapper';
import CloseButton from './CloseButton';
import FontAwesome from 'react-fontawesome';
import SpinnerWrapper from './SpinnerWrapper';
import Msg from './Msg';
import ModelText from './ModelText';

function SignInModel(props) {
  const { hideSignIn, socialSignIn, disableSignIn, error } = props;
  return (
    <FullScreenCover>
      <Wrapper>
        {!disableSignIn &&
          <ModelText>
            <h2>Sign in with</h2>
            <Button
              onClick={() => socialSignIn('google')}
            >
              <FontAwesome
                name="google"
                size="lg"
              />
            </Button>
            <Button
              onClick={() => socialSignIn('twitter')}
            >
              <FontAwesome
                name="twitter"
                size="lg"
              />
            </Button>
            {error && <Msg>{error}</Msg>}
          </ModelText>}
        {disableSignIn &&
          <SpinnerWrapper>
            <FontAwesome
              name="spinner"
              spin
              size="5x"
            />
          </SpinnerWrapper>
        }
        <CloseWrapper>
          <CloseButton onClick={hideSignIn}>
            close
          </CloseButton>
        </CloseWrapper>
      </Wrapper>
    </FullScreenCover>
  );
}

SignInModel.propTypes = {
  hideSignIn: React.PropTypes.func,
  socialSignIn: React.PropTypes.func,
  disableSignIn: React.PropTypes.bool,
  error: React.PropTypes.string,
};

export default SignInModel;
