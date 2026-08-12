(function ($) {
  if (localStorage.getItem("color"))
    $("#color").attr(
      "href",
      "../assets/css/" + localStorage.getItem("color") + ".css"
    );
  if (localStorage.getItem("dark")) $("body").attr("class", "dark-only");
  if (!localStorage.getItem("primary") || localStorage.getItem("primary") === "#7A70BA") {
    localStorage.setItem("primary", localStorage.getItem("dark") ? "#4ADE80" : "#16A34A");
  }
  if (!localStorage.getItem("secondary") || localStorage.getItem("secondary") === "#48A3D7") {
    localStorage.setItem("secondary", localStorage.getItem("dark") ? "#60A5FA" : "#2563EB");
  }
  localStorage.setItem("color", "color-1");
  $("#color").attr("href", "../assets/css/color-1.css");
  $(
    '<div class="customizer-links"><div class="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical"><a class="nav-link" id="c-pills-layouts-tab" data-bs-toggle="pill" href="#c-pills-layouts" role="tab" aria-controls="c-pills-layouts" aria-selected="true" data-original-title=""><div class="customizer-icon"><svg class="stroke-icon" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect></svg></div><span>Check layouts</span></a> <a class="nav-link" id="c-pills-home-tab" data-bs-toggle="pill" href="#c-pills-home" role="tab" aria-controls="c-pills-home" aria-selected="true" data-original-title=""><div class="settings customizer-icon"><svg class="stroke-icon" viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="10.5" r="2.5"></circle><circle cx="8.5" cy="7.5" r="2.5"></circle><path d="M12 22C6.48 22 2 17.97 2 13S6.48 4 12 4s10 3.58 10 8c0 1.66-1.34 3-3 3h-1.8c-1.1 0-2 .9-2 2 0 .55.22 1.05.59 1.41.38.37.61.88.61 1.43C16.4 21.03 14.44 22 12 22Z"></path></svg></div><span>Quick option</span></a> <a class="nav-link" href="#" data-original-title=""><div class="customizer-icon"><svg class="stroke-icon" viewBox="0 0 24 24"><path d="M4 14a8 8 0 0 1 16 0"></path><path d="M18 19c0 1.1-.9 2-2 2h-4"></path><path d="M4 14v3a2 2 0 0 0 2 2h1v-7H6a2 2 0 0 0-2 2Z"></path><path d="M20 14v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2Z"></path></svg></div><span>Support</span></a> <a class="nav-link" href="#" data-original-title=""><div class="customizer-icon"><svg class="stroke-icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path><path d="M14 2v6h6"></path><path d="M8 13h8"></path><path d="M8 17h6"></path></svg></div><span>Document</span></a> <a class="nav-link" target="_blank" href="landing-page.html" data-original-title=""><div class="customizer-icon"><svg class="stroke-icon" viewBox="0 0 24 24"><path d="M12 2l2.9 6.26L22 9.27l-5.2 4.93L18.18 21 12 17.77 5.82 21l1.38-6.8L2 9.27l7.1-1.01L12 2Z"></path></svg></div><span>Check features</span></a> <a class="nav-link" href="#" data-original-title=""><div class="customizer-icon"><svg class="stroke-icon" viewBox="0 0 24 24"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h8.78a2 2 0 0 0 1.95-1.57L21 7H5.12"></path></svg></div><span>Buy now</span></a></div></div><div class="customizer-contain"><div class="tab-content" id="c-pills-tabContent"><div class="customizer-header"><i class="icofont icofont-close icon-close"></i><h5 class="f-w-700">Preview Settings</h5><p class="mb-0">Try It Real Time <svg class="txt-primary" style="width:16px;height:16px;vertical-align:-3px"><use href="#profile-check"></use></svg></p></div><div class="customizer-body custom-scrollbar"><div class="tab-pane fade show active" id="c-pills-home" role="tabpanel" aria-labelledby="c-pills-home-tab"><h5>Layout Type</h5><ul class="main-layout layout-grid"><li data-attr="ltr" class="active"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">LTR</span></li></ul></div></li><li data-attr="rtl"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-light body me-1"><span class="badge badge-primary">RTL</span></li><li class="bg-light sidebar"></li></ul></div></li><li data-attr="ltr" class="box-layout px-3"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">Box</span></li></ul></div></li></ul><h5>Sidebar Type</h5><ul class="sidebar-type layout-grid"><li data-attr="normal-sidebar"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul></div></li><li data-attr="compact-sidebar"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-dark sidebar compact"></li><li class="bg-light body"></li></ul></div></li></ul><h5>Sidebar Icon</h5><ul class="sidebar-setting layout-grid"><li class="active" data-attr="stroke-svg"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body bg-light"><span class="badge badge-primary">Stroke</span></div></li><li data-attr="fill-svg"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body bg-light"><span class="badge badge-primary">Fill</span></div></li></ul><h5>Unlimited Color</h5><ul class="layout-grid unlimited-color-layout"><input id="ColorPicker1" type="color" value="#16A34A" name="Background"><input id="ColorPicker2" type="color" value="#2563EB" name="Background"><button type="button" class="color-apply-btn btn btn-primary color-apply-btn">Apply</button></ul><h5>Light layout</h5><ul class="layout-grid customizer-color"><li class="color-layout" data-attr="color-1" data-primary="#16A34A" data-secondary="#2563EB"><div></div></li><li class="color-layout" data-attr="color-2" data-primary="#22C55E" data-secondary="#16A34A"><div></div></li><li class="color-layout" data-attr="color-3" data-primary="#F59E0B" data-secondary="#2563EB"><div></div></li><li class="color-layout" data-attr="color-4" data-primary="#EF4444" data-secondary="#F59E0B"><div></div></li><li class="color-layout" data-attr="color-5" data-primary="#64748B" data-secondary="#E2E8F0"><div></div></li><li class="color-layout" data-attr="color-6" data-primary="#0F172A" data-secondary="#F8FAFC"><div></div></li></ul><h5>Dark Layout</h5><ul class="layout-grid customizer-color dark"><li class="color-layout" data-attr="color-1" data-primary="#4ADE80" data-secondary="#60A5FA"><div></div></li><li class="color-layout" data-attr="color-2" data-primary="#4ADE80" data-secondary="#22C55E"><div></div></li><li class="color-layout" data-attr="color-3" data-primary="#FBBF24" data-secondary="#60A5FA"><div></div></li><li class="color-layout" data-attr="color-4" data-primary="#F87171" data-secondary="#FBBF24"><div></div></li><li class="color-layout" data-attr="color-5" data-primary="#94A3B8" data-secondary="#334155"><div></div></li><li class="color-layout" data-attr="color-6" data-primary="#F8FAFC" data-secondary="#020617"><div></div></li></ul><h5>Mix Layout</h5><ul class="layout-grid customizer-mix"><li class="color-layout" data-attr="dark-sidebar"><div class="header bg-light"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul></div></li><li class="color-layout" data-attr="dark-only"><div class="header bg-dark"><ul><li></li><li></li><li></li></ul></div><div class="body"><ul><li class="bg-dark sidebar"></li><li class="bg-dark body"></li></ul></div></li></ul></div><div class="tab-pane fade" id="c-pills-layouts" role="tabpanel" aria-labelledby="c-pills-layouts-tab"></div></div></div></div>'
  ).appendTo($("body"));
  (function () { })();
  //live customizer js
  $(document).ready(function () {
    $(".customizer-color:not(.dark) li").on("click", function () {
      $(".customizer-color li").removeClass("active");
      $(this).addClass("active");
      var color = $(this).attr("data-attr");
      var primary = $(this).attr("data-primary");
      var secondary = $(this).attr("data-secondary");
      localStorage.setItem("color", "color-1");
  $("#color").attr("href", "../assets/css/color-1.css");
      localStorage.setItem("primary", primary);
      localStorage.setItem("secondary", secondary);
      localStorage.removeItem("dark");
      $("#color").attr("href", "../assets/css/color-1.css");
      $(".dark-only").removeClass("dark-only");
      location.reload(true);
    });

    $(".customizer-color.dark li").on("click", function () {
      $(".customizer-color.dark li").removeClass("active");
      $(this).addClass("active");
      var primary = $(this).attr("data-primary");
      var secondary = $(this).attr("data-secondary");
      $("body").attr("class", "dark-only");
      localStorage.setItem("dark", "dark-only");
      localStorage.setItem("color", "color-1");
  $("#color").attr("href", "../assets/css/color-1.css");
      localStorage.setItem("primary", primary);
      localStorage.setItem("secondary", secondary);
      document.documentElement.style.setProperty("--theme-default", primary);
      document.documentElement.style.setProperty("--theme-secondary", secondary);
      $("#color").attr("href", "../assets/css/color-1.css");
    });

    if (localStorage.getItem("primary") != null) {
      document.documentElement.style.setProperty(
        "--theme-default",
        localStorage.getItem("primary")
      );
    }
    if (localStorage.getItem("secondary") != null) {
      document.documentElement.style.setProperty(
        "--theme-secondary",
        localStorage.getItem("secondary")
      );
    }
    $(
      ".customizer-links #c-pills-home-tab, .customizer-links #c-pills-layouts-tab"
    ).click(function () {
      $(".customizer-contain").addClass("open");
      $(".customizer-links").addClass("open");
    });

    $(".close-customizer-btn").on("click", function () {
      $(".floated-customizer-panel").removeClass("active");
    });

    $(".customizer-contain .icon-close").on("click", function () {
      $(".customizer-contain").removeClass("open");
      $(".customizer-links").removeClass("open");
    });

    $(".color-apply-btn").click(function () {
      location.reload(true);
    });

    var primary = document.getElementById("ColorPicker1").value;
    document.getElementById("ColorPicker1").onchange = function () {
      primary = this.value;
      localStorage.setItem("primary", primary);
      document.documentElement.style.setProperty("--theme-default", primary);
    };

    var secondary = document.getElementById("ColorPicker2").value;
    document.getElementById("ColorPicker2").onchange = function () {
      secondary = this.value;
      localStorage.setItem("secondary", secondary);
      document.documentElement.style.setProperty(
        "--theme-secondary",
        secondary
      );
    };

    $(".customizer-mix li").on("click", function () {
      $(".customizer-mix li").removeClass("active");
      $(this).addClass("active");
      var mixLayout = $(this).attr("data-attr");
      $("body").attr("class", mixLayout);
    });

    $(".sidebar-setting li").on("click", function () {
      $(".sidebar-setting li").removeClass("active");
      $(this).addClass("active");
      var sidebar = $(this).attr("data-attr");
      $(".sidebar-wrapper").attr("data-layout", sidebar);
    });

    $(".sidebar-main-bg-setting li").on("click", function () {
      $(".sidebar-main-bg-setting li").removeClass("active");
      $(this).addClass("active");
      var bg = $(this).attr("data-attr");
      $(".sidebar-wrapper").attr("class", "sidebar-wrapper " + bg);
    });

    $(".sidebar-type li").on("click", function () {
      $("body").append("");
      console.log("test");
      var type = $(this).attr("data-attr");

      var boxed = "";
      if ($(".page-wrapper").hasClass("box-layout")) {
        boxed = "box-layout";
      }
      switch (type) {
        case "compact-sidebar": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper " + boxed
          );
          $(this).addClass("active");
          localStorage.setItem("page-wrapper", "compact-wrapper");
          break;
        }
        case "normal-sidebar": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper horizontal-wrapper " + boxed
          );
          $(".logo-wrapper")
            .find("img")
            .attr("src", "../assets/images/logo/logo.png");
          localStorage.setItem("page-wrapper", "horizontal-wrapper");
          break;
        }
        case "default-body": {
          $(".page-wrapper").attr("class", "page-wrapper  only-body" + boxed);
          localStorage.setItem("page-wrapper", "only-body");
          break;
        }
        case "dark-sidebar": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper dark-sidebar" + boxed
          );
          localStorage.setItem("page-wrapper", "compact-wrapper dark-sidebar");
          break;
        }
        case "compact-wrap": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-sidebar" + boxed
          );
          localStorage.setItem("page-wrapper", "compact-sidebar");
          break;
        }
        case "color-sidebar": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper color-sidebar" + boxed
          );
          localStorage.setItem("page-wrapper", "compact-wrapper color-sidebar");
          break;
        }
        case "compact-small": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-sidebar compact-small" + boxed
          );
          localStorage.setItem("page-wrapper", "compact-sidebar compact-small");
          break;
        }
        case "box-layout": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper box-layout " + boxed
          );
          localStorage.setItem("page-wrapper", "compact-wrapper box-layout");
          break;
        }
        case "enterprice-type": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper horizontal-wrapper enterprice-type" + boxed
          );
          localStorage.setItem(
            "page-wrapper",
            "horizontal-wrapper enterprice-type"
          );
          break;
        }
        case "modern-layout": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper modern-type" + boxed
          );
          localStorage.setItem("page-wrapper", "compact-wrapper modern-type");
          break;
        }
        case "material-layout": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper horizontal-wrapper material-type" + boxed
          );
          localStorage.setItem(
            "page-wrapper",
            "horizontal-wrapper material-type"
          );

          break;
        }
        case "material-icon": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-sidebar compact-small material-icon" + boxed
          );
          localStorage.setItem(
            "page-wrapper",
            "compact-sidebar compact-small material-icon"
          );

          break;
        }
        case "advance-type": {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper horizontal-wrapper enterprice-type advance-layout" +
            boxed
          );
          localStorage.setItem(
            "page-wrapper",
            "horizontal-wrapper enterprice-type advance-layout"
          );

          break;
        }
        default: {
          $(".page-wrapper").attr(
            "class",
            "page-wrapper compact-wrapper " + boxed
          );
          localStorage.setItem("page-wrapper", "compact-wrapper");
          break;
        }
      }
      // $(this).addClass("active");
      location.reload(true);
    });

    $(".main-layout li").on("click", function () {
      $(".main-layout li").removeClass("active");
      $(this).addClass("active");
      var layout = $(this).attr("data-attr");
      $("body").attr("class", layout);
      $("html").attr("dir", layout);
    });

    $(".main-layout .box-layout").on("click", function () {
      $(".main-layout .box-layout").removeClass("active");
      $(this).addClass("active");
      var layout = $(this).attr("data-attr");
      $("body").attr("class", "box-layout");
      $("html").attr("dir", layout);
    });
  });
})(jQuery);
