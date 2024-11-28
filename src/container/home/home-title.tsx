import { HomeTitle } from '@/constant/message/home/message';
import { Box, Container, Typography } from '@mui/material';

type Props = {};

const HomeTitleSection = (props: Props) => {
  return (
    <Container maxWidth="xl" sx={{ my: { xs: 2, md: 4 } }}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={{ xs: 2 }}
        mb={{ xs: 2 }}
      >
        <Typography variant="h1" align="center" fontWeight={400} color="primary.main" fontSize={{ xs: 14, sm: 16, md: 20, lg: 26 }}>
          GET PRINT & PRESS บริการผลิตสื่อส่งเสริมการขาย
        </Typography>
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
          {HomeTitle}
        </Typography>
      </Box>
    </Container>
  );
};

export default HomeTitleSection;
