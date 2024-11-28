import Box from '@mui/material/Box';
import FooterBanner from './footer-banner';
import FooterCopyRight from './footer-copyright';
import FooterDescription from './footer-description';

type Props = {};

const FooterSection = (props: Props) => (
  <Box component="footer" bgcolor="white.main">
    <Box component="div" bgcolor="background.default" py={6}>
      <FooterBanner />
    </Box>
    <Box component="div" bgcolor="white.main" py={4}>
      <FooterDescription />
    </Box>
    <Box component="div" bgcolor={'background.paper'}>
      <FooterCopyRight />
    </Box>
  </Box>
);

export default FooterSection;
