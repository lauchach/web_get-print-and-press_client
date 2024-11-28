import ImageLoading from '@/components/common/image-loading';
import TitleField from '@/components/common/title-field';
import { altProductExample } from '@/constant/message/product/message';
import Grid from '@mui/material/Grid';
import { ProductImage } from './detail-section';
type Props = {
  productExample: ProductImage[];
  alt?: string
  id: number
};

const DetailExample = (props: Props) => {
  const { productExample, alt, id } = props;

  return (
    <Grid container maxWidth={'xl'} spacing={4}>
      <Grid item xs={12}>
        <TitleField title="ตัวอย่างผลงาน" />
      </Grid>
      {productExample.map((ex, index) => {
        return (
          <Grid
            item
            xs={12}
            md={6}
            key={ex.id}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            {id == 4 ? <ImageLoading
              alt={altProductExample[index]}
              src={ex.googleImage}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            /> : <ImageLoading
              alt={alt ? alt : `prodcut exmaple ${ex.id}`}
              src={ex.googleImage}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />}
            {/* <Image
              alt={`prodcut exmaple ${ex.id}`}
              src={ex.googleImage}
              className="drop-shadow"
              preview={false}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            /> */}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default DetailExample;
