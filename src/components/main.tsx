'use client';
import { Listings } from '@/components/listings/listings';
import { filterListings } from '@/lib/listings';
import { FormEvent, useState } from 'react'
import SearchForm from '@/components/form/form';

export default function Main({ listings }) {
  const [search, setSearch] = useState({})
  

  const filteredListings = filterListings(listings, search);

  return (
    <>
      <h1 className="text-4xl text-center font-bold">Listings</h1>
      <div className="mt-12">
        <p>Using Natural Language Processing powered by OpenAI to search for listings.</p>
        <p>Some examples:</p>
        <ul>
          <li>Find a 2 bedroom apartment in Chicago</li>
          <li>I am looking for 2+ bedrooms</li>
          <li>Something in California</li>
        </ul>
      </div>
      <div className="mt-12">
        <SearchForm setSearch={setSearch} />
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
    </>
  )
}