import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
type Props = {};

const FooterWorkingHour = (props: Props) => {
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Typography variant="body1" color="background.default" fontSize={{ xs: 14 }}>
        เวลาทำการ
      </Typography>
      <Typography variant="body1" color="background.default" fontSize={{ xs: 14 }}>
        จันทร์-เสาร์
      </Typography>
      <Typography variant="body1" color="background.default" fontSize={{ xs: 14 }}>
        08.30-17.30
      </Typography>
    </Box>
  );
};

export default FooterWorkingHour;
