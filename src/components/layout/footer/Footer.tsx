import React from 'react';

import {StyledFooter, Tribute} from './style';



const Footer: React.FC = () => {

  return (
    <StyledFooter >
        <Tribute>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></Tribute>
    </StyledFooter>
  );
};

export default Footer;