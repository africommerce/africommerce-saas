import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
 padding: 1% 5% 5%;
 margin-bottom: 0; 
  `
const About = styled.h1`
font-family: "Open Sans", sans-serif;
font-size: 24px;
font-weight: 600;
color:  rgb(27, 27, 40);
line-height: 28.8px;
`

const Section1 = styled.div`
display: flex;
justify-content: space-between; 
margin-bottom: 3%;
margin-top: 0;
 `

const Section2 = styled.div`
  max-width: 100%;
  padding: 3%;
  max-height: 100%;
  justify-content: center;
  background: white;
  text-align: justify;
  `
const P1 = styled.h2`
margin-bottom: 2%;
`
const P2 = styled.p`
margin-bottom: 2%;
`
const P4 = styled.p`
margin-bottom: 2%;
font-family: Rubik, Arial, sans-serif;
font-size: 14px;
font-weight: bold;
font-size: 15px;
line-height: 21px;
color: rgb(44, 62, 80);
`

const Stylelink= styled.a`
text-decoration: none;
font-weight: bold;
color: black !important;
`

export const AboutUs = () => {
  return (
    <Container>
      <Section1>
          <div><About>About us</About></div>
          <div>Home /<Stylelink href ="./about us">"About us"</Stylelink></div>
      </Section1>
      <Section2>
        <P1>Welcome To WebsiteName</P1>
        <P2>WebsiteName is a Professional WebsiteType Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of WebsiteType, with a focus on dependability and WebsiteSpeciality. We're working to turn our passion for WebsiteType into a booming online website. We hope you enjoy our WebsiteType as much as we enjoy offering them to you.</P2>
        <P2>I will keep posting more important posts on my Website for all of you. Please give your support and love.</P2>
        <P4>Thanks For Visiting Our Site</P4>
      </Section2>
    </Container>
  );
};
