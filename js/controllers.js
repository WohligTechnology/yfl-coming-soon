angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'imageupload'])

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

    angular.element(document).ready(function() {
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
            js = d.createElement(s);
            js.id = id;
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

    $scope.goTo = function(data) {
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
        $scope.formData = {};

    })
    .controller('FormYogaLabelCollaborationCtrl', function($scope, TemplateService, NavigationService, $timeout) {
            //Used to name the .html file
            $scope.template = TemplateService.changecontent("form-yoga-label");
            $scope.menutitle = NavigationService.makeactive("Yoga Label Collaboration Form");
            TemplateService.title = $scope.menutitle;
            $scope.navigation = NavigationService.getnav();
            $scope.countries = NavigationService.getcountries();

            $scope.formData = {};
            $scope.formData.booksMoviesGamesArray = [];
            $scope.submitYogaLabelForm = function(formData) {
                if ($scope.formData) {

                    if ($scope.formData.primaryCategory === "other") {
                        $scope.formData.primaryCategory = $scope.formData.otherCat;
                    }
                    $scope.formData.booksMoviesGames = " ";
                    if ($scope.formData.booksMoviesGamesArray.length > 0) {
                        _.each($scope.formData.booksMoviesGamesArray, function(n) {
                            $scope.formData.booksMoviesGames += n + ",";
                        });
  $scope.formData.booksMoviesGames = $scope.formData.booksMoviesGames.substring(0, $scope.formData.booksMoviesGames.length - 1);
                        console.log("data", $scope.formData);


                    }
                }
              }

                //form
                // $scope.formComplete = false;
                // $scope.exist = false;
                // $scope.invalidPincode = false;
                // $scope.validMobileno = false;
                // $scope.formData = {};
                // $scope.formData.mediaArray = [];
                // $scope.noMedia = false;
                // $scope.submitArtistForm = function(formData) {
                //     $scope.noMedia = false;
                //     _.each($scope.formData.mediaArray, function(data, key) {
                //         if (data === "other") {
                //             $scope.formData.mediaArray[key] = $scope.formData.myother;
                //         }
                //     });
                //     console.log($scope.formData.mediaArray);
                //     if ($scope.formData) {
                //         console.log("  $scope.formData", $scope.formData);
                //         $scope.formData.mediaFor = " ";
                //         if ($scope.formData.mediaArray.length > 0) {
                //             _.each($scope.formData.mediaArray, function(n) {
                //                 $scope.formData.mediaFor += n + ",";
                //             });
                //             $scope.formData.mediaFor = $scope.formData.mediaFor.substring(0, $scope.formData.mediaFor.length - 1);
                //             NavigationService.saveArtistForm($scope.formData, function(data) {
                //                 console.log("iminnavigation", $scope.formData);
                //                 console.log("formData", data);
                //                 if (data.value === true) {
                //                     $scope.formComplete = true;
                //                     $scope.exist = false;
                //                     $scope.invalidPincode = false;
                //                     $scope.validMobileno = false;
                //                     $timeout(function() {
                //                         $scope.formComplete = false;
                //                         $scope.invalidPincode = false;
                //                         $scope.exist = false;
                //                         $scope.invalidPincode = false;
                //                         $scope.validMobileno = false;
                //                         $scope.formData = {};
                //                         $scope.formData.mediaArray = [];
                //
                //                     }, 2000);
                //                 } else if (data.value === false && data.error.errors.email) {
                //                     console.log("imin else", data.error.errors);
                //                     $scope.exist = true;
                //                     $scope.validMobileno = false;
                //                     $scope.invalidPincode = false;
                //                 } else if (data.value === false && data.error.errors.pincode) {
                //                     $scope.invalidPincode = true;
                //                     $scope.exist = false;
                //                     $scope.validMobileno = false;
                //                 } else if (data.value === false && data.error.errors.mobileNumber) {
                //                     $scope.validMobileno = true;
                //                     $scope.exist = false;
                //                     $scope.invalidPincode = false;
                //
                //                 }
                //
                //
                //             });
                //
                //
                //
                //         } else {
                //             $scope.noMedia = true;
                //         }
                //
                //     }
                // }
                //form
                $scope.booksGame = function(val) {

                    var foundIndex = _.findIndex($scope.formData.booksMoviesGamesArray, function(key) {
                        return key == val;
                    });
                    if (foundIndex == -1) {
                        $scope.formData.booksMoviesGamesArray.push(val);
                    } else {
                        $scope.formData.booksMoviesGamesArray.splice(foundIndex, 1);
                    }

                    console.log($scope.formData.booksMoviesGamesArray);
                };
            })


        .controller('FormRestaurantCtrl', function($scope, TemplateService, NavigationService, $timeout) {
            //Used to name the .html file
            $scope.template = TemplateService.changecontent("form-restaurant");
            $scope.menutitle = NavigationService.makeactive("Form Restaurant");
            TemplateService.title = $scope.menutitle;
            $scope.navigation = NavigationService.getnav();
            $scope.countries = NavigationService.getcountries();
            $scope.formData = {};
            $scope.formComplete = false;
            $scope.exist = false;
            $scope.invalidPincode = false;
            $scope.validMobileno = false;
            $scope.conatctNumber = false;
            $scope.resPhone = false;

            $scope.submitRestaurantForm = function(formData) {
                console.log("formData", formData);
                if (formData) {
                    NavigationService.saveRestaurantForm($scope.formData, function(data) {
                        console.log(data, "data");
                        if (data.value === true) {
                            $scope.formComplete = true;
                            $scope.exist = false;
                            $scope.invalidPincode = false;
                            $scope.invalidPincode = false;
                            $scope.conatctNumber = false;
                            $scope.resPhone = false;
                            $timeout(function() {
                                $scope.formComplete = false;
                                $scope.exist = false;
                                $scope.invalidPincode = false;
                                $scope.conatctNumber = false;
                                $scope.resPhone = false;

                                $scope.formData = {};


                            }, 2000);

                        } else if (data.value === false && data.error.errors.email) {
                            $scope.formComplete = false;
                            $scope.exist = true;
                            $scope.invalidPincode = false;
                            $scope.conatctNumber = false;
                            $scope.resPhone = false;
                            console.log("iminelse", data);
                        } else if (data.value === false && data.error.errors.pincode) {
                            $scope.formComplete = false;
                            $scope.exist = false;
                            $scope.resPhone = false;
                            $scope.invalidPincode = true;
                            $scope.conatctNumber = false;
                        } else if (data.value === false && data.error.errors.mobileNumber) {
                            $scope.formComplete = false;
                            $scope.validMobileno = true;
                            $scope.exist = false;
                            $scope.resPhone = false;
                            $scope.invalidPincode = false;
                            $scope.conatctNumber = false;

                        } else if (data.value === false && data.error.errors.managerNumber) {
                            $scope.conatctNumber = true;
                            $scope.formComplete = false;
                            $scope.validMobileno = false;
                            $scope.exist = false;
                            $scope.invalidPincode = false;
                            $scope.resPhone = false;

                        } else if (data.value === false && data.error.errors.resPhoneNumbers) {
                            $scope.resPhone = true;
                            $scope.conatctNumber = false;
                            $scope.formComplete = false;
                            $scope.validMobileno = false;
                            $scope.exist = false;
                            $scope.invalidPincode = false;


                        }
                    });
                }

            }






        })

        .controller('FormNutrionistCtrl', function($scope, TemplateService, NavigationService, $timeout) {
            //Used to name the .html file
            $scope.template = TemplateService.changecontent("form-nutrionist");
            $scope.menutitle = NavigationService.makeactive("Form Nutritonist");
            TemplateService.title = $scope.menutitle;
            $scope.navigation = NavigationService.getnav();
            $scope.countries = NavigationService.getcountries();
            $scope.formComplete = false;
            $scope.exist = false;
            $scope.invalidPincode = false;
            $scope.validMobileno = false;
            $scope.formData = {};
            $scope.formData.contributArray = [];
            $scope.noContrubution = false;
            $scope.submitNutrionistForm = function(formData) {
                $scope.noContrubution = false;
                _.each($scope.formData.contributArray, function(data, key) {
                    if (data === "other") {
                        $scope.formData.contributArray[key] = $scope.formData.myother;
                    }
                });
                console.log($scope.formData.contributArray);
                if ($scope.formData) {
                    console.log("  $scope.formData", $scope.formData);
                    $scope.formData.contribute = " ";
                    if ($scope.formData.contributArray.length > 0) {
                        _.each($scope.formData.contributArray, function(n) {
                            $scope.formData.contribute += n + ",";
                        });
                        $scope.formData.contribute = $scope.formData.contribute.substring(0, $scope.formData.contribute.length - 1);
                        NavigationService.saveNutrionistForm($scope.formData, function(data) {
                            console.log("iminnavigation", $scope.formData);
                            console.log("formData", data);
                            if (data.value === true) {
                                $scope.formComplete = true;
                                $scope.exist = false;
                                $scope.invalidPincode = false;
                                $scope.validMobileno = false;
                                $timeout(function() {
                                    $scope.formComplete = false;
                                    $scope.invalidPincode = false;
                                    $scope.exist = false;
                                    $scope.invalidPincode = false;
                                    $scope.validMobileno = false;
                                    $scope.formData = {};
                                    $scope.formData.contributArray = [];

                                }, 2000);
                            } else if (data.value === false && data.error.errors.email) {
                                console.log("imin else", data.error.errors);
                                $scope.exist = true;
                                $scope.validMobileno = false;
                                $scope.invalidPincode = false;
                            } else if (data.value === false && data.error.errors.zipcode) {
                                $scope.invalidPincode = true;
                                $scope.exist = false;
                                $scope.validMobileno = false;
                            } else if (data.value === false && data.error.errors.mobileNumber) {
                                $scope.validMobileno = true;
                                $scope.exist = false;
                                $scope.invalidPincode = false;

                            }


                        });



                    } else {
                        $scope.noContrubution = true;
                    }

                }
            };
            $scope.contributionType = function(val) {

                var foundIndex = _.findIndex($scope.formData.contributArray, function(key) {
                    return key == val;
                });
                if (foundIndex == -1) {
                    $scope.formData.contributArray.push(val);
                } else {
                    $scope.formData.contributArray.splice(foundIndex, 1);
                }

                console.log($scope.formData.contributArray);
            };

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
            $scope.events = [{
                date: tomorrow,
                status: 'full'
            }, {
                date: afterTomorrow,
                status: 'partially'
            }];

            function getDayClass(data) {
                var date = data.date,
                    mode = data.mode;
                if (mode === 'day') {
                    var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                    for (var i = 0; i < $scope.events.length; i++) {
                        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

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
            // $scope.medias=NavigationService.getMedias();



            $scope.formComplete = false;
            $scope.exist = false;
            $scope.invalidPincode = false;
            $scope.validMobileno = false;
            $scope.formData = {};
            $scope.formData.mediaArray = [];
            $scope.noMedia = false;
            $scope.submitArtistForm = function(formData) {
                $scope.noMedia = false;
                _.each($scope.formData.mediaArray, function(data, key) {
                    if (data === "other") {
                        $scope.formData.mediaArray[key] = $scope.formData.myother;
                    }
                });
                console.log($scope.formData.mediaArray);
                if ($scope.formData) {
                    console.log("  $scope.formData", $scope.formData);
                    $scope.formData.mediaFor = " ";
                    if ($scope.formData.mediaArray.length > 0) {
                        _.each($scope.formData.mediaArray, function(n) {
                            $scope.formData.mediaFor += n + ",";
                        });
                        $scope.formData.mediaFor = $scope.formData.mediaFor.substring(0, $scope.formData.mediaFor.length - 1);
                        NavigationService.saveArtistForm($scope.formData, function(data) {
                            console.log("iminnavigation", $scope.formData);
                            console.log("formData", data);
                            if (data.value === true) {
                                $scope.formComplete = true;
                                $scope.exist = false;
                                $scope.invalidPincode = false;
                                $scope.validMobileno = false;
                                $timeout(function() {
                                    $scope.formComplete = false;
                                    $scope.invalidPincode = false;
                                    $scope.exist = false;
                                    $scope.invalidPincode = false;
                                    $scope.validMobileno = false;
                                    $scope.formData = {};
                                    $scope.formData.mediaArray = [];

                                }, 2000);
                            } else if (data.value === false && data.error.errors.email) {
                                console.log("imin else", data.error.errors);
                                $scope.exist = true;
                                $scope.validMobileno = false;
                                $scope.invalidPincode = false;
                            } else if (data.value === false && data.error.errors.pincode) {
                                $scope.invalidPincode = true;
                                $scope.exist = false;
                                $scope.validMobileno = false;
                            } else if (data.value === false && data.error.errors.mobileNumber) {
                                $scope.validMobileno = true;
                                $scope.exist = false;
                                $scope.invalidPincode = false;

                            }


                        });



                    } else {
                        $scope.noMedia = true;
                    }

                }
            };


            $scope.mediafor = function(val) {

                var foundIndex = _.findIndex($scope.formData.mediaArray, function(key) {
                    return key == val;
                });
                if (foundIndex == -1) {
                    $scope.formData.mediaArray.push(val);
                } else {
                    $scope.formData.mediaArray.splice(foundIndex, 1);
                }

                console.log($scope.formData.mediaArray);
            };

            $scope.countries = NavigationService.getcountries();

            console.log("$scope.countries", $scope.countries);


        })

        .controller('headerctrl', function($scope, TemplateService, $uibModal) {
            $scope.template = TemplateService;
            $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                $(window).scrollTop(0);
            });
            $.fancybox.close(true);

            $scope.sign = function() {
                $uibModal.open({
                    animation: true,
                    templateUrl: "views/modal/signup.html",
                    scope: $scope
                });
            };
            $scope.sign = function() {
                    $uibModal.open({
                        animation: true,
                        templateUrl: "views/modal/signup.html",
                        scope: $scope
                    });
                };
                $scope.signup = function() {
                        $uibModal.open({
                            animation: true,
                            templateUrl: "views/modal/sign.html",
                            scope: $scope
                        });
                    };


                    $scope.showDiv = false;

                      $scope.openShowDiv = function(){
                        $scope.showDiv = true;
                      }
                      $scope.closeShowDiv = function(){
                        $scope.showDiv = false;
                      }


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
