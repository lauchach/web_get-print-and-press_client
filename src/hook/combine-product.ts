export function combineProductData(productPackage: any[], productEvent: any[], productShop: any[]) {
  return [
    ...productPackage.map((item) => ({ id: item.id, title: item.title })),
    ...productEvent.map((item) => ({ id: item.id, title: item.title })),
    ...productShop.map((item) => ({ id: item.id, title: item.title })),
  ];
}
