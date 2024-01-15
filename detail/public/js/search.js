// document.addEventListener('DOMContentLoaded', function () {
//     var searchIcon = document.querySelector('.search-icon');
//     var searchContainer = document.getElementById('search-container');
  
//     searchIcon.addEventListener('click', function () {
//       searchContainer.classList.toggle('active');
//     });
//   });
// Đợi cho đến khi tất cả các phần tử trên trang được tải xong
document.addEventListener('DOMContentLoaded', function() {
  var searchIcon = document.querySelector('.search-icon'); // Selector cho biểu tượng tìm kiếm
  var searchOverlay = document.getElementById('search-overlay'); // Selector cho overlay của thanh tìm kiếm
  var searchBox = document.querySelector('.search-box'); // Selector cho box của thanh tìm kiếm
  var closeSearch = document.getElementById('close-search'); // Selector cho nút đóng

  // Hàm hiển thị thanh tìm kiếm
  function showSearch() {
      searchOverlay.style.display = 'block'; // Hiển thị overlay
      setTimeout(function() { // Chờ cho đến khi overlay hoàn tất hiển thị
          searchBox.style.right = '0'; // Đưa search box vào trong view
      }, 10); // Đợi 10ms để CSS transition có thể diễn ra
  }

  // Hàm ẩn thanh tìm kiếm
  function hideSearch() {
      searchBox.style.right = '-400px'; // Đẩy search box ra khỏi view
      setTimeout(function() { // Chờ cho đến khi search box hoàn tất việc ẩn đi
          searchOverlay.style.display = 'none'; // Ẩn overlay
      }, 500); // Đợi 500ms, thời gian này phải tương ứng với thời gian của CSS transition
  }

  // Gán sự kiện click cho biểu tượng tìm kiếm để hiển thị thanh tìm kiếm
  searchIcon.addEventListener('click', showSearch);

  // Gán sự kiện click cho nút đóng để ẩn thanh tìm kiếm
  closeSearch.addEventListener('click', hideSearch);
});

