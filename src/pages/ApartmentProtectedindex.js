import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink } from "react-router-dom"

const ApartmentProtectedIndex = ({ apartments, current_user }) => {
    const apartmentProtectedIndex = apartments?.filter(apartment => current_user?.id === apartment.user_id)
    
    return (
        <>
            <h3 className="page_heading">My Apartments</h3>
                <div className="apartments-body">
                {apartmentProtectedIndex.map((apartment, index) => {
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
                                    <Button className="apartment-button">More Details</Button>
                                </NavLink>
                            <Button className="apartment-button">Update</Button>
                            <Button className="apartment-button">Delete</Button>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>
        </>
    )
}

export default ApartmentProtectedIndex