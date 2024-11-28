import TitleField from '@/components/common/title-field';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Image } from 'antd';
import Link from 'next/link';

type Props = {
  recommendList: PropList[];
};

type PropList = {
  id: number;
  title: string;
  ProductRecommendImage: {
    id: number;
    imagePath: string;
    googleImage: string;
  };
};

const DetailRecommend = (props: Props) => {
  const { recommendList } = props;

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <TitleField title={'หมวดสินค้าเเนะนำ ใกล้เคียง'} />
        <Grid container mx="auto">
          {recommendList.map((product, index) => {
            return (
              <Grid key={index} item xs={12} md={4} mx="auto" p={2}>
                <Link href={`/product/${product.id}`}>
                  <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      alt={product.title}
                      src={product.ProductRecommendImage.googleImage}
                      preview={false}
                      className="image-advertise"
                      style={{
                        borderRadius: 16,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default DetailRecommend;
