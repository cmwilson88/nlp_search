import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export const Listings = ({ listings }) => (
  <div className="grid gap-4 grid-cols-4">
    {listings.map((listing) => (
      <Card>
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