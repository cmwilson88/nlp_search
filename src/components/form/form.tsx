import { createSearch } from '../../app/actions';

export default function SearchForm({ setSearch }) {
  const formAction = async (formData: FormData) => {
    const userInput = formData.get('search')
    const searchResponse = await createSearch(userInput || '') 
    const parsedResponse = JSON.parse(searchResponse)

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
      <input type="text" name="search" className="w-full p-2 border border-gray-300 rounded" placeholder="Search Listings" />
      <button type="submit">Submit</button>
    </form>   
  )
}
