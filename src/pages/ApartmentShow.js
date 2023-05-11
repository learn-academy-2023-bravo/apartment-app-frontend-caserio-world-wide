import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const ApartmentShow = ({apartments}) => {
    const { id } = useParams()

    const currentApartment = apartments?.find((apartment) => apartment.id === +id)
    return (
        <>
            <div className="apartments-body">
                {currentApartment &&      
                    <Card style={{width: "60rem"}} className='apartment-card'>
                        <CardImg src={currentApartment.image} alt="Picture of apartment exterior" />
                        <CardBody className="apartment-text apartment-font-size">
                            <div className="grid-row">
                                <div className="show-apartment-info">
                                    <CardTitle><b>Price: ${currentApartment.price}</b></CardTitle>
                                    <CardSubtitle>{currentApartment.street}</CardSubtitle>
                                    <CardSubtitle>{currentApartment.city}, {currentApartment.state}</CardSubtitle>
                                    <CardSubtitle>Unit: {currentApartment.unit}</CardSubtitle>
                                    <CardSubtitle>Square Footage: {currentApartment.square_footage}</CardSubtitle>
                                    <CardSubtitle>Bedrooms: {currentApartment.bedrooms}</CardSubtitle>
                                    <CardSubtitle>Bathrooms: {currentApartment.bathroom} </CardSubtitle>
                                    <CardSubtitle>Pets: {currentApartment.pets}</CardSubtitle>
                                </div>
                            
                            </div>
                        </CardBody>
                    </Card>
                }
                 <NavLink to={`/apartmentindex`}><Button>Return to Apartment Listings</Button></NavLink>
            </div>
        </>
    )
}

export default ApartmentShow