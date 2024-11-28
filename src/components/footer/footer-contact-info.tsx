import { PHONE_NUMBER } from '@/constant/message/info/message';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

type Props = {};

const FooterContactInfo = (props: Props) => {
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Typography variant="body1" color="#343C97" fontSize={{ xs: 14 }} >
        ติดต่อเรา
      </Typography>
      <Typography variant="body1" color="#343C97" fontSize={{ xs: 14 }}>
        <Link href={`tel:${PHONE_NUMBER}`} style={{ textDecoration: 'none', color: "#343C97" }}>
          {PHONE_NUMBER}
        </Link>
      </Typography>
      <Typography variant="body1" color="#343C97" fontSize={{ xs: 14 }}>
        <Link href='https://liff.line.me/1645278921-kWRPP32q/?accountId=getprintpress' style={{ textDecoration: 'none', color: "#343C97" }}>
          @getprintpress
        </Link>
      </Typography>
      <Typography variant="body1" color="#343C97" fontSize={{ xs: 14 }}>
        <Link href="mailto:sales@getprintandpress.com" style={{ textDecoration: 'none', color: "#343C97" }}>
          sales@getprintandpress.com
        </Link>
      </Typography>
    </Box>
  );
};

export default FooterContactInfo;
