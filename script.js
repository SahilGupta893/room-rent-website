document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = [
    {
      className: '.dropdown', // for Houses 
      items: ['One Room Set', 'Two Rooms Set', 'Three Rooms Set', 'Four Rooms Set']
    },
    {
      className: '.dropdown.flats', // for Flats
      items: ['1 BHK', '2 BHK', '3 BHK', '4 BHK']
    },
    {
      className: '.dropdown.Pg',
      items: ['P.G|Hostel For Boys', 'P.G|Hostel For Girls']
    },
    {
      className: '.dropdown.People',
      items: ['Room Seekers', 'Room Partners']
    }
  ];

  const redirectionMap = {
    'One Room Set': 'room13.html',
    'Two Rooms Set': 'room14.html',
    'Three Rooms Set': 'room15.html',
    'Four Rooms Set': 'room16.html',
    '1 BHK': 'flat1bhk.html',
    '2 BHK': 'flat2bhk.html',
    '3 BHK': 'flat3bhk.html',
    '4 BHK': 'flat4bhk.html',
    'P.G|Hostel For Boys': 'pgboys.html',
    'P.G|Hostel For Girls': 'pggirls.html',
    'Room Seekers': 'seekers.html',
    'Room Partners': 'partners.html'
  };

  dropdowns.forEach(drop => {
    const container = document.querySelector(drop.className);
    const toggle = container.querySelector('.dropdown-toggle');

    const menu = document.createElement('ul');
    menu.classList.add('dropdown-menu');

    drop.items.forEach(text => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = text;

      // Redirection logic
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = redirectionMap[text];
        if (targetUrl) {
          window.location.href = targetUrl;
        }
      });

      li.appendChild(a);
      menu.appendChild(li);
    });

    container.appendChild(menu);

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      container.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        container.classList.remove('active');
      }
    });
  });
});


// // Scroll to Top Button Logic
// const scrollBtn = document.getElementById("scrollBtn");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     scrollBtn.classList.add("show");
//   } else {
//     scrollBtn.classList.remove("show");
//   }
// });
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const registerLink = document.getElementById('registerLink');
  
  if(registerLink) {
      registerLink.addEventListener('click', (e) => {
          window.location.href = 'register.html';
      });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Close button functionality for all pages
  const closeButtons = document.querySelectorAll('.close-btn');
  
  closeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.href = 'index.html'; // Redirect to home page
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const pageMap = {
    oneRoomBtn: "room13.html",    // or "one-room-set.html" if that's the real filename
    twoRoomBtn: "room14.html",
    threeRoomBtn: "room15.html",
    fourRoomBtn: "room16.html"
  };

  Object.entries(pageMap).forEach(([id, url]) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = url;
      });
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  // Room Set Buttons
  const pageMap = {
    oneRoomBtn: "room13.html",
    twoRoomBtn: "room14.html",
    threeRoomBtn: "room15.html",
    fourRoomBtn: "room16.html"
  };

  Object.entries(pageMap).forEach(([id, url]) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        window.location.href = url;
      });
    }
  });

  // Login/Register Redirect
  const loginLink = document.getElementById("loginLink");
  if (loginLink) {
    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "login.html";
    });
  }
});





