import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const HeadText = styled.h1`
  font-size: 1.5rem;
  margin-right: 45rem;
  cursor: pointer;
`;

const HeadLink = styled.p`
  cursor: pointer;
`;


function CategoryHeader() {
  return (
    <Head>
      <HeadText>All Categories</HeadText>
      <HeadLink>Home/Categories</HeadLink>
    </Head>
  );
}

export default CategoryHeader;
