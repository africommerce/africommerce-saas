import { Card, Box, ImageListItem } from '@mui/material';
import styled from 'styled-components';
import { device } from '../styles/BreackPoints';
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.mobileM} {
    grid-template-columns: repeat(1, 1fr);
  }
  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function BrandCard() {
  return (
    <div>
      <Container>
        {itemData.map((item) => (
          <Box
            sx={{
              m: 1,
              '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                cursor: 'pointer',
              },
            }}
          >
            <Card variant="outlined" sx={{ px: 3, py: 1 }}>
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            </Card>
          </Box>
        ))}
      </Container>
    </div>
  );
}

const itemData = [
  {
    img: 'https://i.ibb.co/X2fZ7VH/ford.jpg',
    title: 'ford',
  },
  {
    img: 'https://i.ibb.co/0h4rrLK/chevrolet.jpg',
    title: 'chevrolet',
  },
  {
    img: 'https://i.ibb.co/9cYfRxt/audi.jpg',
    title: 'Audi',
  },
  {
    img: 'https://i.ibb.co/fGdXT4v/hyndai.jpg',
    title: 'hyndai',
  },
  {
    img: 'https://i.ibb.co/tMkt7MH/nissan.jpg',
    title: 'nissan',
  },
  {
    img: 'https://i.ibb.co/rwpQ8g7/bmw.jpg',
    title: 'bmw',
  },
  {
    img: 'https://i.ibb.co/QCxKVxG/merc-benz.jpg',
    title: 'mercedez-benz',
  },
  {
    img: 'https://i.ibb.co/CbVLGQq/toyota.jpg',
    title: 'toyota',
  },
  {
    img: 'https://i.ibb.co/H7bkZQF/suzuki.jpg',
    title: 'suzuki',
  },
  {
    img: 'https://i.ibb.co/zXXC7Fv/mitsu.jpg',
    title: 'mitsubishi',
  },
  {
    img: 'https://i.ibb.co/jbWz74D/honda.jpg',
    title: 'honda',
  },
  {
    img: 'https://i.ibb.co/QCSphBq/volvo.jpg',
    title: 'volvo',
  },
  {
    img: 'https://i.ibb.co/MNbwwbB/yamaha.jpg',
    title: 'yamaha',
  },
  {
    img: 'https://i.ibb.co/1bhZGsL/brighton.jpg',
    title: 'brighton',
  },
  {
    img: 'https://i.ibb.co/Zd6KC11/tani-logo.jpg',
    title: 'tani',
  },
  {
    img: 'https://i.ibb.co/Bjkf3NM/victoria-secret-logo.jpg',
    title: 'victoria',
  },
  {
    img: 'https://i.ibb.co/93gbGvr/dior-logo.jpg',
    title: 'dior',
  },
  {
    img: 'https://i.ibb.co/dpnxLfb/bucketfet-logo.jpg',
    title: 'bucketfet',
  },
  {
    img: 'https://i.ibb.co/gMpSPxR/jl-logo.jpg',
    title: 'jl',
  },
  {
    img: 'https://i.ibb.co/NF7DB2p/lor-logo.jpg',
    title: 'lor',
  },

  {
    img: 'https://i.ibb.co/6JWYzsC/rolex-logo.jpg',
    title: 'rolex',
  },
  {
    img: 'https://i.ibb.co/JHtQnNK/polo-lauren-logo.jpg',
    title: 'polo',
  },
  {
    img: 'https://i.ibb.co/nC3bRcN/aigner.jpg',
    title: 'aigner',
  },
  {
    img: 'https://i.ibb.co/0hNsqv8/omega.jpg',
    title: 'omega',
  },
  {
    img: 'https://i.ibb.co/JyWXnR3/axe.jpg',
    title: 'axe',
  },
  {
    img: 'https://i.ibb.co/SB9kfb8/adidas.jpg',
    title: 'adidas',
  },
  {
    img: 'https://i.ibb.co/GCkYqj2/nike.jpg',
    title: 'nike',
  },
  {
    img: 'https://i.ibb.co/fGdXT4v/hyndai.jpg',
    title: 'hyndai',
  },
  {
    img: 'https://i.ibb.co/Sc0MffV/reebok.jpg',
    title: 'reebok',
  },
  {
    img: 'https://i.ibb.co/tD1xWsH/samsung.jpg',
    title: 'samsung',
  },
  {
    img: 'https://i.ibb.co/LJh37Jz/apple.jpg',
    title: 'apple',
  },
  {
    img: 'https://i.ibb.co/r2rRnHm/dell.jpg',
    title: 'dell',
  },
  {
    img: 'https://i.ibb.co/7VpKKgD/acer.jpg',
    title: 'acer',
  },
  {
    img: 'https://i.ibb.co/cbtZqSW/asus.jpg',
    title: 'asus',
  },
  {
    img: 'https://i.ibb.co/SV1WG7c/sony.jpg',
    title: 'sony',
  },
  {
    img: 'https://i.ibb.co/dc2zBx3/lenovo.jpg',
    title: 'lenovo',
  },
  {
    img: 'https://i.ibb.co/34730xW/corsair.jpg',
    title: 'corsair',
  },
  {
    img: 'https://i.ibb.co/ZBz2Px9/microsoft.jpg',
    title: 'microsoft',
  },
  {
    img: 'https://i.ibb.co/qdfM4X6/hitachi.jpg',
    title: 'hitachi',
  },
  {
    img: 'https://i.ibb.co/Bjkf3NM/JxY2Dw5/lakme.jpg',
    title: 'lakme',
  },
  {
    img: 'https://i.ibb.co/dkdLxDG/logitech.jpg',
    title: 'logitech',
  },
  {
    img: 'https://i.ibb.co/k676m33/ck.jpg',
    title: 'ck',
  },
  {
    img: 'https://i.ibb.co/0fdkJ6G/litte-pet.jpg',
    title: 'little-pet',
  },
  {
    img: 'https://i.ibb.co/pJGSdVv/babytv.jpg',
    title: 'babytv',
  },

  {
    img: 'https://i.ibb.co/xGCXYt6/kicker.jpg',
    title: 'kicker',
  },
  {
    img: 'https://i.ibb.co/6vgv7YR/lucky.jpg',
    title: 'lucky',
  },
  {
    img: 'https://i.ibb.co/4SWTDTH/nihal.jpg',
    title: 'nihal',
  },
  {
    img: 'https://i.ibb.co/XSBfvkw/elle.jpg',
    title: 'elle',
  },
  {
    img: 'https://i.ibb.co/rmBmg83/the-crystal.jpg',
    title: 'the-crystal',
  },
  {
    img: 'https://i.ibb.co/V2Q6xJh/dg.jpg',
    title: 'dg',
  },
  {
    img: 'https://i.ibb.co/jzf5bvJ/hudson-logo.jpg',
    title: 'hudson',
  },
  {
    img: 'https://i.ibb.co/D8fLdYZ/muratti-logo.jpg',
    title: 'muratti',
  },
  {
    img: 'https://i.ibb.co/Jpr5BKZ/breiting.jpg',
    title: 'breiting',
  },
  {
    img: 'https://i.ibb.co/TWpDM4k/burberry.jpg',
    title: 'burberry',
  },
  {
    img: 'https://i.ibb.co/NKd90zj/huawei-logo.jpg',
    title: 'huawei',
  },
  {
    img: 'https://i.ibb.co/CVYncn9/htc-logo.jpg',
    title: 'dell',
  },
  {
    img: 'https://i.ibb.co/PTStHVp/nokia-logo.jpg',
    title: 'nokia',
  },
  {
    img: 'https://i.ibb.co/mB17Cv1/johnson-baby.jpg',
    title: 'johnson-baby',
  },
  {
    img: 'https://i.ibb.co/G3VV4Jn/nestle.jpg',
    title: 'nestle',
  },
  {
    img: 'https://i.ibb.co/YQV9FsK/babiesrus.jpg',
    title: 'babiesrus',
  },
  {
    img: 'https://i.ibb.co/ZYYrkg9/pampers.jpg',
    title: 'pampers',
  },
  {
    img: 'https://i.ibb.co/G0CgbSM/belly-baby.jpg',
    title: 'belly-baby',
  },
  {
    img: 'https://i.ibb.co/vkd9R2R/baby-care.jpg',
    title: 'baby-care',
  },
  {
    img: 'https://i.ibb.co/D1fQjXQ/nestle-baby.jpg',
    title: 'nestle-baby',
  },
  {
    img: 'https://i.ibb.co/kqDD6sy/razer-logo.jpg',
    title: 'razer-logo',
  },
  {
    img: 'https://i.ibb.co/2MXyTBs/loreal-log.jpg',
    title: 'loreal-log',
  },
  {
    img: 'https://i.ibb.co/0fdkJ6G/zhxbpLX/dove-logo.jpg',
    title: 'dove-logo',
  },
  {
    img: 'https://i.ibb.co/rcd7Ksp/nyx-logo.jpg',
    title: 'nyx-logo',
  },

  {
    img: 'https://i.ibb.co/KrDt9Bp/guess.jpg',
    title: 'guess',
  },
  {
    img: 'https://i.ibb.co/Ctn0GcV/mac.jpg',
    title: 'mac',
  },
  {
    img: 'https://i.ibb.co/8nkPBHL/flormar.jpg',
    title: 'flormar',
  },
  {
    img: 'https://i.ibb.co/JmXt2gJ/sephora.jpg',
    title: 'sephora',
  },
  {
    img: 'https://i.ibb.co/pK6rDCd/urban-decay.jpg',
    title: 'urban-decay',
  },
  {
    img: 'https://i.ibb.co/ZYZGWwY/maybell.jpg',
    title: 'maybell',
  },
  {
    img: 'https://i.ibb.co/0mdCy26/lexinton.jpg',
    title: 'lexinton',
  },
  {
    img: 'https://i.ibb.co/gS1vWCv/jade.jpg',
    title: 'jade',
  },

  {
    img: 'https://i.ibb.co/WPKC7KK/apato.jpg',
    title: 'apato',
  },
  {
    img: 'https://i.ibb.co/KzpLYdR/brooks.jpg',
    title: 'brooks',
  },
  {
    img: 'https://i.ibb.co/nsL7YJP/decor.jpg',
    title: 'decor',
  },
  {
    img: 'https://i.ibb.co/dBrhQG1/itd.jpg',
    title: 'itd-logo',
  },
  {
    img: 'https://i.ibb.co/rfBCkwZ/intero.jpg',
    title: 'intero.',
  },
  {
    img: 'https://i.ibb.co/dWsGGJs/horse-logo.jpg',
    title: 'horse-logo',
  },
  {
    img: 'https://i.ibb.co/k9Ymczn/joules.jpg',
    title: 'joules',
  },
  {
    img: 'https://i.ibb.co/bgvzB4x/google.jpg',
    title: 'google',
  },
  {
    img: 'https://i.ibb.co/C9NXsM0/alosa.jpg',
    title: 'alosa',
  },
  {
    img: 'https://i.ibb.co/PgjkZGK/denim.jpg',
    title: 'denim',
  },
  {
    img: 'https://i.ibb.co/GV1JvLd/royal.jpg',
    title: 'royal.',
  },
  {
    img: 'https://i.ibb.co/nftzqLs/bensx.jpg',
    title: 'bensx',
  },
  {
    img: 'https://i.ibb.co/Z2fDssf/oneplus.jpg',
    title: 'oneplus',
  },
  {
    img: 'https://i.ibb.co/sgnkb7r/roll-royce.jpg',
    title: 'roll-royce',
  },
];
