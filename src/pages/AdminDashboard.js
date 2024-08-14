import React, { useState } from 'react';
import carData from "../assets/data/carData";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [cars, setCars] = useState(carData);

  const handleAvailabilityToggle = (id) => {
    setCars(cars.map(car =>
      car.id === id ? { ...car, available: !car.available } : car
    ));
  };

  const handleEdit = (id) => {
    const newPrice = prompt('Enter new price');
    
    if (newPrice !== null && !isNaN(newPrice) && newPrice.trim() !== "") {
      setCars(cars.map(car =>
        car.id === id ? { ...car, price: parseFloat(newPrice) } : car
      ));
    } else {
      alert("Please enter a valid number for the price.");
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="car-list">
        {cars.map(car => (
          <div key={car.id} className="car-card">
            <img src={car.imgUrl} alt={car.carName} />
            <div className="car-info">
              <h2>{car.carName}</h2>
              <p>Brand: {car.brand}</p>
              <p>Model: {car.model}</p>
              <p>Price: ${car.price}</p>
              <p>Speed: {car.speed}</p>
              <p>GPS: {car.gps}</p>
              <p>Seats: {car.seatType}</p>
              <p>Transmission: {car.automatic}</p>
              <p>Description: {car.description}</p>
              <button onClick={() => handleAvailabilityToggle(car.id)}>
                {car.available ? 'Mark as Rented' : 'Mark as Rent'}
              </button>
              <button onClick={() => handleEdit(car.id)}>
                Edit Price
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;