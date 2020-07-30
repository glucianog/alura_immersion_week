import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  z-index: 1x;
  padding-top: 50px;
`;

const PageDefault = ({
  children,
}) => (
  <>
    <Menu />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
);

PageDefault.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};

export default PageDefault;
