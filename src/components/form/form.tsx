import { Search } from '@/lib/listings';
import { createSearch } from '../../app/actions';

export default function SearchForm({ setSearch }: { setSearch: (search: Search) => void }) {
  const formAction = async (formData: FormData) => {
    const userInput = formData.get('search')
    const searchResponse = await createSearch(userInput || '') 
    const parsedResponse = JSON.parse(searchResponse!)

    const newSearch = {
      city: parsedResponse.city,
      state: parsedResponse.state,
      bed: {
        min: parsedResponse.minBed,
        max: parsedResponse.maxBed
      },
      bath: {
        min: parsedResponse.minBath,
        max: parsedResponse.maxBath
      },
      price: {
        min: parsedResponse.minPrice,
        max: parsedResponse.maxPrice
      },
      sqft: {
        min: parsedResponse.minSqft,
        max: parsedResponse.maxSqft
      },
      pets: {
        cats: parsedResponse.cats,
        dogs: parsedResponse.dogs
      },
      parking: parsedResponse.parking,
      centralAir: parsedResponse.centralAir,
      laundry: parsedResponse.laundry,
      propertyType: parsedResponse.propertyType,
    }
    setSearch(newSearch)
  }
  return (
    <form action={formAction}>
      <label className="block text-gray-700 text-sm font-bold mb-2">Search</label>
      <input type="text" name="search" className="w-full p-2 border border-gray-300 rounded" placeholder="Search Listings" />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded">Submit</button>
    </form>   
  )
}
