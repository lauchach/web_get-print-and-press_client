import { footerList } from '@/constant/message/footer/message';
import { URL_PRODUCT } from '@/constant/url/url';
import { requestGet } from '@/utils/request';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FooterContactInfo from './footer-contact-info';
import FooterList from './footer-list';
import FooterWorkingHour from './footer-working-hour';

type Props = {};

const FooterDescription = async (props: Props) => {
  let result;
  try {
    const res = await requestGet(URL_PRODUCT);

    if (!res.status || res.result.length < 1) {
      return null;
    }

    const genList = [
      {
        title: 'สื่อ POSM สินค้าและร้านค้า',
        link: '/',
        lists: res.result.productEvent.map((list: { title: any; id: any }) => {
          return { name: list.title, link: `/product/${list.id}` };
        }),
      },
      {
        title: 'สื่อส่งเสริมการขาย งานอีเวนท์',
        link: '/',
        lists: res.result.productPackage.map((list: { title: any; id: any }) => {
          return { name: list.title, link: `/product/${list.id}` };
        }),
      },
      {
        title: 'สื่อส่งเสริมการขาย แพคเกจจิ้ง',
        link: '/',
        lists: res.result.productShop.map((list: { title: any; id: any }) => {
          return { name: list.title, link: `/product/${list.id}` };
        }),
      },
    ];

    result = genList;
  } catch (error) {
    return null;
  }
  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={6} px={{ xs: 0, xl: 12 }}>
        <Grid item xs={12} md={4} pr={2}>
          <Grid container>
            <Grid item xs={12} lg={12}>
              <Box display="flex" flexDirection="column" mr={2} mb={2}>
                <Typography variant="body1" color="background.default" fontSize={{ xs: 14 }}>
                  โรงพิมพ์สื่อส่งเสริมการขาย จบ ครบที่นี่
                </Typography>
                <Typography
                  variant="body1"
                  color="background.default"
                  fontWeight={700}
                  fontSize={{ xs: 14 }}
                >
                  GET PRINT AND PRESS
                </Typography>
                <Typography variant="body1" color="background.default" fontSize={{ xs: 14 }} style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                  เราคือผู้ผลิตสื่อส่งเสริมการขายที่เน้นคุณภาพ และบริการหลังการขาย เพื่อให้ลูกค้าได้มีสื่อการขายที่โดดเด่นและตรงความต้องการ
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} lg={12} order={{ xs: 1, lg: 2 }}>
              <FooterWorkingHour />
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
            {result && (
              <>
                {result.map((list, index) => (
                  <FooterList key={index} title={list.title} lists={list.lists} />
                ))}
              </>
            )}

            <div>
              {footerList.map((list, index) => (
                <FooterList key={index} title={list.title} lists={list.lists} />
              ))}
              <div style={{ paddingTop: 16 }}>
              <FooterContactInfo />
              </div>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FooterDescription;

export const dynamic = 'force-dynamic';
