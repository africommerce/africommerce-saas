import { Heading, Content, Links, ListItem, Details } from './quickLinks';
import { ButtonSub } from './subscribe';

export const MyAccount = () => {
  return (
    <Content>
      <Heading>MY ACCOUNT</Heading>
      <hr></hr>
      <Details>
        <ListItem to="/login">
          <Links to="/return">Login</Links>
        </ListItem>
        <ListItem>
          <Links to="/return">Order History</Links>
        </ListItem>
        <ListItem>
          <Links to="/wishlist">My Wishlist</Links>
        </ListItem>
        <ListItem>
          <Links to="/order">Track Order</Links>
        </ListItem>
        <ListItem>
          <Links to="/seller">Be an affiliate partner</Links>
        </ListItem>

        <Heading>BE A SELLER</Heading>
        <hr></hr>

        <ButtonSub style={{marginTop:"5px"}}>Apply Now</ButtonSub>
      </Details>
    </Content>
  );
};
