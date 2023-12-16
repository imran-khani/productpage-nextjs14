import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto py-16 px-5">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1  p-5">
            <h1 className="text-5xl">ONLINE SHOPPING MADE EASY</h1>
            <Link
              href="/products"
              className="inline-block text-center mt-6 hover:bg-indigo-800  bg-indigo-500 text-white px-5 py-2 rounded-md "
            >
              Shop Now
            </Link>
          </div>
          <div className="col-span-1">
            <Image
              src="/heroImg.svg"
              className="ml-auto"
              width={400}
              height={400}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
