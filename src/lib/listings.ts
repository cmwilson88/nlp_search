interface Search {
  city?: string;
  state?: string;
  zip?: string;

  bed?: Range;
  bath?: Range;
  price?: Range;
  sqft?: Range;

  propertyType?: string;
  pets?: Pets

}

type Range = {
  min?: number;
  max?: number;
}

type Pets = {
  cats?: boolean;
  dogs?: boolean;
}



export interface Listing {
  id: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bed: number;
  bath: number;
  sqft: number;
  cats: boolean;
  dogs: boolean;
  parking: boolean;
  property_type: string;
  central_air: boolean;
  laundry: boolean;
}

const downcase = (str: string) => str?.toLowerCase();

export const filterListings = (listings: Listing[], search: Search) => {
  return listings.filter((listing) => {
    if (search.city && downcase(listing.city) !== downcase(search.city)) {
      return false;
    }
    if (search.state && downcase(listing.state) !== downcase(search.state)) {
      return false;
    }
    if (search.zip && listing.zip !== search.zip) {
      return false;
    }
    if (search.bed && (listing.bed < (search.bed.min ?? 0) || listing.bed > (search.bed.max ?? Infinity))) {
      return false;
    }
    if (search.bath && (listing.bath < (search.bath.min ?? 0) || listing.bath > (search.bath.max ?? Infinity))) {
      return false;
    }
    if (search.price && (listing.price < (search.price.min ?? 0) || listing.price > (search.price.max ?? Infinity))) {
      return false;
    }
    if (search.sqft && (listing.sqft < (search.sqft.min ?? 0) || listing.sqft > (search.sqft.max ?? Infinity))) {
      return false;
    }
    if (search.propertyType && downcase(listing.property_type) !== downcase(search.propertyType)) {
      return false;
    }
    if (search.pets) {
      if (search.pets.cats && !listing.cats) {
        return false;
      }
      if (search.pets.dogs && !listing.dogs) {
        return false;
      }
    }
    return true;
  });
}