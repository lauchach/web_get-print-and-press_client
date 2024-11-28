/* eslint-disable @next/next/no-img-element */
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

type Props = {};

const FooterBanner = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        gap={6}
        width="100%"
      >
        <Box display="flex" alignItems="center" justifyContent="center" mx="auto" width="100%">
          <Typography
            variant="body1"
            color="yellowText.main"
            fontSize={{ xs: 14, sm: 24, md: 30, lg: 36 }}
          >
            สั่งงาน
          </Typography>
          <Box
            position="relative"
            width="100%"
            maxWidth={{ xs: 64, sm: 150, md: 200, lg: 250 }}
            height={{ xs: 24, sm: 56, md: 100, lg: 158 }}
          >
            <Image
              src="/images/logo-yellow-blue.webp"
              alt="logo"
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: 'cover' }}
              unoptimized={true}
            />
          </Box>
          <Typography
            variant="body1"
            color="yellowText.main"
            fontSize={{ xs: 14, sm: 24, md: 30, lg: 36 }}
          >
            “ครบ จบ ทุกงานสื่อส่งเสริมการขาย
          </Typography>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          width="100%"
          justifyContent="center"
          gap={6}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <Box key={index} width={{ xs: '30%', sm: '15%', md: '12%', lg: '12%' }}>
              <Box position="relative" display="flex" justifyContent="center">
                <img
                  src={`/images/partner/partner-${index}.webp`}
                  alt={`partner-${index}`}
                  // width={74}
                  // height={74}
                  // quality={100}
                  style={{
                    objectFit: 'contain',
                    height: 'auto',
                    width: '100%',
                    maxHeight: 100,
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default FooterBanner;
