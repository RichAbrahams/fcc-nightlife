/**
*
* ResultsItem
*
*/

import React from 'react';
import Wrapper from './Wrapper';
import AddressWrapper from './AddressWrapper';
import AttendingWrapper from './AttendingWrapper';
import InnerWrapper from './InnerWrapper';
import H3 from './H3';
import UL from './UL';
import FontAwesome from './Icon';
import IconWrapper from './IconWrapper';
import ControlsWrapper from './ControlsWrapper';
import Button from './Button';
import Span from './Span';

function usersAttending(arr) {
  const iconArr = [];
  for (let i = 0; i < arr.size && i < 5; i += 1) {
    const name = i < 4 ? 'user-circle' : 'plus-circle';
    iconArr.push(
      <FontAwesome
        name={name}
        size="2x"
        key={i}
      />
    );
  }
  if (iconArr.length > 0) {
    return iconArr;
  }
  return <Span>No users are going to this venue.</Span>;
}

function ResultsItem(props) {
  const { venue, userName, addUserToVenue, removeUserFromVenue } = props;
  const address = venue.get('address').map((item, index) => <li key={index}>{item.trim()}</li>);
  const attending = venue.get('attending');
  const attendingIcons = usersAttending(attending);
  const loggedInAttending = attending.indexOf(userName) !== -1;
  return (
    <Wrapper>
      <AddressWrapper userName={userName}>
        <InnerWrapper>
          <H3>{venue.get('name')}</H3>
          <UL>
            {address}
            {<li>{venue.get('telephone')}</li>}
          </UL>
        </InnerWrapper>
      </AddressWrapper>
      <AttendingWrapper userName={userName}>
        <InnerWrapper>
          <H3>Attending</H3>
          <IconWrapper>
            {attendingIcons}
          </IconWrapper>
        </InnerWrapper>
      </AttendingWrapper>
      {userName && <ControlsWrapper>
        {loggedInAttending && <Button onClick={() => removeUserFromVenue({ user: userName, venue: venue.get('id') })}>Remove me</Button>}
        {!loggedInAttending && <Button onClick={() => addUserToVenue({ user: userName, venue: venue.get('id') })}>Sign me up!</Button>}
      </ControlsWrapper>}
    </Wrapper>
  );
}

ResultsItem.propTypes = {
  venue: React.PropTypes.object,
  userName: React.PropTypes.string,
  addUserToVenue: React.PropTypes.func,
  removeUserFromVenue: React.PropTypes.func,
};

export default ResultsItem;
