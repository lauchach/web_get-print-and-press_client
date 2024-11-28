import ImageLoading from '@/components/common/image-loading';
import TitleField from '@/components/common/title-field';
import { altPromotion, altPromotionRollUp, altPromotionTentCard } from '@/constant/message/product/message';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Image } from 'antd';

type Props = {
  promotionList: PropList[];
  title?: string;
  alt?: string
  id: number
};

type PropList = {
  id: number;
  imagePath: string;
  googleImage: string;
};

const DetailPromotion = (props: Props) => {
  const { promotionList, title, alt, id } = props;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4, md: 6 } }}>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <TitleField title={title ? title : 'โปรโมชั่น'} />
        <Grid container mx="auto" rowSpacing={2}>
          {promotionList.length > 1 &&
            promotionList.map((promo, index) => {
              return (
                <Grid key={index} item xs={12} sm={4} px={1}>
                  <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {id == 4 ?
                      <ImageLoading
                        alt={altPromotion[index]}
                        src={promo.googleImage}
                        style={{
                          borderRadius: 16,
                          width: '100%',
                          height: 'auto',
                          maxHeight: 352,
                          objectFit: 'cover',
                        }} />
                      : id == 9 ?
                        <ImageLoading
                          alt={altPromotionTentCard[index]}
                          src={promo.googleImage}
                          style={{
                            borderRadius: 16,
                            width: '100%',
                            height: 'auto',
                            maxHeight: 352,
                            objectFit: 'cover',
                          }} />
                        : id == 1 ?
                          <ImageLoading
                            alt={altPromotionRollUp[index]}
                            src={promo.googleImage}
                            style={{
                              borderRadius: 16,
                              width: '100%',
                              height: 'auto',
                              maxHeight: 352,
                              objectFit: 'cover',
                            }} />
                          : <ImageLoading
                            alt={alt ? alt : 'โปรโมชั่น'}
                            src={promo.googleImage}
                            style={{
                              borderRadius: 16,
                              width: '100%',
                              height: 'auto',
                              maxHeight: 352,
                              objectFit: 'cover',
                            }}
                          />}

                    {/* <Image
                      alt={`promotions ${index}`}
                      src={promo.googleImage}
                      preview={false}
                      className="image-advertise"
                      style={{
                        borderRadius: 16,
                        width: '100%',
                        height: 'auto',
                        maxHeight: 352,
                        objectFit: 'cover',
                      }}
                    /> */}
                  </Box>
                </Grid>
              );
            })}
          {promotionList.length < 2 &&
            promotionList.map((promo, index) => {
              return (
                <Grid key={index} item xs={12} mx="auto">
                  <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image
                      alt={`promotions ${index}`}
                      src={promo.googleImage}
                      preview={false}
                      className="image-advertise"
                      style={{
                        borderRadius: 16,
                        width: '100%',
                        height: 'auto',
                        maxHeight: 419,
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Container>
  );
};

export default DetailPromotion;
