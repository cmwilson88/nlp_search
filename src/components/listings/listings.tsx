import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Listing } from "@/lib/listings";


export const Listings = ({ listings }: { listings: Listing[] }) => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 md:mt-0">
    {listings.map((listing: Listing) => (
      <Card key={listing.id}>
        <CardHeader>
          <CardTitle>{listing.street}</CardTitle>
          <CardDescription>{`${listing.city}, ${listing.state} ${listing.zip}`}</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <strong>{listing.property_type}</strong>
          </div>
          <div className="mt-4">
            <strong>${listing.price}</strong> / month
          </div>
          <div className="mt-4">
            <strong>{listing.bed}</strong> bed
            {" "}
            <strong>{listing.bath}</strong> bath
            {" "}
            <strong>{listing.sqft}</strong> sqft
          </div>
          <div className="mt-4">
            {listing.cats && <div>Cats Allowed</div>}
            {listing.dogs && <div>Dogs Allowed</div>}
          </div>
          <div className="mt-4">
            {listing.parking && <div>Parking</div>}
            {listing.central_air && <div>Central Air</div>}
            {listing.laundry && <div>Laundry</div>}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);