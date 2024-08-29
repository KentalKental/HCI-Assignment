document.addEventListener('DOMContentLoaded', function() {
  const dropdownBtn = document.querySelector('.drpbtn');
  const dropdownMenu = document.querySelector('.dropdown');

  dropdownBtn.addEventListener('click', function(event) {
      event.preventDefault();
      dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
  });

  document.addEventListener('click', function(event) {
      if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.style.display = 'none';
      }
  });
});