/* eslint-disable @next/next/no-img-element */
'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ImageLoading from './image-loading';
import TitleChip from './title-chip';

type Props = {
  title: string;
  subTitle: string;
  color: string;
  productList: {
    id: number;
    title: string;
    ProductCover: {
      id: number;
      imagePath: string;
      googleImage: string;
    };
  }[];
};

const ProductBlog = (props: Props) => {
  const { title, subTitle, color, productList } = props;
  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <TitleChip title={title} subTitle={subTitle} color={color} />
        <Grid container mx="auto" maxWidth={'md'}>
          {productList.map((product, index) => {
            return (
              <Grid key={index} item xs={12} md={6} mx="auto" p={{ xs: 2, md: 4 }}>
                <Link href={`/product/${product.id}`}>
                  <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    flexDirection={'column'}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="h3" color="primary.main" sx={{ fontSize: { xs: 14, sm: 16, md: 20, lg: 24 }, mb: 2 }}>
                      {product.title}
                    </Typography>
                    <ImageLoading
                      alt={product.title}
                      src={product.ProductCover.googleImage}
                      // width={'0'}
                      // height={'0'}
                      // sizes="100vw"
                      // className="product-image"
                      style={{
                        // borderRadius: 64,
                        width: '100%',
                        height: 'auto',
                        // maxHeight: 419,
                        // objectFit: 'contain',
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

export default ProductBlog;
