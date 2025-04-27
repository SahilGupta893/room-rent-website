document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("propertiesContainer");
  
    // Step 1: Get properties from localStorage
    const properties = JSON.parse(localStorage.getItem("properties")) || [];
  
    // Step 2: Check if properties exist
    if (properties.length === 0) {
      container.innerHTML = "<p>No properties found.</p>";
      return;
    }
  
    // Step 3: Create cards for each property
    properties.forEach(property => {
      const card = document.createElement("div");
      card.className = "property-card";
  
      card.innerHTML = `
        <img src="${property.imageUrl}" alt="Property Image">
        <h3>${property.title}</h3>
        <p><strong>Price:</strong> ₹${property.price} / Monthly</p>
        <p>🛏️ Rooms: ${property.rooms} | 🛁 Bathrooms: ${property.bathrooms} | 🅿️ ${property.parking}</p>
        <p><small>Posted on: ${new Date(property.createdAt).toLocaleDateString()}</small></p>
      `;
  
      container.appendChild(card);
    });
  });
  