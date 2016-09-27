// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'imageupload'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })

    .state('main', {
        url: "/",
        templateUrl: "views/template.html",
        controller: 'mCtrl'
    })

    .state('privacy-policy', {
        url: "/privacy-policy",
        templateUrl: "views/template.html",
        controller: 'PrivacyCtrl'
    })

    .state('collaborate-with-us', {
        url: "/collaborate-with-us",
        templateUrl: "views/template.html",
        controller: 'CollaborateWithUsCtrl'
    })

    .state('form-yoga-studio', {
            url: "/form-yoga-studio",
            templateUrl: "views/template.html",
            controller: 'FormYogaStudioCtrl'
        })
        .state('form-yoga-label', {
            url: "/form-yoga-label",
            templateUrl: "views/template.html",
            controller: 'FormYogaLabelCollaborationCtrl'
        })

    .state('form-artist', {
        url: "/form-artist",
        templateUrl: "views/template.html",
        controller: 'FormArtistCtrl'
    })

    .state('form-personal-campaign', {
        url: "/form-personal-campaign",
        templateUrl: "views/template.html",
        controller: 'FormPersonalCampaignCtrl'
    })


    .state('form-nutrionist', {
        url: "/form-nutrionist",
        templateUrl: "views/template.html",
        controller: 'FormNutrionistCtrl'
    })

    .state('form-restaurant', {
        url: "/form-restaurant",
        templateUrl: "views/template.html",
        controller: 'FormRestaurantCtrl'
    })

    .state('article', {
            url: "/article",
            templateUrl: "views/template.html",
            controller: 'ArticleCtrl'
        })
        .state('recipes-detail', {
            url: "/recipes-detail",
            templateUrl: "views/template.html",
            controller: 'RecipesDetailCtrl'
        })
        .state('article-detail', {
            url: "/article-detail",
            templateUrl: "views/template.html",
            controller: 'ArticleDetailCtrl'
        })
        .state('restaurant-detail', {
            url: "/restaurant-detail",
            templateUrl: "views/template.html",
            controller: 'RestaurantDetailCtrl'
        })
        .state('restaurant', {
            url: "/restaurant",
            templateUrl: "views/template.html",
            controller: 'RestaurantCtrl'
        })

    .state('studio-detail', {
        url: "/studio-detail",
        templateUrl: "views/template.html",
        controller: 'StudioDetailCtrl'
    })

    .state('teacher-listing', {
        url: "/teacher-listing",
        templateUrl: "views/template.html",
        controller: 'TeacherCtrl'
    })

    .state('style-listing', {
        url: "/style-listing",
        templateUrl: "views/template.html",
        controller: 'StyleListCtrl'
    })

    .state('style-detail', {
        url: "/style-detail",
        templateUrl: "views/template.html",
        controller: 'StyleDetailCtrl'
    })

    .state('teacher-profile', {
        url: "/teacher-profile",
        templateUrl: "views/template.html",
        controller: 'TeachProfileCtrl'
    })


    .state('studio-list', {
        url: "/studio-list",
        templateUrl: "views/template.html",
        controller: 'StudioListCtrl'
    });


    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});
firstapp.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});


firstapp.directive('fancyboxBox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.directive('autoHeight', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            var addHeight = function () {
                $element.css("min-height", windowHeight);
            };
            addHeight();
        }
    };
});
firstapp.directive('autoHeightfixed', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            var addHeight = function () {
                $element.css("height", windowHeight);
            };
            addHeight();
        }
    };
});

firstapp.directive('autoHeightfixed', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var feed = new Instafeed({
                get: 'tagged',
                tagName: 'yogafoodlove',
                accessToken: '3102400429.d6bc71c.1fb75e5d39b24625843acfea8cd1972a'
            });
            feed.run();
        }
    };
});


firstapp.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g, '');

                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                return undefined;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

firstapp.directive('aplhaOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                var transformedInput = text.replace(/[^a-zA-Z]/g, '');
                if (transformedInput !== text) {
                    ngModelCtrl.$setViewValue(transformedInput);
                    ngModelCtrl.$render();
                }
                return transformedInput;
            }
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});


firstapp.filter('uploadpath', function () {
    return function (input, width, height, style) {
        var other = "";
        if (width && width != "") {
            other += "&width=" + width;
        }
        if (height && height != "") {
            other += "&height=" + height;
        }
        if (style && style != "") {
            other += "&style=" + style;
        }
        if (input) {
            if (input.indexOf('https://') == -1) {
                return imgpath + "?file=" + input + other;
            } else {
                return input;
            }
        }
    };
});

firstapp.filter('showbtn', function (NavigationService) {
    return function (input, data) {
        if (input && data && input != "" && data != "") {
            if (data._id && data.shortList && data.shortList.length > 0) {
                var foundIndex = _.findIndex(data.shortList, {
                    "expertUser": input
                })
                if (foundIndex != -1) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        } else {
            return true;
        }
    };
});
firstapp.directive('imageonload', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('load', function () {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});

firstapp.directive('uploadImage', function ($http, $filter) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            callback: "=ngCallback"
        },
        link: function ($scope, element, attrs) {
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple || attrs.multiple === "") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            if ($scope.model) {
                if (_.isArray($scope.model)) {
                    $scope.image = [];
                    _.each($scope.model, function (n) {
                        $scope.image.push({
                            url: $filter("uploadpath")(n)
                        });
                    });
                }

            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function () {
                $scope.model = [];
            };
            $scope.uploadNow = function (image) {
                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function (data) {
                    console.log("success");
                    if ($scope.callback) {
                        $scope.callback(data);
                    } else {
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                $scope.model.push(data.data[0]);
                            }
                        } else {
                            $scope.model = data.data[0];
                        }
                    }
                });
            };
        }
    };
});

firstapp.directive('img', function ($compile, $parse) {

    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);

            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancybox', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function () {
                $(".various").fancybox({
                    maxWidth: 800,
                    maxHeight: 600,
                    fitToView: false,
                    width: '70%',
                    height: '70%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none'
                });
            }, 100);
        }
    };
});
firstapp.directive('fancybox2', function ($compile, $parse) {
    return {
        restrict: 'C',
        replace: false,
        link: function ($scope, element, attrs) {

            $(".fancybox2").fancybox({
                openEffect: 'none',
                closeEffect: 'none'
            });


        }
    };
});

firstapp.directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            function inputValue(val) {
                if (val) {
                    var digits = val.replace(/[^0-9]/g, '');

                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});


firstapp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});