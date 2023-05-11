import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap'

const ApartmentEdit = ({ updateApartment, deleteApartment, apartments }) => {
    const navigate = useNavigate()
    const { id } = useParams()
    let currentApartment = apartments?.find((apartment) => apartment.id === +id)

    const [updatedApartment, setUpdatedApartment] = useState({
        id: currentApartment.id,
        street: currentApartment.street,
        unit: currentApartment.unit,
        city: currentApartment.city,
        state: currentApartment.state,
        square_footage: currentApartment.square_footage,
        price: currentApartment.price,
        bedrooms: currentApartment.bedrooms,
        bathroom: currentApartment.bathroom, 
        pets: currentApartment.pets,
        image: currentApartment.image,
    })

    const handleChange = (e) => {
        setUpdatedApartment({ ...updatedApartment, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateApartment(updatedApartment)
        navigate(`/apartmentshow/${id}`)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        deleteApartment(id)
        navigate('/apartmentprotectedindex')
    }

    return (
        <>
            <Card style={{ margin: 'auto' }}>
                <CardBody>
                    <Form>
                    <FormGroup>
                        <Label for="apartment-price">Price</Label>
                        <Input
                            id="apartment-price"
                            name="price"
                            placeholder="Enter Price"
                            type="text"
                            onChange={handleChange}
                            value={updatedApartment.price}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="apartment-street">Street</Label>
                            <Input
                            id="apartment-street"
                            name="street"
                            placeholder="Enter Street"
                            type="text"
                            onChange={handleChange}
                            value={updatedApartment.street}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="apartment-unit">Unit</Label>
                            <Input
                            id="apartment-unit"
                            name="unit"
                            placeholder="Enter unit number"
                            type="text"
                            onChange={handleChange}
                            value={updatedApartment.unit}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="apartment-city">City</Label>
                            <Input
                            id="apartment-city"
                            name="city"
                            placeholder="Enter City"
                            type="text"
                            onChange={handleChange}
                            value={updatedApartment.city}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="apartment-state">State</Label>
                            <Input
                            id="apartment-state"
                            name="state"
                            placeholder="Enter State"
                            type="text"
                            onChange={handleChange}
                            value={updatedApartment.state}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="apartment-square-footage">Sq Ft.</Label>
                            <Input
                            id="apartment-square-footage"
                            name="square_footage"
                            placeholder="Enter square-footage"
                            type="text"
                            onChange={handleChange}
                            value={updatedApartment.square_footage}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="apartment-bedrooms">Bedrooms</Label>
                            <Input
                            id="apartment-bedrooms"
                            name="bedrooms"
                            placeholder="Enter bedrooms"
                            type="text"
                            onChange={handleChange}
                            value={updatedApartment.bedrooms}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="apartment-bathrooms">Bathrooms</Label>
                            <Input
                            id="apartment-bathrooms"
                            name="bathrooms"
                            placeholder="Enter bathrooms"
                            type="text"
                            onChange={handleChange}
                            value={updatedApartment.bathroom}
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label for='apartment-pets'>Enjoys</Label>
                        <Input
                            type='text'
                            name='pets'
                            id='apartment-pets'
                            onChange={handleChange}
                            value={updatedApartment.pets}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label for='apartment-image'>Image URL</Label>
                        <Input
                            type='text'
                            name='image'
                            id='apartmet-image'
                            onChange={handleChange}
                            value={updatedApartment.image}
                        />
                        </FormGroup>
                        
                        <Button type='submit' color='primary' onClick={handleSubmit
                        }>Submit</Button>
                        <Button onClick={handleDelete} color='danger'>Delete</Button>
                    </Form>
                </CardBody>
            </Card>
        </>
    )
}


export default ApartmentEdit