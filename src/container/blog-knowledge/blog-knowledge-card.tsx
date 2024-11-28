import TitleField from '@/components/common/title-field';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

type BlogKnowledgeType = {
  productId: number;
  id: number;
  imagePath: string;
  blogId: number;
  googleImage: string;
};

type Props = {
  blogLists: BlogKnowledgeType[];
};

const BlogKnowledgeCard = (props: Props) => {
  const { blogLists } = props;
  return (
    <Grid container maxWidth={'md'} spacing={2} sx={{ mx: 'auto', py: { xs: 2, sm: 4, md: 6 } }}>
      <Grid item xs={12}>
        <TitleField title="เกร็ดน่ารู้" />
      </Grid>
      {blogLists.map((list, index) => {
        return (
          <Grid item xs={12} sm={4} px={1} key={index}>
            <Link
              href={{
                pathname: '/blogknowledge',
                query: { blogId: list.blogId },
              }}
            >
              <Card
                sx={{
                  maxWidth: 269,
                  bgcolor: 'background.default',
                  height: '100%',
                  mx: 'auto',
                }}
              >
                <CardMedia
                  sx={{
                    height: 420,
                    borderColor: 'black.main',
                    borderWidth: 1,
                    border: '2px solid',
                    objectFit: 'contain',
                  }}
                  image={list.googleImage}
                  title={list.imagePath}
                />
                {/* <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                    color={'white.main'}
                    sx={{ textWrap: 'balance' }}
                    fontSize={{ xs: 16, sm: 20 }}
                  >
                    Wait return title
                  </Typography>
                </CardContent> */}
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default BlogKnowledgeCard;
