import { LINE_LINK } from '@/constant/message/info/message';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title?: string;
};

const InterestProduct = (props: Props) => {
  const { title } = props;
  return (

    <Box p={2} maxWidth="lg" mx="auto">
      <div style={{ paddingTop: 36, paddingBottom: 12 }}>
        {title && <Typography textAlign="center" fontWeight={500} mb={1} sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>{title}</Typography>}

        <Link href={LINE_LINK} target="_blank" passHref>
          <Box
            position="relative"
            bgcolor="#3bad46"
            borderRadius="35px"
            p={2}
            width="100%"
            height={'100%'}
            // maxWidth="1200px"
            sx={{
              textDecoration: 'none',
              color: 'white',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              '@media (max-width: 768px)': {
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: '20px',
                justifyContent: 'space-between',
              },
            }}
          >
            <Grid container alignItems="center" justifyContent="space-between">
              {/* คอลัมน์ที่ 1*/}
              <Grid item xs={9} md={9} display="flex" flexDirection="column" justifyContent="center">
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '4rem', lg: '4.7rem' },
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    marginBottom: { xs: '8px', md: '16px' },
                    '@media (max-width: 600px)': {
                      fontSize: '1.5rem',
                    },
                  }}
                >
                  สอบถามสินค้า/ราคา
                </Typography>

                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    marginTop: { xs: '2.5px', md: '2px' },
                    '@media (max-width: 600px)': {
                      //marginTop: '2px',
                      fontSize: '2.2rem',
                    },
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#f47f20',
                      color: '#FFFFFF',
                      padding: { xs: '4px 10px', md: '4px 24px' },
                      borderRadius: '18px',
                      fontSize: { xs: '0.9rem', sm: '1.5rem', md: '3.2rem' },
                      fontWeight: 'normal',
                      textAlign: 'center',
                      marginRight: { xs: '6px', md: '20px' },
                      '@media (max-width: 600px)': {
                        fontSize: '0.8rem',
                      },
                    }}
                  >
                    สแกนเลย
                  </Box>

                  <Box
                    display="flex"
                    alignItems="center"
                  >
                    <Image
                      src="/images/icon/line-white.webp"
                      alt="LINE"
                      width={40}
                      height={40}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'contain', marginRight: '8px' }}
                      className="drop-shadow"
                      unoptimized={true}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '0.9rem', sm: '1.6rem', md: '2.9em' },
                        color: '#FFFFFF',
                        '@media (max-width: 600px)': {
                          fontSize: '0.8rem',
                          marginRight: '4px',
                        },
                      }}
                    >
                      @getprintpress
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* คอลัมน์ที่ 2: QR Code */}
              <Grid
                item
                xs={3}
                md={3}
                display="flex"
                justifyContent="left"
                sx={{
                  '@media (max-width: 768px)': {
                    justifyContent: "left",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: '60px', sm: '150px', md: '200px' },
                    height: { xs: '60px', sm: '150px', md: '200px' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    src="/images/icon/line-qrcode.webp"
                    alt="LINE QR Code"
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
          </Box>
        </Link>
      </div>
    </Box>

  );
};

export default InterestProduct;