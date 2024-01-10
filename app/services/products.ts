import { ProductFormValuesInterface } from "../contracts/admin/types";
import callApi from "../helpers/callApi";

interface GetProductProps {
  page?: number;
  per_page?: number;
}

export async function getProducts({ page = 1, per_page = 5 }: GetProductProps) {
  const res = await callApi().get(`/products?page=${page}&per_page=${per_page}`);

  return { products: res?.data?.data, total_page: res?.data?.total_page };
}

export async function createProduct(values: ProductFormValuesInterface) {
  return await callApi().post("/products/create", {
    ...values,
    body: values.description,
  });
}

export async function deleteProduct(product_id: number) {
  return await callApi().post(`/products/${product_id}/delete`, {});
}

export async function getSingleProduct({ productId }: { productId: number }) {
  const res = await callApi().get(`/products/${productId}`);

  return res?.data;
}

export async function updateProduct(
  productId: number,
  values: ProductFormValuesInterface,
) {
  return await callApi().post(`/products/${productId}/update`, {
    ...values,
    body: values.description,
  });
}
