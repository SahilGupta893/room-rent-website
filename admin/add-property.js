document.getElementById("propertyForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Step 1: Collect form data
    const property = {
      title: document.getElementById("title").value,
      price: document.getElementById("price").value,
      rooms: document.getElementById("rooms").value,
      bathrooms: document.getElementById("bathrooms").value,
      parking: document.getElementById("parking").value,
      imageUrl: document.getElementById("imageUrl").value,
      createdAt: new Date().toISOString()  // (Optional) Save date when added
    };
  
    // Step 2: Retrieve existing properties from localStorage
    let properties = JSON.parse(localStorage.getItem("properties")) || [];
  
    // Step 3: Add new property to array
    properties.push(property);
  
    // Step 4: Save updated array back to localStorage
    localStorage.setItem("properties", JSON.stringify(properties));
  
    // Step 5: Confirm & reset
    alert("Property added successfully!");
  
    document.getElementById("propertyForm").reset();
  
    // Optionally: Redirect back to admin dashboard
    // window.location.href = "admin-dashboard.html";
  });
  