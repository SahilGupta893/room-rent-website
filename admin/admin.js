document.addEventListener('DOMContentLoaded', () => {
    const adminForm = document.getElementById('adminLoginForm');
    const errorMsg = document.getElementById('errorMsg');
  
    adminForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Simple Hardcoded admin credentials
      if (username === "admin" && password === "admin123") {
        // Save login info to localStorage (optional)
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = 'admin-dashboard.html';  // redirect to dashboard
      } else {
        errorMsg.style.display = 'block';
      }
    });
  });
  