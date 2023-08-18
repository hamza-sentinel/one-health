import Random from "@/app/components/RandomPosts";
import { getDataSingle } from "@/app/utils";
import Image from "next/image";

async function getPublication(slug: string) {
  const publication: {
    _id: string;
    content: string;
    title: string;
    slug: string;
    image: string;
  } = await getDataSingle(process.env.URL + "/api/publication/" + slug);
  return publication;
}

async function Page({ params: { slug } }: { params: { slug: string } }) {
  const item = await getPublication(slug);

  return (
    <main className="bg-white blog w-full">
      <section className="container">
        <Image
          src={item.image}
          width={100}
          height={100}
          alt="Publication Image"
          className="w-full h-full object-cover max-h-96 mb-4"
        />
        <div className="mb-6">
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        </div>
        <Random url={process.env.URL!} />
      </section>
    </main>
  );
}

export default Page;
