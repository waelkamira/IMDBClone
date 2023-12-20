import Results from "@/components/Results";

const API_KEY = "56365df6a59a9d8c97697899dbba9313";
export default async function SearchPage({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Error Fetching Data");
  }
  const data = await res.json();
  const results = data.results;
  console.log(results);
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">Result Not Found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
