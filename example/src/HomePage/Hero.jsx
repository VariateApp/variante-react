import React from 'react';
import styled from 'styled-components';

import { VariateComponent } from './../../../build';
import { useVariate } from './../../../build';

const HeroContainer = styled.section`
  background: url(${props => props.backgroundImage}) no-repeat;
  backgroundSize: contain;
  height: 400px;
  background-size: cover;
`;

const HeroTitle = styled.h1`
  position: absolute;
  top: 100px;
  left: 100px;
  font-size: 40px;
  color: #fff; 
`;

const ConversionLink = styled.a`
  position: absolute;
  top: 200px;
  left: 100px;
  display: block;
  width: 50px;
  margin: 20px 0;
  padding: 20px;
  background: #aec6cf;
`;

const Hero = ({
  defaultContent
}) => {

  const { content, variate } = useVariate('Hero', defaultContent);

  return (
    <HeroContainer backgroundImage={content.backgroundImage}>
      <HeroTitle>{content.title}</HeroTitle>
      <ConversionLink onClick={e => {
        e.preventDefault();
        variate.track('Conversion');
      }}>Convert</ConversionLink>
    </HeroContainer>
  )
}

// const Hero = ({
//   content
// }) => (
//   <VariateComponent componentName="Hero" defaultContent={content}>
//   {({ content, variate }) => (
//     <HeroContainer backgroundImage={content.backgroundImage}>
//       <HeroTitle>{content.title}</HeroTitle>
//       <ConversionLink onClick={e => {
//         e.preventDefault();
//         variate.track('Conversion');
//       }}>Convert</ConversionLink>
//     </HeroContainer>
//   )}
//   </VariateComponent>
// );

Hero.defaultProps = {
  defaultContent: {
    title: "No Experiment Is Running",
    backgroundImage: 'https://www.filmindependent.org/wp-content/uploads/2016/02/hero-placeholder-768x293.png'
  }
}

export default Hero;