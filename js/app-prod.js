"use strict";

angular.module('app', []).controller("myCtrl", function ($scope, $sce) {
  $scope.attachment = false;
  $scope.filterByGroup = {};
  $scope.searchText='';
  $scope.content = $sce.trustAsHtml("\n    <div id=\"carouselExampleControls\" style=\"margin: 0 auto\" class=\"carousel slide\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <img class=\"img-fluid center-block\"  src=\"img/img1.png\" alt=\"First slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"img-fluid center-block\"  src=\"img/img2.png\" alt=\"Second slide\">\n          </div>\n          <div class=\"carousel-item\">\n            <img class=\"img-fluid center-block\" src=\"img/img3.png\" alt=\"Third slide\">\n          </div>\n          <div class=\"carousel-item\">\n          <img class=\"img-fluid center-block\" src=\"img/img4.png\" alt=\"Forth slide\">\n        </div>\n          <div class=\"carousel-item\">\n          <img class=\"img-fluid center-block\" src=\"img/img5.png\" alt=\"Fifth slide\">\n        </div>\n          <div class=\"carousel-item\">\n          <img class=\"img-fluid center-block\" src=\"img/img6.png\" alt=\"6 slide\">\n        </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    ");

  $scope.reloadPage = function () {
    window.location.reload();
  };

  $scope.Dnl = function (ref) {
    $scope.ref = ref;
  };

  $scope.linkClicked = function (ref) {
    var html = "<iframe src='" + ref + "' width='100%' style='height: -webkit-fill-available;min-height: 500px;'>";
    $scope.content = $sce.trustAsHtml(html);
  };

  $scope.clearSearch = function () {
    var e = document.getElementById("searchText");
  
    e.value = "";
    var $e = angular.element(e);
    $e.triggerHandler('input');
    $scope.searchText='';
  };

  $scope.topics = [{
    title: "?????? ?????????????? HTML",
    sortOrder: 1,
    icon: "",
    dnload: "",
    dnloadText: "",
    subGroups: [{
      "sub-title": "?????????????? HTML",
      items: [{
        "item-title": "?????????? HTML",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/01introduction.pdf",
        "Vurl": "doc/HTML/01introduction.mp4"
      }, {
        "item-title": "?????????? ????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/02design_website.pdf",
        "Vurl": "doc/HTML/02design_website.mp4"
      }, {
        "item-title": "?????????? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/03design_pages.pdf",
        "Vurl": "doc/HTML/03design_pages.mp4"
      }, {
        "item-title": "???????? ???????????????? ?????????????? Tags",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/04tags.pdf",
        "Vurl": "doc/HTML/04tags.mp4"
      }, {
        "item-title": "?????????? ???????? HTML",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/05create_template.pdf",
        "Vurl": "doc/HTML/05create_template.mp4"
      }, {
        "item-title": "?????????? ??????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/06insert_title.pdf",
        "Vurl": "doc/HTML/06insert_title.mp4"
      }, {
        "item-title": "?????????? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/07insert_paragraph.pdf",
        "Vurl": "doc/HTML/07insert_paragraph.mp4"
      }, {
        "item-title": "?????????? ???????? IMG",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/08insert_image.pdf",
        "Vurl": "doc/HTML/08insert_image.mp4"
      }, {
        "item-title": "?????????? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/09insert_tables.pdf",
        "Vurl": "doc/HTML/09insert_tables.mp4"
      }, {
        "item-title": "?????????? ???????????????? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/10Insert_hyperlink.pdf",
        "Vurl": "doc/HTML/10Insert_hyperlink.mp4"
      }]
    },{
      "sub-title": "?????????? ???????????? ?????? ??????????",
      items: [{
        "item-title": "?????????? ???????????? ???????????????? ?????????? div",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/11div_tages.pdf",
        "Vurl": "doc/HTML/11div_tages.mp4"
      }, {
        "item-title": "?????????? ???????????? ???????????? iframe",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/12iframe_tag.pdf",
        "Vurl": "doc/HTML/12iframe_tag.mp4"
      }, {
        "item-title": "?????????????? ?????????? ???????????? ???????????? iframe",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/13using_iframe.pdf",
        "Vurl": "doc/HTML/13using_iframe.mp4"
      }, {
        "item-title": "?????????????? ???????????? id ???????????? class",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/HTML/14id_class_use.pdf",
        "Vurl": "doc/HTML/14id_class_use.mp4"
      }]
    }]
  },{
    title: "?????? ?????????????? CSS",
    sortOrder: 2,
    icon: "",
    dnload: "",
    dnloadText: "",
    subGroups: [{
      "sub-title": "?????? ??????????????",
      items: [{
        "item-title": "Inline Style",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/01inline_stylesheet.pdf",
        "Vurl": "doc/CSS/01inline_stylesheet.mp4"
      }, {
        "item-title": "Embedded Stylesheet",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/02embeded_stylesheet.pdf",
        "Vurl": "doc/CSS/02embeded_stylesheet.mp4"
      }, {
        "item-title": "External Stylesheet",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/03extrenal_stylesheet.pdf",
        "Vurl": "doc/CSS/03extrenal_stylesheet.mp4"
      }]
    },{
      "sub-title": "?????????????? CSS",
      items: [{
        "item-title": "?????????? ??????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/04comment.pdf",
        "Vurl": "doc/CSS/04comment.mp4"
      }, {
        "item-title": "?????????? ????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/05f_text.pdf",
        "Vurl": "doc/CSS/05f_text.mp4"
      }, {
        "item-title": "?????????? ??????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/06f_images.pdf",
        "Vurl": "doc/CSS/06f_images.mp4"
      }, {
        "item-title": "?????????? ?????? ?????????? ????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/07f_background.pdf",
        "Vurl": "doc/CSS/07f_background.mp4"
      }, {
        "item-title": "?????????? ???????????????? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/08f_hyperlink.pdf",
        "Vurl": "doc/CSS/08f_hyperlink.mp4"
      }, {
        "item-title": "?????????? ?????????? ???????????????? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/09f_hyperlink_condition.pdf",
        "Vurl": "doc/CSS/09f_hyperlink_condition.mp4"
      }]
    }, {
      "sub-title": "?????????? ??????????????",
      items: [{
        "item-title": "?????????? ????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/10f_tables.pdf",
        "Vurl": "doc/CSS/10f_tables.mp4"
      }, {
        "item-title": "?????????? ???? ?????????? ????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/11f_table_hrow.pdf",
        "Vurl": "doc/CSS/11f_table_hrow.mp4"
      }, {
        "item-title": "?????????? ?????????? ????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/12f_table_cells.pdf",
        "Vurl": "doc/CSS/12f_table_cells.mp4"
      }]
    }, {
      "sub-title": "?????????? ?????????? ????????????",
      items: [{
        "item-title": "?????????? ???????????? Container",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/13f_container.pdf",
        "Vurl": "doc/CSS/13f_container.mp4"
      }, {
        "item-title": "?????????? ???????????? ???????????? Header",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/14f_header.pdf",
        "Vurl": "doc/CSS/14f_header.mp4"
      }, {
        "item-title": "?????????? ???????????? ???????????? Footer",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/15f_Footer.pdf",
        "Vurl": "doc/CSS/15f_Footer.mp4"
      }, {
        "item-title": "?????????? ???????????? Sidebar",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/16f_sidebar.pdf",
        "Vurl": "doc/CSS/16f_sidebar.mp4"
      }, {
        "item-title": "?????????? ???????????? Content",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/17f_content.pdf",
        "Vurl": "doc/CSS/17f_content.mp4"
      }, {
        "item-title": "?????????? ???????????? iframe",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/CSS/18f_iframe.pdf",
        "Vurl": "doc/CSS/18f_iframe.mp4"
      }]
    }]
  }, {
    title: "?????? ?????????????? PHP",
    sortOrder: 3,
    icon: "",
    dnload: "",
    dnloadText: "",
    subGroups: [{
      "sub-title": "?????????????? PHP",
      items: [{
        "item-title": "PHP",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/01php_template.pdf",
        "Vurl": "doc/PHP/01php_template.mp4"
      }, {
        "item-title": "???????????? echo",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/02echo.pdf",
        "Vurl": "doc/PHP/02echo.mp4"
      }, {
        "item-title": "???????????? ???????????? ?????????????????? While",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/03while_statment.pdf",
        "Vurl": "doc/PHP/03while_statment.mp4"
      }, {
        "item-title": "???????????? ???????????? ?????????????? IF Then Else",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/04if_statment.pdf",
        "Vurl": "doc/PHP/04if_statment.mp4"
      }, {
        "item-title": "??????????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/05variables.pdf",
        "Vurl": "doc/PHP/05variables.mp4"
      }, {
        "item-title": "?????????? ?????? ?????????????? ???? Chrome DevTools",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/06how_form_works.pdf",
        "Vurl": "doc/PHP/06how_form_works.mp4"
      }, {
        "item-title": "???????? ?????????? ???????????????? Post ?? Get",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/07post_get.pdf",
        "Vurl": "doc/PHP/07post_get.mp4"
      }, {
        "item-title": "???????????? ?????? ???????????? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/08form_components.pdf",
        "Vurl": "doc/PHP/08form_components.mp4"
      }]
    },{
      "sub-title": "?????????? ????????????????",
      items: [{
        "item-title": "?????????????? ?????????? ????????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/09review_database.pdf",
        "Vurl": "doc/PHP/09review_database.mp4"
      }, {
        "item-title": "?????????? ???????????? ????????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/10connect_to_database.pdf",
        "Vurl": "doc/PHP/10connect_to_database.mp4"
      }, {
        "item-title": "???????????? ???? ?????????????? ???????????? ????????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/11using_if_statment.pdf",
        "Vurl": "doc/PHP/11using_if_statment.mp4"
      }]
    },{
      "sub-title": "???????? ?????????? ??????",
      items: [{
        "item-title": "?????????? ??????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/12create_insert_form.pdf",
        "Vurl": "doc/PHP/12create_insert_form.mp4"
      }, {
        "item-title": "?????????????? Php",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/13php_insert_record.pdf",
        "Vurl": "doc/PHP/13php_insert_record.mp4"
      }, {
        "item-title": "???????????? ???? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/14check_insert_query.pdf",
        "Vurl": "doc/PHP/14check_insert_query.mp4"
      }]
    },{
      "sub-title": "???????? ?????? ??????",
      items: [{
        "item-title": "?????????? ??????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/15create_delete_form.pdf",
        "Vurl": "doc/PHP/15create_delete_form.mp4"
      }, {
        "item-title": "?????????????? Php",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/16php_delete_record.pdf",
        "Vurl": "doc/PHP/16php_delete_record.mp4"
      }, {
        "item-title": "???????????? ???? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/17check_delete_record.pdf",
        "Vurl": "doc/PHP/17check_delete_record.mp4"
      }]
    },{
      "sub-title": "???????? ?????????? ??????",
      items: [{
        "item-title": "?????????? ??????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/18create_update_form.pdf",
        "Vurl": "doc/PHP/18create_update_form.mp4"
      }, {
        "item-title": "?????????????? Php",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/19php_update_record.pdf",
        "Vurl": "doc/PHP/19php_update_record.mp4"
      }, {
        "item-title": "???????????? ???? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/20check_php_update.pdf",
        "Vurl": "doc/PHP/20check_php_update.mp4"
      }]
    },{
      "sub-title": "???????? ?????????????????? ???? ??????????????",
      items: [{
        "item-title": "?????????? ??????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/21create_select_form.pdf",
        "Vurl": "doc/PHP/21create_select_form.mp4"
      }, {
        "item-title": "?????????????? Php",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/22php_select_record.pdf",
        "Vurl": "doc/PHP/22php_select_record.mp4"
      }, {
        "item-title": "???????????? ???? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/23check_php_select.pdf",
        "Vurl": "doc/PHP/23check_php_select.mp4"
      }, {
        "item-title": "?????????? ?????????? ?????????????? ?????????? ??????????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/PHP/24f_select_result_table.pdf",
        "Vurl": "doc/PHP/24f_select_result_table.mp4"
      }]
    }]
  },{
    title: "?????????????????? ???????????? ??????????",
    sortOrder: 0,
    icon: "book",
    dnload: "WorkingFiles/WorkFiles.zip",
    dnloadText: "?????????? ?????????? ??????????",
    subGroups: [{
      "sub-title": "?????????????? ????????",
      items: [{
        "item-title": "?????????????? ????????",
        "Vicon": "file-video-o",
        "Dicon": "file-pdf-o",
        "Durl": "doc/general_instructions.pdf",
        "Vurl": ""
      }]
    }]
  }];
});