import { CreateFormValuesInterface } from "../contracts/admin";
import callApi from "../helpers/callApi";

interface GetProductProps {
  page?: number;
  per_page?: number;
}

export async function getProducts({ page = 1, per_page = 5 }: GetProductProps) {
  const res = await callApi().get(`/products?page=${page}&per_page=${per_page}`);

  return { products: res?.data?.data, total_page: res?.data?.total_page };
}

export default async function createProduct(values: CreateFormValuesInterface) {
  return await callApi().post("/products/create", {
    ...values,
    body: values.description,
  });
}
