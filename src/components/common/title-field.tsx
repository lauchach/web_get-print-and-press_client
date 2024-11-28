import Typography from '@mui/material/Typography';

type Props = {
  title: string | React.ReactNode;
};

const TitleField = (props: Props) => {
  const { title } = props;
  return (
    <Typography
      variant="h2"
      color="primary.main"
      fontWeight={400}
      width={'100%'}
      align="center"
      fontSize={{ xs: 16, sm: 20, md: 24, lg: 28, xl: 32 }}
      sx={{
        textWrap: 'balance',
      }}
    >
      {title}
    </Typography>
  );
};

export default TitleField;
