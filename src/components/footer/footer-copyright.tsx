import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

type Props = {};

const FooterCopyRight = (props: Props) => {
  return (
    <Container maxWidth="xl">
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap={2} py={2}>
        <Box
          position={'relative'}
          display={{ xs: 'none', sm: 'block' }}
          width={{ sm: 64, md: 120, lg: 192 }}
          height={{ xs: 40, sm: 60, lg: 90 }}
        >
          <Image
            src={'/images/logo-grey.png'}
            alt="logo footer"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </Box>
        <Typography
          variant="body1"
          color="greyText.main"
          align="center"
          fontSize={{ xs: 12, sm: 16, md: 24, lg: 36 }}
          fontWeight={700}
        >
          Copyright © 2024 Get print and press All Right Reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default FooterCopyRight;
