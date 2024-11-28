import TitleField from '@/components/common/title-field';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Image } from 'antd';
import Link from 'next/link';

type Props = {};

const AboutUsPage = (props: Props) => {
  return (
    <Box component={'section'} height={"auto"} bgcolor={'white.main'}>
      <Image
        alt={'banner'}
        src={"./images/about-us/img-about-us.webp"}
        preview={false}
        width="100%"
        style={{ height: 'auto' }}
      />
      <Container maxWidth="xl" sx={{ p: 6 }}>
        <TitleField title="ติดต่อเรา" />

        {/* <Typography variant="body1" color="background.default" fontSize={{ xs: 14 }}>
          ติดต่อเรา
        </Typography> */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }} >
          <div
            style={{
              paddingTop: 24,
              paddingBottom: 0,
              maxWidth: 1200,
              width: "100%"
            }}
          >
            <div style={{ display: "grid", paddingBottom: 24 }}>
              <Typography variant="body1" color="#343C97" fontSize={{ xs: 18 }}>
                ติดต่อฝ่ายขาย เเละฝ่ายบัญชี
              </Typography>
              <Link href={"tel:064-196-4888"} style={{ textDecoration: 'none', color: "black" }}>
                เบอร์โทร : 064-196-4888
              </Link>
              <Link href='https://liff.line.me/1645278921-kWRPP32q/?accountId=getprintpress' style={{ textDecoration: 'none', color: "black" }}>
                Line ID : @getprintpress
              </Link>
              <Link href="mailto:sales@getprintandpress.com" style={{ textDecoration: 'none', color: "black" }}>
                Email : sales@getprintandpress.com
              </Link>
            </div>

            <div style={{ display: "grid", paddingBottom: 24 }}>
              <Typography variant="body1" color="background.default" fontSize={{ xs: 18 }}>
                ลูกค้าองค์กร ติดต่อ ฝ่ายดูแลลูกค้าสำคัญ
              </Typography>
              <Link href={"tel:094-694-8242"} style={{ textDecoration: 'none', color: "black" }}>
                เบอร์โทร : 094-694-8242
              </Link>
            </div>

            <div style={{ display: "grid", paddingBottom: 24 }}>
              <Typography variant="body1" color="background.default" fontSize={{ xs: 18 }}>
                ที่อยู่จัดส่งเอกสาร, ที่ตั้งโรงงาน, ที่อยู่จดทะเบียน และ หัก ณ ที่จ่าย
              </Typography>
              <label>บจก. เก็ท พริ้นท์ แอนด์ เพรส</label>
              <label>16/126 ซ.เทียนทะเล20 ถ.บางขุนเทียน-ชายทะเล แขวงแสมดำ เขตบางขุนเทียน จ.กรุงเทพฯ 10150</label>
            </div>

            <div style={{ display: "grid" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4826.725723658439!2d100.42775712596163!3d13.625066986753705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2bd6adef5d2e5%3A0xd6b292ff86e40cb7!2z4Lia4LiI4LiBLuC4ouC4ueC4meC4tOC4leC4teC5iSDguJ7guKPguLTguYnguJnguJXguLTguYnguIc!5e1!3m2!1sen!2sth!4v1725002141893!5m2!1sen!2sth"
                style={{ border: 0, width: "100%", height: 450 }}
              // allowfullscreen="" 
              // loading="lazy" 
              // referrerpolicy="no-referrer-when-downgrade"
              >

              </iframe>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
