import { getData } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";

async function getArticle() {
  return await getData(process.env.URL + "/api/extension-article");
}

async function Articles() {
  const articles = await getArticle();
  return (
    <main className="container">
      <section>
        <h1 className="text-4xl text-gray-900 font-bold mt-2">Our Articles</h1>
        {articles.length === 0 && (
          <div className="text-lg mt-6 h-96">No articles found</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 items-start">
          {articles.map(
            (item: {
              _id: string;
              title: string;
              slug: string;
              image: string;
            }) => (
              <article
                key={item._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="Articles Image"
                  className="w-full h-48 object-cover"
                />
                <div
                  className="p-4 py-6.
                "
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h2>
                  <Link
                    href={`/extension-article/${item.slug}`}
                    className="bg-blue-500 px-4 py-2 mb-2 justify-self-end mt-auto text-white rounded-md hover:bg-blue-600"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Articles;
