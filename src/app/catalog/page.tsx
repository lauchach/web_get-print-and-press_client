import InterestProduct from '@/components/common/interest-product';
import { URL_PRODUCT_CATALOG } from '@/constant/url/url';
import CatalogExample from '@/container/catalog/catalog-example';
import EasyPrintingSection from '@/container/home/easy-printing-section';
import { requestPagination } from '@/utils/request';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { notFound } from 'next/navigation';

const CatalogPage = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) => {
  const page = searchParams?.page || '1';
  let res;

  try {
    const response = await requestPagination(URL_PRODUCT_CATALOG, page);

    if (!response.status || response.results.length < 1) {
      notFound();
    }
    res = response;
  } catch (error) {
    return null;
  }

  return (
    <Box bgcolor={'white.main'}>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <EasyPrintingSection />
        <CatalogExample catalogList={res.results} totalRecord={res.totalRecord} page={page} />
        <InterestProduct />
      </Container>
    </Box>
  );
};

export default CatalogPage;

export const dynamic = 'force-dynamic';
