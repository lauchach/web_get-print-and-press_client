import { URL_PRODUCT_BLOG_KNOWLEDGE } from '@/constant/url/url';
import BlogKnowledgeSection from '@/container/blog-knowledge/blog-knowledge-section';
import { requestGetParamsBlog } from '@/utils/request';
import { notFound } from 'next/navigation';

const BlogKnowledgePage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const productId = searchParams?.productId ?? '';
  const blogId = searchParams?.blogId ?? '';
  let res;

  try {
    const response = await requestGetParamsBlog(URL_PRODUCT_BLOG_KNOWLEDGE, { productId, blogId });

    if (!response.status || response.result.length < 1) {
      notFound();
    }

    res = response;
  } catch (error) {
    return null;
  }
  return <BlogKnowledgeSection {...res.result} />;
};

export default BlogKnowledgePage;

export const dynamic = 'force-dynamic';
