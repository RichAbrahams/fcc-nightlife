/**
*
* HomePageHeader
*
*/

import React from 'react';
import YelpLogo from './yelp-2c.png';
import Img from './Img';
import Wrapper from './Wrapper';

function HomePageHeader(props) {
  const { location } = props;
  return (
    <Wrapper>
      { location && <h2>Displaying bars located in {location}</h2>}
      { !location && <h2>Enter location to find bars in your area</h2>}
      <h3>Results provided by</h3>
      <Img src={YelpLogo} alt="yelp logo" />
    </Wrapper>
  );
}

HomePageHeader.propTypes = {
  location: React.PropTypes.string,
};

export default HomePageHeader;
