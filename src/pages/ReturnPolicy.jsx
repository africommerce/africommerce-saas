import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
 padding: 1% 5% 5%;
 margin-bottom: 0; 
  `
const Return = styled.h1`
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

const P2 = styled.p`
margin-bottom: 2%;
`

export const ReturnPolicy = () => {
  return (
    <Container>
      <Section1>
          <div><Return>Return Policy Page</Return></div>
          <div>Home / "Return Policy Page</div>
      </Section1>
      <Section2>
        <div>
          <div>
            <P2>Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement and/ or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy. For all products, the returns/replacement policy provided on the product page shall prevail over the general returns policy. Do refer the respective item's applicable return/replacement policy on the product page for any exceptions to this returns policy and the table below</P2>
            <P2>The return policy is divided into three parts; Do read all sections carefully to understand the conditions and cases under which returns will be accepted.</P2>
            <p>Part 1 - Category, Return Window and Actions possible</p>
            <table>
              <thead>
                <tr>
                  <td><p>Category</p></td>
                  <td><p>Returns Window, Actions Possible and Conditions (if any)</p></td>
                </tr>
                <tr>
                  <td>
                    <p>Lifestyle: Jewellery, Footwear Accessories, Travel Accessories, Watch Accessories, etc..</p>
                    <p>Home: Pet Supplies & Rest of Home. (Except Home décor, Furnishing, Home Improvement Tools, Household Items)</p>
                  </td>
                  <td>
                    <p>10 days</p>
                    <p>Refund or Replacement</p>
                  </td>
                </tr>
                <tr>
                  <td><p>Lifestyle: Watch, Winter Wear (Blazer, Sweatshirt, Scarf, Shawl, Jacket, Coat, Sweater, Thermal, Kid’s Thermal, Track Pant, Shrugs), etc...</p></td>
                  <td>
                    <p>10 days</p>
                    <p>Refund, Replacement or Exchange</p>
                  </td>                
                </tr>
                <tr>
                  <td><p>Lifestyle: T-Shirt, Footwear, Sari, Short, Dress, Kid’s (Capri, Shorts & Tops), Men’s (Ethnic Wear, Shirt, Formals, Jeans, Clothing Accessory), Women’s (Ethnic Wear, Fabric, Blouse, Jean, Skirt, Trousers, Bra), Bags, Raincoat, Sunglass, Belt, Frame, Backpack, Suitcase, Luggage, etc...</p></td>
                  <td>
                    <p>14 days</p>
                    <p>Refund, Replacement or Exchange</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Medicine (Allopathy & Homeopathy)</p>
                  </td>
                  <td>
                    <p>2 days</p>
                    <p>Refund or replacement</p>
                  </td>
                </tr>
                <tr>
                  <td><p>Books (All books)</p>
                  <p>Sports Equipments (Racquet, ball, support, gloves, bags etc.)</p>
                  <p>Exercise & Fitness Equipments (Home Gym combos, dumbbell etc.)</p>
                  <p>Auto Accessories - Car and Bike accessories (helmets, car kit, media players etc.)</p>
                </td>
                <td>
                  <p>7 days Replacement only</p>
                  <p>Free replacement will be provided within 7 days if the product is delivered in defective/damaged condition or different from the ordered item.</p>
                  <p>Please keep the product intact, with original accessories, user manual and warranty cards in the original packaging at the time of returning the product.</p>
                </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </Section2>
    </Container>
  );
};
