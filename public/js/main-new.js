function showDialog(id) {
  $("#" + id).addClass("show")
  $("body").addClass("ohidden");
}

function hideDialog(id) {
  $("#" + id).removeClass("show")
  $("body").removeClass("ohidden");
}

function toId(id) {
  if($("#" + id).hasClass("active")) {
      var idh = $("#" + id).offset().top -110
  }
  else {
      var idh = $("#" + id).offset().top - 160
  }
  $("html,body").animate({
    scrollTop: idh + "px"
  }, 500)
}

function initFrontStar() {
  let top = Math.floor(Math.random() * 70 + 10);
  let left = Math.floor(Math.random() * 60 + 10);
  $(".stars").html(
    '<div class="star"><span class="s1"></span><span class="s2"></span></div>'
  );
  $(".stars .star").css({
    "display": 'block',
    "top": top+ '%',
    "left": left+ "%",
  })
  // window.requestAnimationFrame(initFrontStar);
  setTimeout(function(){
    initFrontStar();
  },10000)
}

// function loadImage(url, callback) {
//   var img = new Image();
//   img.src = url;
//   if(img.complete) {
//     callback(url);
//     return;
//   }
//   img.onload = function () {
//     callback(url);
//   };
// }
// let isPc = true;
// loadImage('/loading.gif',function(){
//   for (let i = 0 ; i < 6 ; i++) {
//     let imgBox = document.querySelector(`#values-gif-${i}`);
//     imgBox.innerHTML = `<img id="pc-values-item-img" src="pc${i+1}.svg" alt="">`;
//   }
// });
// window.addEventListener('resize', e => {
//   console.log(document.body.clientWidth);
// });
window.onload = function(){
  let ua = window.navigator.userAgent;
  if (ua.indexOf('iPhone')!=-1 && ua.indexOf('Safari')!=-1 && ua.indexOf('Mobile')!=-1) {
    try{
      let sloganEn = document.querySelector('#sloganEn');
      let slogan = document.querySelector('#slogan');
      let arrowUp = document.querySelector('#arrowUp');
      sloganEn.style = "bottom: 170px";
      arrowUp.style = "bottom: 120px";
      slogan.style = "top: 100px";
    }catch(err){}
  }
  initFrontPage();
}
function initFrontPage() {
  $(".loading-box").fadeOut();
  $("body").removeClass("ohidden");
  $(".header").addClass("show");
  
  $(".slogan").addClass('active');
  $(".slogan-en").addClass('active');
  $(".arrow-up").addClass('active');
  
}
function initPartner() {
  let partnerData = [{
    bgImg: 'pic_dangdang.png',
    triangleColor: '90px solid rgba(255,90,52,0.8)',
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_ecarx.png',
    triangleColor: `rgba(220,247,84,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }, {
    bgImg: 'pic_dingxiangyuan.png',
    triangleColor: `90px solid rgba(167,11,255,0.8)`,
    avatarImg: 'avatar-uxin.png',
    name: '丁香园·季昕华',
    say: `“Ruby是我最早的天使投资人，和我一见如故，她总能在关键时刻帮助到你。”`
  }];
  let resTpl = '';
  partnerData.forEach((item, index) => {
    let elTpl = `
      <div class="swiper-slide" data-swiper-slide-index="${index}">
        <div class="partner-pic">
          <img class="partner-pic-img" src="/statics/${item.bgImg}" alt="" data-swiper-parallax="-300" style="transition-duration: 750ms;">
          <div style="border-bottom: ${item.triangleColor};" class="triangle-svg" data-swiper-parallax="-200" data-swiper-parallax-duration="600" style="transition-duration: 600ms;"></div>
        </div>
        <div class="partner-item-info">
          <div class="user-say" data-swiper-parallax-y="-30" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="600" style="transition-duration: 600ms;">
            ${item.say}
          </div>
          <div class="user-title" data-swiper-parallax-y="30" data-swiper-parallax-opacity="0.2" data-swiper-parallax-duration="800" style="transition-duration: 800ms;">
            <div class="user-avatar">
              <img src="/statics/${item.avatarImg}" alt="">
            </div>
            <div class="user-name">
              ${item.name}
            </div>
          </div>
        </div>
      </div>
    `;
    resTpl += elTpl;
  });
  $('.partner-container .swiper-wrapper').html(resTpl);
}
$(function () {
  
  $(window).scrollTop(0)
  $(".nav-btn").click(function () {
    showDialog('nav')
  })
  $("a.close").click(function () {
    var id = $(this).parents(".layer").attr("id");
    hideDialog(id)
  })
  $(".member-list li").click(function () {
    var html = $(this).html()
    $("#teamInfo .team-info").html(html)
    showDialog('teamInfo')
  })
  // values轮播控制实例
  var valuesSwiper = new Swiper('.values-container', {
    effect: 'fade',
    loop: true,
    loopedSlides: 7,
    autoplay:{
      delay: 8000,//8秒切换一次
      disableOnInteraction: false,
    },
    fadeEffect: {
      crossFade: true,
    },
    parallax: true,
    pagination: {
      el: '.values-nav',
      clickable: true,
      renderBullet: function (index, className) {
        
        return '<a href="javascript:;" class="' + className + '">' + $('.values-container').find(".swiper-slide").eq(index).find("h3").text() + '</a>';
      },
    },
    navigation: {
      nextEl: '.values-next-btn',
      prevEl: '.values-pre-btn'
    },
    on: {
      transitionStart: function(){
        $(".values-container .spinner").removeClass("ac");
        document.querySelectorAll(".value-p-item").forEach(item=>{
          item.style = '';
        });
        $(`.vp${this.realIndex+1}`)[0].style = 'background:#A5B93F';
      },
      transitionEnd: function(){
        $(".values-container .spinner").addClass("ac");
      },
    },
  });
  document.querySelectorAll(".value-p-item").forEach(item=>{
    item.addEventListener('click',(e)=>{
      let index = e.target.dataset.vpid - 1;
      valuesSwiper.slideToLoop(index);
    });
  });
  initPartner();
  // partner轮播控制实例
  var tabPartner = new Swiper(".tab-partner", {
    loop: true,
    slidesPerView: 'auto',
    loopedSlides: 7,
    centeredSlides: true,
    spaceBetween: 20,
    slideToClickedSlide: true,
  });
  var partnerContainer = new Swiper(".partner-container",{
    loop: true,
    loopedSlides: 7,
    parallax : true,
    speed: 750,
    autoplay: {
      delay: 8000, //8秒切换一次
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    controller: {
      control: tabPartner,
    },
    navigation: {
      nextEl: '.partner-next-btn',
      prevEl: '.partner-pre-btn',
    },
    on: {
      transitionStart: function(){
        $(".partner-container .spinner").removeClass("active")
      },
      transitionEnd: function(){
        $(".partner-container .spinner").addClass("active")
      },
      click: function(e) {
        // if (e.target.parentNode.className == 'partner-pre-btn' || e.target.parentNode.className == 'partner-next-btn') {
        //   return
        // } else {
        //   showDialog('partner-item');
        //   console.log(e.target.parentNode.parentNode.dataset.swiperSlideIndex);  
        // }
      }
    },
  })

  tabPartner.controller.control = partnerContainer;
  partnerContainer.controller.control = tabPartner;

  $(".nav li").click(function () {
    hideDialog('nav')
    var id = String($(this).find("a").text()).toLowerCase()
    toId(id);
    $(this).addClass("active").siblings().removeClass("active")
  });
  $(".pc-nav-btn-box a").click(function () {
    var id = String($(this).text()).toLowerCase()
    toId(id);
    $(this).addClass("active").siblings().removeClass("active")
  });

  var scrollTop = $(window).scrollTop();
  	if(scrollTop>10) {
  	  $(".header").addClass("active")
    }
    var valuesFlag = true;
    var partnerFlag = true;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var h = $(this).height();
  	if(scrollTop>100) {
      $(".header").addClass("active");
      $(".arrow-up").fadeOut(500)
    }
  	else {
      $(".header").removeClass("active")
      $(".arrow-up").fadeIn(500)
    }

    $(".animate-scroll").each(function(){
      let ttop = $(this).offset().top;
      if(ttop-50 < scrollTop + 3*h/4) {
        $(this).addClass("active");
      }
      if($(this).hasClass("values-wrapper") && valuesFlag) {
        valuesSwiper.slideToLoop(0)
        valuesFlag = false
      }
      if($(this).hasClass("partner-wrapper") && partnerFlag) {
        partnerContainer.slideToLoop(0)
        partnerFlag = false
      }
    })

  })

})
 