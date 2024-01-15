document.addEventListener('DOMContentLoaded', function () {
    // Set the date and time for the end of the sale (replace with your own date)
    const saleEndTime = new Date('2023-12-31T23:59:59').getTime();

    // Update the countdown every second
    const countdownElement = document.getElementById('countdown');
    setInterval(function () {
        const now = new Date().getTime();
        const distance = saleEndTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Display a message when the sale ends
        if (distance < 0) {
            countdownElement.innerHTML = 'Sale Ended';
        }
    }, 1000);
});

const slides = document.querySelectorAll("#slider .slide");
let curSlide = 0;

let marksList = document.querySelector("#marksList");
for (let i = 0; i < slides.length; i++) {
  let mark = document.createElement("li");
  marksList.appendChild(mark);
}
document.querySelectorAll("#marksList li")[0].className = "active";

let interval = setInterval(Slide, 3000);

function Slide() {
  let prevSlide = (curSlide - 1) % slides.length;
  if (prevSlide < 0) {
    prevSlide = slides.length - 1;
    slides[prevSlide].className = "slide";
  } else {
    slides[prevSlide].className = "slide";
  }
  slides[curSlide].className = "slide out";
  document.querySelectorAll("#marksList li")[curSlide].className = "";
  curSlide = (curSlide + 1) % slides.length;
  slides[curSlide].className = "slide show";
  document.querySelectorAll("#marksList li")[curSlide].className = "active";
}

const next = document.querySelector("#next");
next.addEventListener("click", () => {
  Slide();
  clearInterval(interval);
});

const prev = document.querySelector("#prev");
prev.addEventListener("click", () => {
  slides[curSlide].className = "slide";
  let prevSlide = (curSlide - 2) % slides.length;
  if (prevSlide < 0) {
    prevSlide === -1
      ? (prevSlide = slides.length - 1)
      : (prevSlide = slides.length - 2);
    slides[prevSlide].className = "slide out";
  } else {
    slides[prevSlide].className = "slide out";
  }
  document.querySelectorAll("#marksList li")[curSlide].className = "";
  if (curSlide - 1 < 0) {
    curSlide = slides.length - 1;
    slides[curSlide].className = "slide show";
  } else {
    curSlide = (curSlide - 1) % slides.length;
    slides[curSlide].className = "slide show";
  }
  document.querySelectorAll("#marksList li")[curSlide].className = "active";
  clearInterval(interval);
});

const controls = document.querySelector("#controls");
controls.addEventListener("mouseover", () => {
  document.querySelector("#controls ul").classList.add("tabsActive");
});

controls.addEventListener("mouseout", () => {
  document.querySelector("#controls ul").classList.remove("tabsActive");
});
// menu đa cấp
document.addEventListener('DOMContentLoaded', function() {
  // Lấy tất cả các menu items có submenu
  var hasSubmenu = document.querySelectorAll('.has-submenu');
  
  // Thêm sự kiện click cho mỗi menu item
  hasSubmenu.forEach(function(item) {
      item.addEventListener('click', function(event) {
          // Chặn việc load trang khi click vào link
          
          
          // Toggle hiển thị submenu
          var submenu = this.querySelector('.submenu');
          submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      });
  });
});
