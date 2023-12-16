import { fetchProducts } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";

const singleProduct = async ({ id }: { id: string }) => {
  return (await fetchProducts()).find((product) => product.id == id);
};

export const metadata: Metadata = {
  title: "Product Details",
  description: "Product Details",
};

const productPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(typeof id);     
  const product = await singleProduct({ id });
  console.log(product);
  return (
    <div className=" container mx-auto px-5">
      <h1>
        <span className="block text-center text-4xl font-bold text-gray-800 mb-5 -my-10">
          Product Details
        </span>
      </h1>
      <div className="px-6 md:px-10 flex flex-col sm:flex-row gap-10 rounded-md bg-white p-5">
        <div className="flex flex-col sm:w-1/4">
          <Image
            height={400}
            width={400}
            src={product?.image ?? ""}
            alt={product?.title ?? ""}
          />
        </div>

        <div className="flex flex-col flex-1 gap-3">
          <h1 className="text-2xl font-bold">{product?.title ?? ""}</h1>
          <div className="flex sm:flex-row flex-col mt-2">
            <span className="text-xl font-semibold">Price:</span>
            <span className="text-xl ml-2">${product?.price ?? ""}</span>
          </div>
          <div className="flex flex-row mt-2 ">
            <span className="text-xl font-semibold">Category:</span>
            <span className="text-xl ml-2">{product?.category ?? ""}</span>
          </div>
          <div className="flex gap-1 mt-2 flex-col">
            <span className="text-xl font-semibold">Description:</span>
            <span className="text-xl ml-2">{product?.description ?? ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productPage;

