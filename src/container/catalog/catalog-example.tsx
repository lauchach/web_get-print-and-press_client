'use client';

import TitleField from '@/components/common/title-field';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import CatalogImage from './catalog-image';

export type CatalogProps = {
  id: number;
  imagePath: string;
  Product: { id: number; title: number };
  googleImage: string;
};

type Props = {
  catalogList: CatalogProps[];
  totalRecord: number;
  page: string;
};

const CatalogExample = (props: Props) => {
  const { catalogList, totalRecord, page } = props;
  const route = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      alignContent="stretch"
      wrap="wrap"
      mb={2}
      px={{ xs: 0, lg: 12 }}
    >
      <Grid item xs={12} mb={4}>
        <TitleField title="แคตตาล็อก" />
      </Grid>
      {catalogList &&
        catalogList.map((cat, index) => {
          return (
            <Grid item key={index} xs={12} md={6} p={1}>
              <Link href={`/product/${cat.Product.id}`}>
                <CatalogImage
                  img={cat.googleImage}
                  alt={`${cat.Product.title}-${cat.Product.id}`}
                />
              </Link>
            </Grid>
          );
        })}
      <Grid item xs={12}>
        <Stack spacing={2} mx={'auto'} width={'fit-content'}>
          <Pagination
            count={Math.ceil(totalRecord / 10)}
            variant="outlined"
            shape="rounded"
            page={+page}
            onChange={(e, page) =>
              route.push(pathname + '?' + createQueryString('page', page.toString()))
            }
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CatalogExample;
