'use client';
import { Listings } from '@/components/listings/listings';
import { Listing, filterListings } from '@/lib/listings';
import { FormEvent, useState } from 'react'
import SearchForm from '@/components/form/form';

export default function Main({ listings }: { listings: Listing[] }) {
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
      <div className="grid md:grid-cols-4 mt-12">
        <div className="col-span-1">
          <div>Total Listings: {filteredListings.length}</div>
          <div className="mt-4">Filters:</div>
          <pre className="whitespace-pre-wrap">{JSON.stringify(search, null, 2)}</pre>
        </div>
        <div className="md:col-span-3">
          <Listings listings={filteredListings} />
        </div>
      </div>
    </>
  )
}