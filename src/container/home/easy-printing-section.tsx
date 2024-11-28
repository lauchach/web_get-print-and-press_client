import { EasyPrintTitle } from '@/constant/message/home/message';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

type Props = {};

const EasyPrintingSection = (props: Props) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: { xs: 2, md: 4 } }}>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={{ xs: 2 }}
        mb={{ xs: 2 }}
      >
        <Typography
          fontSize={{
            lg: 36,
            md: 30,
            sm: 26,
            xs: 20,
          }}
          align="center"
          variant='h2'
          fontWeight={400}
          color="primary.main"
          sx={{ textWrap: 'balance' }}
        >
          สั่งพิมพ์งานง่าย ๆ ที่
        </Typography>
        <Box
          position={'relative'}
          sx={{
            width: {
              lg: 176,
              md: 146,
              sm: 126,
              xs: 100,
            },
            height: {
              lg: 84,
              md: 70,
              sm: 60,
              xs: 50,
            },
          }}
        >
          <Image
            src={'/images/logo-yellow-blue.webp'}
            alt="logo"
            quality={100}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            objectFit="contain"
          />
        </Box>
      </Box>
      <Typography
        fontSize={{ xs: 14, sm: 16, md: 20, lg: 26 }}
        align="center"
        sx={{
          wordBreak: { md: 'break-word' },
          overflowWrap: { md: 'break-word' },
          whiteSpace: { md: 'pre-wrap' },
        }}
        color="primary.main"
      >
        {EasyPrintTitle}
      </Typography>
    </Container>
  );
};

export default EasyPrintingSection;
