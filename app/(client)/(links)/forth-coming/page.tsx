import InfoItem from "@/app/components/InfoItem";
import { getData } from "@/app/utils";

async function getForthComing() {
  const data = await getData(process.env.URL + "/api/forthcoming");
  return data;
}

async function ForthComings() {
  const infos = await getForthComing();
  return (
    <main className="container">
      <section>
        <h1 className="text-4xl text-gray-900 font-bold mt-2">Forth-Coming</h1>
        {infos.length === 0 && (
          <div className="text-lg mt-6 h-96">Nothing forth coming.</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {infos.map(
            (info: {
              _id: string;
              text: string;
              image: string;
              links: string;
            }) => (
              <InfoItem key={info._id} data={info} />
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default ForthComings;
