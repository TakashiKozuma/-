window.addEventListener('load', function(){
  // カーソルを合わせるとメニューの色が変わる
  const navItems = document.querySelectorAll('.nav-lists li');
  
  navItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.style.backgroundColor = '#bbb';  // マウスオーバー時の背景色
    });
  
    item.addEventListener('mouseout', function() {
      this.style.backgroundColor = '';  // マウスが離れた時に元の色に戻す
    });
});

  const submitButton = document.querySelector('.send');
  
  submitButton.addEventListener('click', function(e) {
    // e.preventDefault();  // ページリロードのデフォルトアクションを停止します
    alert('予約メールを送信しました！');  // 予約送信のアラートを表示します
});

  var menuItems = document.querySelectorAll('.menu');

  menuItems.forEach(item => {
    var menuDetail = item.querySelector('.menu-detail');

    item.addEventListener('click', function() {
      if (menuDetail.style.display == "none") {
        menuDetail.style.display = "block";
      } else {
        menuDetail.style.display = "none";
      }
    });
});

  
  var images = document.querySelectorAll('.stylist-image');
    images.forEach(function(image) {
      image.addEventListener('mouseover', function() {
        image.style.transform = "scale(1.2)";
        image.style.transition = "transform 0.3s ease";
      });
      image.addEventListener('mouseout', function() {
        image.style.transform = "scale(1)";
      });
    });

  var imageItems = document.querySelectorAll('.stylist-image');

  imageItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    item.style.transform = "scale(1.2)";
    item.style.transition = "transform 0.3s ease";
  });

  item.addEventListener('mouseout', function() {
    item.style.transform = "scale(1)";
  });
});

  
})
