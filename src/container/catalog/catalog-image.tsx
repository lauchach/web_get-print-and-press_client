import Box from '@mui/material/Box';
import { Image } from 'antd';

type Props = {
  img: string;
  alt: string;
};

const CatalogImage = (props: Props) => {
  const { img, alt } = props;

  return (
    <Box
      position={'relative'}
      height={'auto'}
      sx={{
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image src={img} alt={alt} style={{ width: '100%', height: 'auto' }} preview={false} />
    </Box>
  );
};

export default CatalogImage;
