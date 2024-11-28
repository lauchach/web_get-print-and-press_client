import ImageLoading from '@/components/common/image-loading';
import { altProductDetail, altProductDetailRollUp, altProductDetailTentCard } from '@/constant/message/product/message';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductImage } from './detail-section';
type Props = {
  detailList: ProductImage[];
  alt?: string
  id: number
};

const DetailProduct = (props: Props) => {
  const { detailList, alt, id } = props;
  return (
    <Grid container spacing={6} sx={{ py: { xs: 2, sm: 4, md: 6 } }}>
      {detailList.map((detail, index) => {
        return (
          <Grid key={detail.id} item xs={12} mx="auto">
            <Box
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {id == 4 ?
                <ImageLoading
                  alt={altProductDetail[index]}
                  src={detail.googleImage}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }} />
                : id == 9 ?
                  <ImageLoading
                    alt={altProductDetailTentCard[index]}
                    src={detail.googleImage}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                    }} />
                  : id == 1 ?
                    <ImageLoading
                      alt={altProductDetailRollUp[index]}
                      src={detail.googleImage}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                      }} />
                    : <ImageLoading
                      alt={alt ? alt : `details/${detail.id}`}
                      src={detail.googleImage}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                      }} />
              }

              {/* <Image
                preview={false}
                alt={`details/${detail.id}`}
                src={detail.googleImage}
                className="drop-shadow"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              /> */}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DetailProduct;
