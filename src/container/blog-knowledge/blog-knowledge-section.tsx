import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Image } from 'antd';
import Link from 'next/link';
import BlogKnowledgeCard from './blog-knowledge-card';

type BlogDetail = {
  id: number;
  title: string;
  description: string;
  BlogKnowledgeDetailImage: {
    id: number;
    imagePath: string;
    googleImage: string;
  };
};

type BlogRecommend = {
  productId: number;
  blogId: number;
  id: number;
  imagePath: string;
  googleImage: string;
};

type Product = {
  id: number;
  title: string;
};

type Props = {
  blogDetail: BlogDetail[];
  blogRecommend: BlogRecommend[];
  product: Product[];
};

const BlogKnowledgeSection = async (props: Props) => {
  const { blogDetail, blogRecommend, product } = props;
  return (
    <Box bgcolor={'white.main'}>
      <Image
        alt={'banner'}
        src={blogDetail[0].BlogKnowledgeDetailImage.googleImage}
        preview={false}
        width="100%"
        style={{ height: 'auto', objectFit: 'contain' }}
      />
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Typography variant="h4" color="primary.main" align="center">
          {blogDetail[0].title}
        </Typography>
        <Box
          component={'article'}
          color={'primary.main'}
          my={6}
          dangerouslySetInnerHTML={{ __html: blogDetail[0].description }}
        ></Box>
        <Divider
          component="div"
          sx={{ borderColor: 'primary.main', my: 6, borderBottomWidth: 2 }}
        />
        <Stack direction="row" flexWrap={'wrap'} gap={1}>
          {product.map((p: { id: number; title: string }) => {
            return (
              <Link href={`/product/${p.id}`} key={p.id}>
                <Chip label={p.title} color="primary" sx={{ borderRadius: 2 }} />
              </Link>
            );
          })}
        </Stack>
        <BlogKnowledgeCard blogLists={blogRecommend} />
      </Container>
    </Box>
  );
};

export default BlogKnowledgeSection;
