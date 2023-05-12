import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ApartmentNew = ({createApartment}) => {

    const navigate = useNavigate()

    const [newApartment, setNewApartment] = useState({
        user_id: '',
        street: "",
        unit: "",
        city: "",
        state: "",
        square_footage: '',
        price: "",
        bedrooms: '',
        bathroom: '',
        pets: "",
        image: ""
    })

    const handleChange = (e) => {
        setNewApartment({...newApartment, [e.target.name]: e.target.value})
    }

    const handleClick = () => {
        createApartment(newApartment)
        navigate ("/apartmentindex")
    }
    
    return(
        <>
            <h3 className="page_heading">Add A Listing</h3>
            <Form className="new-apartment-form">
                <FormGroup>
                    <Label for="apartment-price">Price</Label>
                    <Input
                    id-apr="apartment-price"
                    name="price"
                    placeholder="Enter Price"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.price}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="apartment-street">Street</Label>
                    <Input
                    i-apr="apartment-street"
                    name="street"
                    placeholder="Enter Street"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.street}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="apartment-unit">Unit</Label>
                    <Input
                    id-apr="apartment-unit"
                    name="unit"
                    placeholder="Enter unit number"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.unit}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="apartment-city">City</Label>
                    <Input
                    id-apr="apartment-city"
                    name="city"
                    placeholder="Enter City"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.city}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="apartment-state">State</Label>
                    <Input
                    id-apr="apartment-state"
                    name="state"
                    placeholder="Enter State"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.state}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="apartment-square-footage">Sq Ft.</Label>
                    <Input
                    id-apr="apartment-square-footage"
                    name="square_footage"
                    placeholder="Enter square-footage"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.square_footage}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="apartment-bedrooms">Bedrooms</Label>
                    <Input
                    id-apr="apartment-bedrooms"
                    name="bedrooms"
                    placeholder="Enter bedrooms"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.bedrooms}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="apartment-bathroom">Bathrooms</Label>
                    <Input
                    id-apr="apartment-bathroom"
                    name="bathroom"
                    placeholder="Enter bathroom"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.bathroom}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="apartment-pets">Pets</Label>
                    <Input
                    id-apr="apartment-pets"
                    name="pets"
                    placeholder="Are pets allowed?"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.pets}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="apartment-image">Image</Label>
                    <Input
                    id-apr="apartment-image"
                    name="image"
                    placeholder="Upload image"
                    type="text"
                    onChange={handleChange}
                    value={newApartment.image}
                    />
                </FormGroup>
                <Button className="submit" style={{ backgroundColor: "#28a745" }} onClick={handleClick}>Submit</Button> 
            </Form>
        </>
    ) 
}

export default ApartmentNew