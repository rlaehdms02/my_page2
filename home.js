// 페이지가 완전히 로드된 후에 실행되도록 안전장치 추가
document.addEventListener("DOMContentLoaded", function() {

  // 1. '홈' 버튼 클릭 시 main.html로 이동
  const navHome = document.getElementById('nav-home');
  if (navHome) {
    navHome.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = './main.html';
    });
  }

  // 2. '메뉴' 버튼 클릭 시 menu.html로 이동
  const navMenu = document.getElementById('nav-menu');
  if (navMenu) {
    navMenu.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = './menu.html';
    });
  }

  // 3. '소개' 버튼 클릭 시 about.html로 이동
  const navIntro = document.getElementById('nav-intro');
  if (navIntro) {
    navIntro.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = './about.html';
    });
  }

  // 4. 메인 화면의 '메뉴보기' 버튼 클릭 시 menu.html로 이동
  const btnViewMenu = document.getElementById('btn-view-menu');
  if (btnViewMenu) {
    btnViewMenu.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = './menu.html';
    });
  }

});