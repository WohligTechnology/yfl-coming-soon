angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Coming Soon");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'img/slider_yoga.jpg',
    'img/slider_food.jpg',
    'img/slider_love.jpg'
  ];

  angular.element(document).ready(function () {
    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'yogafoodlove',
        accessToken: '1388790889.e437b0c.e485f0e11e654dcdb5d92b3cc31c343d',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-6 col-sm-4 margin-bot"><div class="relative"><img class="full-image"src="{{image}}"/><div class="caption"><div class="middle-margin">{{caption}}</div></div><div class="prod_info"><a href="https://www.facebook.com/dialog/share?app_id=956680054426963&display=popup&href={{link}}&redirect_uri=http://www.yogafoodlove.com"target="_blank"><i class=" trans fa fa-facebook"></i></a><a href="http://twitter.com/home?status={{link}}"target="_blank"><i class=" trans fa fa-twitter"></i></a><a href="http://pinterest.com/pin/create/button/?url={{link}}&media={{image}}"target="_blank"><i class=" trans fa fa-pinterest"></i></a><a href="{{link}}"target="_blank"><i class=" trans fa fa-instagram"></i></a></div></div></div>'
    });
    feed.run();
   });

  setTimeout(function() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
         ! function(d, s, id) {
             var js, fjs = d.getElementsByTagName(s)[0],
                 p = /^http:/.test(d.location) ? 'http' : 'https';
             if (!d.getElementById(id)) {
                 js = d.createElement(s);
                 js.id = id;
                 js.src = p + "://platform.twitter.com/widgets.js";
                 fjs.parentNode.insertBefore(js, fjs);
             }
         }(document, "script", "twitter-wjs");
     });

})

.controller('PrivacyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("privacy-policy");
  $scope.menutitle = NavigationService.makeactive("Privacy Policy");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'img/slider_yoga.jpg',
    'img/slider_food.jpg',
    'img/slider_love.jpg'

  ];
})

.controller('CollaborateWithUsCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("collaborate-with-us");
  $scope.menutitle = NavigationService.makeactive("Collaborate With Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.goTo =  function(data) {
    $state.go(data);
  };
})

.controller('FormYogaStudioCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("form-yoga-studio");
  $scope.menutitle = NavigationService.makeactive("Yoga Studio Collaboration Form");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.countries = NavigationService.getcountries();
})
.controller('FormYogaLabelCollaborationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("form-yoga-label");
  $scope.menutitle = NavigationService.makeactive("Yoga Label Collaboration Form");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('FormRestaurantCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("form-restaurant");
  $scope.menutitle = NavigationService.makeactive("Form Restaurant");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('FormNutrionistCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("form-nutrionist");
  $scope.menutitle = NavigationService.makeactive("Form Nutritonist");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('FormPersonalCampaignCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("form-personal-campaign");
  $scope.menutitle = NavigationService.makeactive("Form Personal Campaign");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
      $scope.dt = null;
    };

    $scope.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    $scope.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
      var date = data.date,
        mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
      $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
      opened: false
    };

    $scope.popup2 = {
      opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

    function getDayClass(data) {
      var date = data.date,
        mode = data.mode;
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i = 0; i < $scope.events.length; i++) {
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    }


})


.controller('FormArtistCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("form-artist");
  $scope.menutitle = NavigationService.makeactive("Form Artist");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

  $scope.changeLanguage = function() {
    console.log("Language CLicked");

    if (!$.jStorage.get("language")) {
      $translate.use("hi");
      $.jStorage.set("language", "hi");
    } else {
      if ($.jStorage.get("language") == "en") {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        $translate.use("en");
        $.jStorage.set("language", "en");
      }
    }
    //  $rootScope.$apply();
  };


})

;
