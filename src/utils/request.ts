'use server';

import { notFound } from 'next/navigation';

export const requestGet = async (url: string) => {
  try {
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error fetching: ', error);
  }
};

export const requestGetParams = async (url: string, params: string) => {
  try {
    const res = await fetch(`${url}/${params}`, { cache: 'no-store' });

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error fetching: ', error);
  }
};

export const requestPagination = async (url: string, page: string) => {
  try {
    const res = await fetch(`${url}?perPage=10&page=${page}`, { cache: 'no-store' });

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error fetching: ', error);
  }
};

export const requestGetParamsBlog = async (
  url: string,
  params: { productId: string; blogId: string }
) => {
  try {
    const res = await fetch(`${url}?productId=${params.productId}&blogId=${params.blogId}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error fetching: ', error);
  }
};
