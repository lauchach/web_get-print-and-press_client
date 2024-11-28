import { Box, Chip, Typography } from '@mui/material';

type Props = {
  title: string;
  subTitle: string;
  color: string;
};

const TitleChip = (props: Props) => {
  const { title, subTitle, color } = props;
  return (
    <Box
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={2}
    >
      <Chip
        label={
          <Typography align='center' variant='h2' fontWeight={400} sx={{ fontSize: { xs: 14, sm: 16, md: 20, lg: 24 } }} >
            {title}
          </Typography>
        }
        sx={{
          bgcolor: color,
          mx: 'auto',
          borderRadius: 2,
          fontSize: { xs: 14, sm: 16, md: 20, lg: 24 },
          px: { xs: 2, sm: 3 },
          py: { xs: 3 },
          color: 'white.main',
        }}
      />
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
        {subTitle}
      </Typography>
    </Box >
  );
};

export default TitleChip;
