
import { promises as fs } from 'fs'; 
import { Listings } from '@/components/listings/listings';
import { filterListings } from '@/lib/listings';


export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/listings.json', 'utf8')
  const listings = JSON.parse(file);
  const search = {
  }
  const filteredListings = filterListings(listings, search);
  return (
    <main className="container mx-auto">
      <h1 className="text-4xl text-center font-bold">Listings</h1>
      <div className="mt-12">
        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Search Listings" />
      </div>
      <div className="grid grid-cols-4 mt-12">
        <div className="col-span-1">
          <div>Listing Stats:</div>
          <ol>
            <li>Total Listings: {filteredListings.length}</li>
            <li>Average Price: ${filteredListings.reduce((acc, listing) => acc + listing.price, 0) / filteredListings.length}</li>
            <li>Max Price: ${Math.max(...filteredListings.map((listing) => listing.price))}</li>
            <li>Min Price: ${Math.min(...filteredListings.map((listing) => listing.price))}</li>
          </ol>
          <div className="mt-12">Filters:</div>
          <pre className="whitespace-pre-wrap">{JSON.stringify(search, null, 2)}</pre>
        </div>
        <div className="col-span-3">
          <Listings listings={filteredListings} />
        </div>
      </div>
    </main>
  );
}
