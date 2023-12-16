import { fetchProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  const data = await fetchProducts();

  return (
    <section className="text-gray-600">
      <h1>
        <span className="block text-center text-4xl font-bold text-gray-800">
          Products
        </span>
      </h1>

      <div className="py-5 container mx-auto px-5">
        <div className="grid grid-cols-1 gap-5 place-items-center sm:grid-cols-2 md:grid-cols-3 p-4">
          {data.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div
                className=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg p-5"
                key={product.id}
              >
                <Image
                  className="lg:h-48 sm:h-36  mx-auto"
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                />
                <h2 className="font-medium text-black/70">{product.title}</h2>
                <div className="flex justify-between items-center">
                  <span className="block bg-indigo-50 self-start px-3 rounded-md mt-5 mb-2 text-indigo-500">
                    Categroy
                  </span>
                  <span className="text-gray-500">{product.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
