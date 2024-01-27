import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const productData = await getSingleProduct(params.id);
  const product = await productData?.product;

  return {
    title: product?.title,
    description: product?.body.substring(0, 120),
  };
}

interface Props {
  params: {
    id: string;
  };
}

const getSingleProduct = async (id: string) => {
  // fetch API for decrease requests cache them default, for change this setting we can add
  // for example : {cache:'no-store'} to fetch(as the second parameter)
  const res = await fetch(`http://localhost:5000/api/products/${id}`);

  if (!res.ok) {
    throw new Error("something goes wrong");
  }

  return res.json();
};

const SingleProductPage = async ({ params: { id } }: Props) => {
  let productData = await getSingleProduct(id);
  let product = await productData?.product;

  return (
    <>
      <div>{product?.title}</div>
      <div>{product?.body}</div>
    </>
  );
};

export default SingleProductPage;
