async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface apiResponse {
  message: string;
  timestamp: string;
}

export default async function page() {
  const data: apiResponse = await getData();

  return (
    <div className="grid place-items-center min-h-screen">
      <table className="">
        <caption className="text-xl p-8">
          Como funcionam as renderizações do Next.js
        </caption>
        <thead>
          <tr>
            <th className="p-4 text-xl">Gerado no servidor:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 text-xl">{data.timestamp}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
