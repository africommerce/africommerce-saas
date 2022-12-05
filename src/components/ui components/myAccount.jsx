import { Heading, Content, Links, ListItem, Details } from './quickLinks';
import { ButtonSub } from './subscribe';

export const MyAccount = () => {
  return (
    <Content>
      <Heading>MY ACCOUNT</Heading>
      <hr></hr>
      <Details>
        <ListItem>
          <Links to="/auth">Login</Links>
        </ListItem>
        <ListItem>
          <Links to="/order-history">Order History</Links>
        </ListItem>
        <ListItem>
          <Links to="/wishlist">My Wishlist</Links>
        </ListItem>
        <ListItem>
          <Links to="/track-order">Track Order</Links>
        </ListItem>
        <ListItem>
          <Links to="/partner">Be an affiliate partner</Links>
        </ListItem>

        <Heading>BE A SELLER</Heading>
        <hr></hr>

        <ButtonSub style={{ marginTop: '5px' }}>Apply Now</ButtonSub>
      </Details>
    </Content>
  );
};
