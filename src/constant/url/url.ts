const URL = process.env.NEXT_PUBLIC_API;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

// Banner
export const URL_BANNER = `${URL}/api/${VERSION}/banner`;

// Product
export const URL_PRODUCT = `${URL}/api/${VERSION}/product`;
export const URL_PRODUCT_PROMOTION = `${URL}/api/${VERSION}/product/promotion`;
export const URL_PRODUCT_BLOG_KNOWLEDGE = `${URL}/api/${VERSION}/product/blog-knowledge`;
export const URL_PRODUCT_CATALOG = `${URL}/api/${VERSION}/product/catalog`;
