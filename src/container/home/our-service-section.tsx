import TitleField from '@/components/common/title-field';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const OurServiceSection = (props: Props) => {
  return (
    <Container maxWidth="lg" sx={{ width: '100%', py: { xs: 2, md: 4 } }}>
      <Box width={'100%'} display={'flex'} flexDirection={'column'} gap={{ xs: 2, md: 3 }}>
        <TitleField title="บริการของเรา" />
        <Box
          width="100%"
          bgcolor="#EFEFF0"
          mx="auto"
          sx={{
            borderRadius: 4,
            py: { xs: 1, md: 2 },
            px: { xs: 1, md: 2, lg: 6 },
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            width="100%"
            justifyContent="space-between"
            gap={{ md: 2, lg: 4 }}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ color: '#9B5CAD', border: { xs: 1, lg: 1.8 } }}
              />
            }
            spacing={1}
          >

            {/* คอลัมน์ที่ 1: Digital Offset */}
            <Link href="/" passHref>
              <Box
                flexBasis="30%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ height: { xs: 60, sm: 70, md: 80 }, flexDirection: 'row' }}
              >
                <Image
                  src="/images/icon/icon4.webp"
                  alt="Digital Offset"
                  width={65}
                  height={39}
                />
                <Typography
                  variant="h3"
                  color="#f70b32"
                  sx={{ fontSize: { xs: 25, md: 30, lg: 35 }, fontWeight: 'normal', ml: 1 }}
                >
                  Digital Offset
                </Typography>
                <ChevronRightIcon sx={{ fontSize: { xs: 25, md: 35, lg: 42 }, color: "#f70b32" }} /> {/* แทนที่เครื่องหมาย ">" ด้วยไอคอน */}
              </Box>
            </Link>

            {/* คอลัมน์ที่ 2: Inkjet Printing */}
            <Link href="/" passHref>
              <Box
                flexBasis="30%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ height: { xs: 60, sm: 70, md: 80 }, flexDirection: 'row' }}
              >
                <Image
                  src="/images/icon/icon5.webp"
                  alt="Inkjet Printing"
                  width={65}
                  height={39}
                />
                <Typography
                  variant="h3"
                  color="#343c97"
                  sx={{ fontSize: { xs: 25, md: 30, lg: 35 }, fontWeight: 'normal', ml: 1 }}
                >
                  Inkjet Printing
                </Typography>
                <ChevronRightIcon sx={{ fontSize: { xs: 25, md: 35, lg: 42 }, color: "#343c97" }} /> {/* แทนที่เครื่องหมาย ">" ด้วยไอคอน */}
              </Box>
            </Link>

            {/* คอลัมน์ที่ 3: Artwork */}
            <Link href="/catalog" passHref>
              <Box
                flexBasis="30%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ height: { xs: 60, sm: 70, md: 80 }, flexDirection: 'row' }}
              >
                <Image
                  src="/images/icon/icon6.webp"
                  alt="Artwork"
                  width={48}
                  height={54}
                />
                <Typography
                  variant="h3"
                  color="#0ba816"
                  sx={{ fontSize: { xs: 25, md: 30, lg: 35 }, fontWeight: 'normal', ml: 1 }}
                >
                  Artwork
                </Typography>
                <ChevronRightIcon sx={{ fontSize: { xs: 25, md: 35, lg: 42 }, color: "#0ba816" }} /> {/* แทนที่เครื่องหมาย ">" ด้วยไอคอน */}
              </Box>
            </Link>


            {/* ของเดิม */}
            {/*{servicesList.map((service) => (
              <Link href={service.link} key={service.name} passHref>
                <Box
                  width="100%"
                  display="flex"
                  alignItems={{ xs: 'start', md: 'center' }}
                  justifyContent="center"
                  sx={{ height: { xs: 56, sm: 64, md: 72 } }}
                >
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={0}
                    height={0}
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    className="product-service"
                  />
                </Box>
              </Link>
            ))}*/}

          </Stack>
        </Box>
        <Box>
          <Typography
            mt={{ xs: 2, md: 4 }}
            mb={0}
            variant="body1"
            color="primary.main"
            align="center"
            fontSize={{ xs: 16, sm: 20, md: 24, lg: 28, xl: 32 }}
            sx={{
              textWrap: 'balance',
            }}
          >
            สนใจดูรายละเอียดงานพิมพ์อื่นๆ คลิกด้านล่างได้ค่ะ
          </Typography>
          <Typography
            mt={1}
            variant="body2"
            color="primary.main"
            align="center"
            fontSize={{ xs: 14, sm: 18, md: 22, lg: 26 }}
            sx={{
              textWrap: 'balance',
            }}
            fontWeight={300}
          >
            เรามีรายละเอียดสินค้า ราคาพิเศษ และรูปตัวอย่างสินค้า เพื่อเป็นไอเดียค่ะ
          </Typography>
        </Box>
      </Box>

    </Container>
  );
};

export default OurServiceSection;
