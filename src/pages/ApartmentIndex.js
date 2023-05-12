import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentIndex = ({ apartments }) => {
  return (
    <div className="apartments-body">
      <h1 className="index-title">Recent Listings</h1>
      <div className="flex-apartments">
        {apartments.map((apartment, index) => {
          return (
            <Card
              style={{
                width: "14rem",
              }}
              key={index}
            >
              <img alt={`apartment exterior view`} src={apartment.image} />
              <CardBody>
                <CardTitle tag="h5">${apartment.price}/month</CardTitle>
                <CardSubtitle>
                    {apartment.city}, {apartment.state}
                </CardSubtitle>
                <NavLink
                  to={`/apartmentshow/${apartment.id}`}
                  className="nav-link"
                >
                  <Button className="apartment-button" style={{ backgroundColor: "#28a745" }}>More Details</Button>
                </NavLink>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default ApartmentIndex