import ImageLoading from '@/components/common/image-loading';
import { altProductDetailRollUp } from '@/constant/message/product/message';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ProductImage } from './detail-section';
import DetailTextProduct1Part1 from './detail-text-product1-1';
import DetailTextProduct1Part2 from './detail-text-product1-2';
type Props = {
    detailList: ProductImage[];
    alt?: string;
    id: number;
};

const DetailProductType1 = (props: Props) => {
    const { detailList, alt, id } = props;
    return (
        <Grid container spacing={6} sx={{ py: { xs: 2, sm: 4, md: 6 } }}>
            <DetailTextProduct1Part1 />
            <Grid item xs={12} mx="auto">
                <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ImageLoading
                        alt={altProductDetailRollUp[0]}
                        src={detailList[0].googleImage}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            </Grid>
            <DetailTextProduct1Part2 />
            <Grid item xs={12} mx="auto">
                <Box
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <ImageLoading
                        alt={altProductDetailRollUp[1]}
                        src={detailList[1].googleImage}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default DetailProductType1;
