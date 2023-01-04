import React from 'react';
import styled from 'styled-components';
import CategoryHeader from '../components/categories/CategoryHeader';
import WomenCategory from '../components/categories/WomenCategory';
import MenCategory from '../components/categories/MenCategory';
import TechCategory from '../components/categories/TechCategory';
import CarCategory from '../components/categories/CarCategory';
import KidsCategory from '../components/categories/KidsCategory';

const Categories = styled.section`
  margin: 0 auto;
  padding-top: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const AllCategories = () => {
  return (
    <Categories>
      <CategoryHeader />
      <WomenCategory />
      <MenCategory />
      <TechCategory />
      <CarCategory />
      <KidsCategory />
    </Categories>
  );
};
