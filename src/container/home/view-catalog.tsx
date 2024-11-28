import TitleField from '@/components/common/title-field';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const ViewCatalog = (props: Props) => {
  return (
    <Container maxWidth="lg" sx={{ width: '100%', py: { xs: 2, md: 4 } }}>
      <Box width={'100%'} display={'flex'} flexDirection={'column'} gap={{ xs: 2, md: 3 }}>

        {/*<Container maxWidth="lg">
      <Box display={'flex'} flexDirection={'column'} justifyItems={'center'} py={4}>*/}
        <div style={{ paddingTop: 60, paddingBottom: 12 }}>
          <TitleField title="สนใจดูงานพิมพ์อื่นๆ ในเเคตตาล็อก คลิกด้านล่างได้ค่ะ" />
          <Link href={'/catalog'}>
            <Box
              position="relative"
              width="100%"
              maxWidth="1200px"
              mt={{ xs: 2, md: 4 }}
              sx={{
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f89921',
                borderRadius: '35px',
                textDecoration: 'none',
                paddingLeft: '10px',
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  paddingLeft: '5px',
                  borderRadius: '20px',
                },
              }}
            >
              <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={3} md={4} display="flex" justifyContent="center" alignItems="center">
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '3rem', sm: '5rem', md: '9rem' },
                      fontWeight: 'bold',
                      color: '#000000',
                      textDecoration: 'none',
                      '@media (max-width: 600px)': {
                        fontSize: '2rem',
                      },
                    }}
                  >
                    คลิก!
                  </Typography>
                </Grid>

                <Grid item xs={6} md={5}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.3rem' },
                      fontWeight: 'normal',
                      color: '#000000',
                      marginLeft: '8px',
                      textDecoration: 'none',
                      '@media (max-width: 600px)': {
                        fontSize: '1.2rem',
                        textAlign: 'left',
                        marginLeft: '5px',
                      },
                    }}
                  >
                    เข้าชมแคตตาล็อก
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: '1.2rem', sm: '2.5rem', md: '2.5rem' },
                      fontWeight: 'normal',
                      color: '#000000',
                      marginLeft: '8px',
                      textDecoration: 'none',
                      '@media (max-width: 600px)': {
                        fontSize: '1.2rem',
                        textAlign: 'left',
                        marginLeft: '5px',
                      },
                    }}
                  >
                    ร่วมงานสื่อส่งเสริมการขาย
                  </Typography>
                </Grid>

                <Grid item xs={3} md={3} display="flex" justifyContent="center" alignItems="center">
                  <Box
                    sx={{
                      width: { xs: '160px', sm: '240px', md: '266px' },
                      height: { xs: '120px', sm: '180px', md: '200px' },
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingRight: '10px',
                      '@media (max-width: 600px)': {
                        width: '133px',
                        height: '100px',
                        paddingRight: '5px',
                      },
                    }}
                  >
                    <Image
                      src="/images/icon/catalog-banner-1.png"
                      alt="interest product"
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                      className="drop-shadow"
                      unoptimized={true}
                    />
                  </Box>
                </Grid>
              </Grid>

              {/* ของเดิม */}
              {/* <Box position="relative" width="100%" height={'100%'}>
              <Image
                src="/images/catalog-banner.png"
                alt="interest product"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                className="drop-shadow"
                unoptimized={true}
              />
            </Box>*/}

            </Box>
          </Link>
        </div>
      </Box>
    </Container>
  );
};

export default ViewCatalog;
