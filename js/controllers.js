angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper', 'imageupload'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
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
    // $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.slides = [{
        id: 0,
        image: 'img/new/form-food.jpg',
        head: "HEALTHY FOOD FACTS",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 1,
        image: 'img/new/form-food.jpg',
        head: "HEALTHY FOOD FACTS",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 2,
        image: 'img/new/form-food.jpg',
        head: "HEALTHY FOOD FACTS",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }];

    $scope.slidings = [{
        id: 0,
        image: 'img/new/yoga-classes.jpg',
        head: "YOGA COLLABORATES",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 1,
        image: 'img/new/yoga-classes.jpg',
        head: "YOGA COLLABORATES",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 2,
        image: 'img/new/yoga-classes.jpg',
        head: "YOGA COLLABORATES",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    }];


    $scope.sliding = [{
        id: 0,
        image: 'img/new/form-food.jpg',
        head: "FOOD COLLABORATERS",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 1,
        image: 'img/new/form-food.jpg',
        head: "FOOD COLLABORATERS",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 2,
        image: 'img/new/form-food.jpg',
        head: "FOOD COLLABORATERS",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }];


    $scope.slidrs = [{
        id: 0,
        image: 'img/new/yoga-stlying.jpg',
        head: "YOGA CLASS",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 1,
        image: 'img/new/yoga-stlying.jpg',
        head: "YOGA CLASS",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 2,
        image: 'img/new/yoga-stlying.jpg',
        head: "YOGA CLASS",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }];


    $scope.sliders = [{
        id: 0,
        image: 'img/new/yoga-classes.jpg',
        head: " BLOG",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 1,
        image: 'img/new/yoga-classes.jpg',
        head: " BLOG",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 2,
        image: 'img/new/yoga-classes.jpg',
        head: " BLOG",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }];

    $scope.slidr = [{
        id: 0,
        image: 'img/new/yoga-classes.jpg',
        head: "PRODUCT COLLABORATERS ",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 1,
        image: 'img/new/yoga-classes.jpg',
        head: "PRODUCT COLLABORATERS ",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }, {
        id: 2,
        image: 'img/new/yoga-classes.jpg',
        head: "PRODUCT COLLABORATERS ",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."

    }];



    // http://stackoverflow.com/questions/962802#962890
    function shuffle(array) {
        var tmp, current, top = array.length;

        if (top) {
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        }

        return array;
    }

    $scope.teacher = [{

            descp: "Sed ut perspiciatis unde omnis iste natexplicab."
        }, {

            descp: "Sed ut perspiciatis unde omnis iste natexplicab."
        }, {

            descp: "Sed ut perspiciatis unde omnis iste natexplicab."
        }

    ];


    $scope.foodSlider = [{
        img: "img/new/r6.jpg",
        head: "Food",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    }, {
        img: "img/new/r6.jpg",
        head: "Food",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    }, {
        img: "img/new/r6.jpg",
        head: "Food",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit voluptat."
    }];

    $scope.yogaclasses = [{
        img: "img/new/yoga-classes.jpg",
        head: "yoga classes",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    }, {
        img: "img/new/yoga-classes.jpg",
        head: "yoga classes",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    }, {
        img: "img/new/yoga-classes.jpg",
        head: "yoga classes",
        descp: "Sed ut perspiciatis unde omnis iste natus error sit."
    }];
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

    setTimeout(function () {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        ! function (d, s, id) {
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

.controller('PrivacyCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
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

.controller('CollaborateWithUsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("collaborate-with-us");
    $scope.menutitle = NavigationService.makeactive("Collaborate With Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.goTo = function (data) {
        console.log("data",data);
        $state.go(data);
    };
})

.controller('FormEnthuCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("form-enthu");
    $scope.menutitle = NavigationService.makeactive("Form enthusiast");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.goTo = function (data) {
        $state.go(data);
    };
})

.controller('FormFoodieCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("form-foodie");
    $scope.menutitle = NavigationService.makeactive("Form Foodie");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.goTo = function (data) {
        $state.go(data);
    };
})

.controller('FormCharityCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("form-charity");
    $scope.menutitle = NavigationService.makeactive("Form Charity");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.goTo = function (data) {
        $state.go(data);
    };
})

.controller('FormProductManufacturerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("form-product-manufacturer");
    $scope.menutitle = NavigationService.makeactive("Form Product Manufacturer");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.goTo = function (data) {
        $state.go(data);
    };
})


.controller('FormChefCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("form-chef");
    $scope.menutitle = NavigationService.makeactive("Form Chef");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.goTo = function (data) {
        $state.go(data);
    };

     $scope.popup2 = false;
        $scope.showpopup = function (value) {
            // $scope.popup = value == "y";
            $scope.popup2 = value == "y";
        }
})

.controller('FormTeacherCtrl', function ($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("form-teacher");
    $scope.menutitle = NavigationService.makeactive("Form teacher");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.goTo = function (data) {
        $state.go(data);
    };
})
.controller('FormYogaStudioCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("form-yoga-studio");
        $scope.menutitle = NavigationService.makeactive("Yoga Studio Collaboration Form");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.countries = NavigationService.getcountries();
        $scope.formData = {};
        $scope.formData.amenities = [];
        $scope.formData.styleOfYoga = [];

        $scope.formData.amenitiesArray = [];
        $scope.formData.yogaStyleOfferArray = [];
        $scope.formComplete = false;
        $scope.exist = false;
        $scope.invalidPincode = false;
        $scope.validMobileno = false;
        $scope.organizationName = false;
        $scope.noamenities = false;
        $scope.noYogastyle = false;
        $scope.teachingLevel = false;
        $scope.listBranches = false;
        $scope.officialWebsiteAddress = false;

        $scope.submitYogaStudioForm = function (formData) {

            // console.log($scope.formData.amenitiesArray);
            _.each($scope.formData.amenitiesArray, function (data, key) {
                if (data === "other") {
                    $scope.formData.amenitiesArray[key] = $scope.formData.myother;
                }
            });
            _.each($scope.formData.yogaStyleOfferArray, function (data, key) {
                if (data === "other") {
                    $scope.formData.yogaStyleOfferArray[key] = $scope.formData.myotherYogaStyle;
                }
            });
            if ($scope.formData.teachingLevel === "other") {
                $scope.formData.teachingLevel = $scope.formData.otherCat;
            }
            if ($scope.formData) {



                if ($scope.formData.amenitiesArray.length > 0) {
                    $scope.noamenities = false;


                    _.each($scope.formData.amenitiesArray, function (n) {
                        $scope.formData.amenities += n + ",";
                    });

                    // console.log("data", $scope.formData);


                } else {
                    $scope.noamenities = true;
                }
                if ($scope.formData.yogaStyleOfferArray.length > 0) {
                    $scope.noYogastyle = false;

                    _.each($scope.formData.yogaStyleOfferArray, function (n) {
                        $scope.formData.styleOfYoga += n + ",";
                    });

                    console.log("data", $scope.formData);
                    console.log($scope.formData.yogaStyleOfferArray);

                } else {
                    $scope.noYogastyle = true;
                }
                NavigationService.saveYogaStudio($scope.formData, function (data) {
                    console.log("iminnavigation", $scope.formData);
                    console.log("formData", data);
                    if (data.value === true) {
                        $scope.formComplete = true;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.validMobileno = false;
                        $scope.organizationName = false;
                        $scope.noamenities = false;
                        $scope.noYogastyle = false;
                        $scope.listBranches = false;
                        $timeout(function () {
                            $scope.formComplete = false;
                            $scope.formData = {};
                            $scope.formData.amenitiesArray = [];
                            $scope.formData.yogaStyleOfferArray = [];
                            $scope.invalidPincode = false;
                            $scope.exist = false;
                            $scope.invalidPincode = false;
                            $scope.validMobileno = false;
                            $scope.organizationName = false;
                            $scope.noamenities = false;
                            $scope.noYogastyle = false;
                            $scope.teachingLevel = false;
                            $scope.listBranches = false;
                            $scope.officialWebsiteAddress = false;

                        }, 2000);
                    } else if (data.value === false && data.error.errors.email) {
                        console.log("imin else", data.error.errors);
                        $scope.exist = true;
                        $scope.validMobileno = false;
                        $scope.invalidPincode = false;
                        $scope.organizationName = false;
                    } else if (data.value === false && data.error.errors.pincode) {
                        $scope.invalidPincode = true;
                        $scope.exist = false;
                        $scope.validMobileno = false;
                        $scope.organizationName = false;
                        $scope.listBranches = false;
                    } else if (data.value === false && data.error.errors.mobileNumber) {
                        $scope.validMobileno = true;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.organizationName = false;
                        $scope.listBranches = false;

                    } else if (data.value === false && data.error.errors.organizationName) {
                        $scope.validMobileno = false;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.organizationName = true;
                        $scope.listBranches = false;
                    } else if (data.value === false && data.error.errors.teachingLevel) {
                        $scope.validMobileno = false;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.organizationName = false;
                        $scope.teachingLevel = true;
                        $scope.listBranches = false;
                    } else if (data.value === false && data.error.errors.listBranches) {
                        $scope.validMobileno = false;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.organizationName = false;
                        $scope.teachingLevel = false;
                        $scope.listBranches = true;

                    } else if (data.value === false && data.error.errors.officialWebsiteAddress) {
                        $scope.validMobileno = false;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.organizationName = false;
                        $scope.teachingLevel = false;
                        $scope.listBranches = false;
                        $scope.officialWebsiteAddress = true;

                    }

                });


            }
        }


        $scope.goToamenities = function (val) {
            var foundIndex = _.findIndex($scope.formData.amenitiesArray, function (key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.amenitiesArray.push(val);
            } else {
                $scope.formData.amenitiesArray.splice(foundIndex, 1);
            }

            console.log($scope.formData.amenitiesArray);
        };

        $scope.goToyogaOffer = function (val) {
            var foundIndex = _.findIndex($scope.formData.yogaStyleOfferArray, function (key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.yogaStyleOfferArray.push(val);
            } else {
                $scope.formData.yogaStyleOfferArray.splice(foundIndex, 1);
            }

            console.log($scope.formData.yogaStyleOfferArray);
        };


    })
    .controller('FormYogaLabelCollaborationCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("form-yoga-label");
        $scope.menutitle = NavigationService.makeactive("Yoga Label Collaboration Form");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.countries = NavigationService.getcountries();

        $scope.formData = {};
        $scope.formData.booksMoviesGames = [];
        $scope.formData.clothingShoesJewelry = [];
        $scope.formData.beautyHealthGroceries = [];
        $scope.formData.yogaProducts = [];
        $scope.formData.productsFrom = [];

        $scope.formData.booksMoviesGamesArray = [];
        $scope.formData.clothingShoesJewelryArray = [];
        $scope.formData.beautyHealthGroceriesArray = [];
        $scope.formData.yogaProductsArray = [];
        $scope.formData.productsFromArray = [];
        $scope.formComplete = false;
        $scope.exist = false;
        $scope.invalidPincode = false;
        $scope.validMobileno = false;
        $scope.validlandlineNo = false;
        $scope.submitYogaLabelForm = function (formData) {
            console.log("frm submit", formData);
            if ($scope.formData) {

                if ($scope.formData.primaryCategory === "other") {
                    $scope.formData.primaryCategory = $scope.formData.otherCat;
                }
                // $scope.formData.booksMoviesGames = " ";
                if ($scope.formData.booksMoviesGamesArray.length > 0) {
                    _.each($scope.formData.booksMoviesGamesArray, function (n) {
                        $scope.formData.booksMoviesGames += n + ",";
                    });

                    console.log("data", $scope.formData);


                };
                // $scope.formData.clothingShoesJewelry = "";
                if ($scope.formData.clothingShoesJewelryArray.length > 0) {
                    _.each($scope.formData.clothingShoesJewelryArray, function (n) {
                        $scope.formData.clothingShoesJewelry += n + ",";
                    });

                    console.log("data", $scope.formData);


                };
                // $scope.formData.beautyHealthGroceries = "";
                if ($scope.formData.beautyHealthGroceriesArray.length > 0) {
                    _.each($scope.formData.beautyHealthGroceriesArray, function (n) {
                        $scope.formData.beautyHealthGroceries += n + ",";
                    });

                    console.log("data", $scope.formData);


                };
                // $scope.formData.yogaProducts = "";
                if ($scope.formData.yogaProductsArray.length > 0) {
                    _.each($scope.formData.yogaProductsArray, function (n) {
                        $scope.formData.yogaProducts += n + ",";
                    });

                    console.log("data", $scope.formData);


                };
                // $scope.formData.productsFrom = "";
                if ($scope.formData.productsFromArray.length > 0) {
                    _.each($scope.formData.productsFromArray, function (n) {
                        $scope.formData.productsFrom += n + ",";
                    });

                    console.log("data", $scope.formData);


                };
                NavigationService.saveYogaLabelForm($scope.formData, function (data) {
                    console.log("saveYogaLabelForm", data);
                    if (data.value === true) {
                        $scope.formComplete = true;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.validMobileno = false;
                        $timeout(function () {
                            $scope.formComplete = false;
                            $scope.invalidPincode = false;
                            $scope.exist = false;
                            $scope.invalidPincode = false;
                            $scope.validMobileno = false;
                            $scope.formData = {};
                            $scope.formData.booksMoviesGamesArray = [];
                            $scope.formData.clothingShoesJewelryArray = [];
                            $scope.formData.beautyHealthGroceriesArray = [];
                            $scope.formData.yogaProductsArray = [];
                            $scope.formData.productsFromArray = [];

                        }, 2000);
                    } else if (data.value === false && data.error.errors.mobileNumber) {
                        console.log("im in elseif", data);
                        $scope.validMobileno = true;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.validlandlineNo = false;

                    } else if (data.value === false && data.error.errors.landlineNumber) {
                        console.log("im in elseif", data);
                        $scope.validMobileno = false;
                        $scope.validlandlineNo = true;
                        $scope.exist = false;
                        $scope.invalidPincode = false;

                    } else if (data.value === false && data.error.errors.pincode) {
                        console.log("im in elseif", data);
                        $scope.validMobileno = false;
                        $scope.validlandlineNo = false;
                        $scope.exist = false;
                        $scope.invalidPincode = true;

                    }
                });

            }
        }

        $scope.booksGame = function (val) {

            var foundIndex = _.findIndex($scope.formData.booksMoviesGamesArray, function (key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.booksMoviesGamesArray.push(val);
            } else {
                $scope.formData.booksMoviesGamesArray.splice(foundIndex, 1);
            }

            console.log($scope.formData.booksMoviesGamesArray);
        };
        $scope.clothingShoesJewelryFun = function (val) {

            var foundIndex = _.findIndex($scope.formData.clothingShoesJewelryArray, function (key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.clothingShoesJewelryArray.push(val);
            } else {
                $scope.formData.clothingShoesJewelryArray.splice(foundIndex, 1);
            }

            console.log($scope.formData.clothingShoesJewelryArray);
        };
        $scope.beautyHealthGroceriesFun = function (val) {
            console.log("inn", val);
            var foundIndex = _.findIndex($scope.formData.beautyHealthGroceriesArray, function (key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.beautyHealthGroceriesArray.push(val);
            } else {
                $scope.formData.beautyHealthGroceriesArray.splice(foundIndex, 1);
            }

            console.log($scope.formData.beautyHealthGroceriesArray);
        };
        $scope.yogaProductsFun = function (val) {

            var foundIndex = _.findIndex($scope.formData.yogaProductsArray, function (key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.yogaProductsArray.push(val);
            } else {
                $scope.formData.yogaProductsArray.splice(foundIndex, 1);
            }

            console.log($scope.formData.yogaProductsArray);
        };
        $scope.productsFromFun = function (val) {

            var foundIndex = _.findIndex($scope.formData.productsFromArray, function (key) {
                return key == val;
            });
            if (foundIndex == -1) {
                $scope.formData.productsFromArray.push(val);
            } else {
                $scope.formData.productsFromArray.splice(foundIndex, 1);
            }

            console.log($scope.formData.productsFromArray);
        };
    })


.controller('FormRestaurantCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
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

    $scope.submitRestaurantForm = function (formData) {
        console.log("formData", formData);
        if (formData) {
            NavigationService.saveRestaurantForm($scope.formData, function (data) {
                console.log(data, "data");
                if (data.value === true) {
                    $scope.formComplete = true;
                    $scope.exist = false;
                    $scope.invalidPincode = false;
                    $scope.invalidPincode = false;
                    $scope.conatctNumber = false;
                    $scope.resPhone = false;
                    $timeout(function () {
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

.controller('FormNutrionistCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
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
    $scope.formData.contribute = [];
    $scope.noContrubution = false;
    $scope.submitNutrionistForm = function (formData) {
        console.log(formData, '*******');
        $scope.noContrubution = false;
        _.each($scope.formData.contributArray, function (data, key) {
            if (data === "other") {
                $scope.formData.contributArray[key] = $scope.formData.myother;
            }
        });
        console.log($scope.formData.contributArray);
        if ($scope.formData) {
            console.log("  $scope.formData", $scope.formData);
            // $scope.formData.contribute = " ";
            if ($scope.formData.contributArray.length > 0) {
                _.each($scope.formData.contributArray, function (n) {
                    $scope.formData.contribute += n + ",";
                });

                NavigationService.saveNutrionistForm($scope.formData, function (data) {
                    console.log("iminnavigation", $scope.formData);
                    console.log("formData", data);
                    if (data.value === true) {
                        $scope.formComplete = true;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.validMobileno = false;
                        $timeout(function () {
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
    $scope.contributionType = function (val) {

        var foundIndex = _.findIndex($scope.formData.contributArray, function (key) {
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

.controller('FormPersonalCampaignCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("form-personal-campaign");
    $scope.menutitle = NavigationService.makeactive("Form Personal Campaign");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.countries = NavigationService.getcountries();

    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
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

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function () {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };

    $scope.setDate = function (year, month, day) {
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
    $scope.formData = {};
    $scope.formComplete = false;
    $scope.exist = false;
    $scope.invalidPincode = false;
    $scope.validMobileno = false;
    $scope.submitCampaign = function (formData) {

        console.log("submitCampaign", formData);
        if ($scope.formData) {
            NavigationService.savePersonalCompaign($scope.formData, function (data) {
                console.log("savePersonalCompaign", data);
                if (data.value === true) {
                    $scope.formComplete = true;
                    $scope.exist = false;
                    $scope.invalidPincode = false;
                    $scope.validMobileno = false;
                    $timeout(function () {
                        $scope.formComplete = false;
                        $scope.invalidPincode = false;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.validMobileno = false;
                        $scope.formData = {};
                        // $scope.formData.mediaArray = [];

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


            })
        }
    }

})


.controller('FormArtistCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("form-artist");
    $scope.menutitle = NavigationService.makeactive("Form Artist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // $scope.medias=NavigationService.getMedias();

    // $scope.popup = false;
        $scope.popup2 = false;
        $scope.showpopup = function (value) {
            // $scope.popup = value == "y";
            $scope.popup2 = value == "y";
        }


    $scope.formComplete = false;
    $scope.exist = false;
    $scope.invalidPincode = false;
    $scope.validMobileno = false;
    $scope.formData = {};
    $scope.formData.mediaArray = [];
    $scope.formData.mediaFor = [];
    $scope.noMedia = false;
    $scope.submitArtistForm = function (formData) {
        $scope.noMedia = false;
        _.each($scope.formData.mediaArray, function (data, key) {
            if (data === "other") {
                $scope.formData.mediaArray[key] = $scope.formData.myother;
            }
        });
        console.log($scope.formData.mediaArray);
        if ($scope.formData) {
            console.log("  $scope.formData", $scope.formData);
            // $scope.formData.mediaFor = " ";
            if ($scope.formData.mediaArray.length > 0) {
                _.each($scope.formData.mediaArray, function (n) {
                    $scope.formData.mediaFor += n + ",";
                });

                NavigationService.saveArtistForm($scope.formData, function (data) {
                    console.log("iminnavigation", $scope.formData);
                    console.log("formData", data);
                    if (data.value === true) {
                        $scope.formComplete = true;
                        $scope.exist = false;
                        $scope.invalidPincode = false;
                        $scope.validMobileno = false;
                        $timeout(function () {
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


    $scope.mediafor = function (val) {

        var foundIndex = _.findIndex($scope.formData.mediaArray, function (key) {
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


    // })




})


.controller('RestaurantCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("restaurant");
    $scope.menutitle = NavigationService.makeactive("Restaurant");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.accordian = [];
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });



    $scope.loveSlider = [{
        img: "img/restaurant/b1.jpg"

    }, {
        img: "img/restaurant/b1.jpg"

    }, {
        img: "img/restaurant/b1.jpg"

    }];
    $scope.rowdata = [{
        img: "img/restaurant/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"

    }, {
        img: "img/restaurant/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"
    }, {
        img: "img/restaurant/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"


    }, {
        img: "img/restaurant/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"


    }, {
        img: "img/restaurant/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"


    }, {
        img: "img/restaurant/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"

    }];
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };
})


.controller('ArticleDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("article-detail");
        $scope.menutitle = NavigationService.makeactive("Article-Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.loveSlider = [{
            img: "img/article/b1.jpg"

        }, {
            img: "img/article/b1.jpg"

        }, {
            img: "img/article/b1.jpg"

        }];
        $scope.rowdata = [{
            img: "img/article/a2.jpg",
            title: "Conscious Eating - Your Body Knows Best",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

        }, {
            img: "img/article/a2.jpg",
            title: "Conscious Eating - Your Body Knows Best",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

        }, {
            img: "img/article/a2.jpg",
            title: "Conscious Eating - Your Body Knows Best",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


        }, {
            img: "img/article/a2.jpg",
            title: "Conscious Eating - Your Body Knows Best",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


        }];
        $scope.rate = 7;
        $scope.max = 10;
        $scope.isReadonly = false;

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };
    })
    .controller('RecipesDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("recipes-detail");
        $scope.menutitle = NavigationService.makeactive("Recipes-Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.loveSlider = [{
            img: "img/article/b1.jpg"

        }, {
            img: "img/article/b1.jpg"

        }, {
            img: "img/article/b1.jpg"

        }];
        $scope.rowdata = [{
            img: "img/article/a2.jpg",
            title: "Conscious Eating - Your Body Knows Best",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

        }, {
            img: "img/article/a2.jpg",
            title: "Conscious Eating - Your Body Knows Best",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

        }, {
            img: "img/article/a2.jpg",
            title: "Conscious Eating - Your Body Knows Best",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


        }, {
            img: "img/article/a2.jpg",
            title: "Conscious Eating - Your Body Knows Best",
            data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


        }];
        $scope.rate = 7;
        $scope.max = 10;
        $scope.isReadonly = false;

        $scope.hoveringOver = function (value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };
    })

.controller('StyleListCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("style-listing");
    $scope.menutitle = NavigationService.makeactive("Style Listing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.loveSlider = [{
        img: "img/b1.jpg"

    }, {
        img: "img/b1.jpg"

    }, {
        img: "img/b1.jpg"

    }];
    $scope.rowdata = [{
        img: "img/a2.jpg",
        title: "Conscious Eating - Your Body Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    }, {
        img: "img/a2.jpg",
        title: "Conscious Eating - Your Body Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    }, {
        img: "img/a2.jpg",
        title: "Conscious Eating - Your Body Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    }, {
        img: "img/a2.jpg",
        title: "Conscious Eating - Your Body Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    }];
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };
})


.controller('StyleDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("style-detail");
    $scope.menutitle = NavigationService.makeactive("Style Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    // $scope.accordian = [];
    // $scope.accordian.push({
    //   isFirstOpen: true,
    //   isFirstDisabled: false
    // });

    $scope.loveSlider = [{
        img: "img/b1.jpg"

    }, {
        img: "img/b1.jpg"

    }, {
        img: "img/b1.jpg"

    }];
    $scope.rowdata = [{
        img: "img/mom.jpg",
        title: "Lorem ipsum dolor sit amet",
        location: "Colaba, Mumbai",
        style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
        timing: "9am - 6pm"
    }, {
        img: "img/mom.jpg",
        title: "Lorem ipsum dolor sit amet",
        location: "Colaba, Mumbai",
        style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
        timing: "9am - 6pm"
    }, {
        img: "img/mom.jpg",
        title: "Lorem ipsum dolor sit amet",
        location: "Colaba, Mumbai",
        style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
        timing: "9am - 6pm"
    }];
    $scope.rate = 3;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };
})




.controller('ArticleCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("article");
    $scope.menutitle = NavigationService.makeactive("Article");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.loveSlider = [{
        img: "img/article/b1.jpg"

    }, {
        img: "img/article/b1.jpg"

    }, {
        img: "img/article/b1.jpg"

    }];
    $scope.rowdata = [{
        img: "img/article/a2.jpg",
        title: "Conscious Eating - Your Body Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    }, {
        img: "img/article/a2.jpg",
        title: "Conscious Eating - Your Body Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    }, {
        img: "img/article/a2.jpg",
        title: "Conscious Eating - Your Body Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    }, {
        img: "img/article/a2.jpg",
        title: "Conscious Eating - Your Body Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    }];
    $scope.rate = 3;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };

    $scope.tab = 'article';
    $scope.classa = 'active';
    $scope.classb = '';

    $scope.tabchange = function (tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        if (a == 1) {

            $scope.classa = "active";
            $scope.classb = '';
        } else {

            $scope.classa = '';
            $scope.classb = "active";
        }
    };
})


.controller('TeacherCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("teacher-listing");
    $scope.menutitle = NavigationService.makeactive("Teacher Listing");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.rowdata = [{
        img: "img/a2.jpg",
        title: "Conscious Eating - YourBody Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    }, {
        img: "img/a2.jpg",
        title: "Conscious Eating - YourBody Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "

    }, {
        img: "img/a2.jpg",
        title: "Conscious Eating - YourBody Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    }, {
        img: "img/a2.jpg",
        title: "Conscious Eating - YourBody Knows Best",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididuntut labore et dolore magna aliqua. "


    }];

    $scope.tab = 'article';
    $scope.classa = 'active';
    $scope.classb = '';

    $scope.tabchange = function (tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        if (a == 1) {

            $scope.classa = "active";
            $scope.classb = '';
        } else {

            $scope.classa = '';
            $scope.classb = "active";
        }
    };
})

.controller('TeachProfileCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("teacher-profile");
    $scope.menutitle = NavigationService.makeactive("Teacher Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.rowdata = [{
        img: "img/teacher/mom.jpg",
        title: "Lorem ipsum dolor sit amet",
        location: "Colaba, Mumbai",
        style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
        timing: "9am - 6pm"
    }, {
        img: "img/teacher/mom.jpg",
        title: "Lorem ipsum dolor sit amet",
        location: "Colaba, Mumbai",
        style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
        timing: "9am - 6pm"
    }, {
        img: "img/teacher/mom.jpg",
        title: "Lorem ipsum dolor sit amet",
        location: "Colaba, Mumbai",
        style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
        timing: "9am - 6pm"
    }];
    $scope.rate = 2;
    $scope.max = 5;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    }
    $scope.tab = 'article';
    $scope.classa = 'active';
    $scope.classb = '';

    $scope.tabchange = function (tab, a) {
        //        console.log(tab);
        $scope.tab = tab;
        if (a == 1) {

            $scope.classa = "active";
            $scope.classb = '';
        } else {

            $scope.classa = '';
            $scope.classb = "active";
        }
    };
})



.controller('StudioDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("studio-detail");
    $scope.menutitle = NavigationService.makeactive("Studio Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.loveSlider = [{
        img: "img/r2.jpg"

    }, {
        img: "img/r3.jpg"

    }, {
        img: "img/r4.jpg"

    }];
    $scope.rowdata = [{
        img: "img/teacher/mom.jpg",
        title: "Lorem ipsum dolor sit amet",
        location: "Colaba, Mumbai",
        style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
        timing: "9am - 6pm"
    }, {
        img: "img/teacher/mom.jpg",
        title: "Lorem ipsum dolor sit amet",
        location: "Colaba, Mumbai",
        style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
        timing: "9am - 6pm"
    }, {
        img: "img/teacher/mom.jpg",
        title: "Lorem ipsum dolor sit amet",
        location: "Colaba, Mumbai",
        style: "Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow",
        timing: "9am - 6pm"
    }];
    $scope.rowdata2 = [{
        img: "img/teacher/re1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        location: "Colaba, Mumbai",
        cuisine: "Italian, Continental",
        costForTwo: " ₹ 500 -  ₹ 1000",
        timing: "9am - 6pm"
    }, {
        img: "img/teacher/re1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        location: "Colaba, Mumbai",
        cuisine: "Italian, Continental",
        costForTwo: " ₹ 500 -  ₹ 1000",
        timing: "9am - 6pm"
    }, {
        img: "img/teacher/re1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        location: "Colaba, Mumbai",
        cuisine: "Italian, Continental",
        costForTwo: " ₹ 500 -  ₹ 1000",
        timing: "9am - 6pm"
    }];

    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    }
})

.controller('StudioListCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("studio-list");
    $scope.menutitle = NavigationService.makeactive("Studio List");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.check = {};
    $scope.check.map = true;
    $scope.loveSlider = [{
        img: "img/r2.jpg"

    }, {
        img: "img/r3.jpg"

    }, {
        img: "img/r4.jpg"

    }];
    $scope.rowdata = [{
            img: "img/mom.jpg",
            title: "Lorem ipsum dolor sit amet",
            data: "Colaba, Mumbai |Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow| 9am - 6pm"

        }, {
            img: "img/mom.jpg",
            title: "Lorem ipsum dolor sit amet",
            data: "Colaba, Mumbai | Hatha Yoga | 9am - 6pm"


        },

        {
            img: "img/mom.jpg",
            title: "Lorem ipsum dolor sit amet",
            data: "Colaba, Mumbai | Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow | 9am - 6pm"


        },

    ];
    $scope.rowdata1 = [{
            img: "img/mom.jpg",
            title: " ipsum dolor sit amet",
            data: "Colaba, Mumbai |Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow| 9am - 6pm"

        }, {
            img: "img/mom.jpg",
            title: " ipsum dolor sit amet",
            data: "Colaba, Mumbai | Hatha Yoga | 9am - 6pm"


        },

        {
            img: "img/mom.jpg",
            title: " ipsum dolor sit amet",
            data: "Colaba, Mumbai | Ashtanga Vinyasa,Hatha Yoga,Vinyasa Flow | 9am - 6pm"


        },

    ];

    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    }
})


.controller('RestaurantDetailCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("restaurant-detail");
    $scope.menutitle = NavigationService.makeactive("Restaurant-Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.loveSlider = [{
        img: "img/r1.jpg"

    }, {
        img: "img/r2.jpg"

    }, {
        img: "img/r1.jpg"

    }, {
        img: "img/r2.jpg"

    }];
    $scope.accordian = [];
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });
    $scope.accordian.push({
        isFirstOpen: true,
        isFirstDisabled: false
    });
    $scope.rowdata = [{
        img: "img/teacher/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"

    }, {
        img: "img/teacher/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"
    }, {
        img: "img/teacher/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"


    }, {
        img: "img/teacher/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"


    }, {
        img: "img/teacher/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"


    }, {
        img: "img/teacher/m1.jpg",
        title: "Lorem Ipsum Dolor Sit Amet Consectetuer",
        data: "Colaba, Mumbai | Italian, Continental Cost for 2:  ₹ 500 -  ₹ 1000 | 9am - 6pm"

    }];

    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    }
})



.controller('headerctrl', function ($scope, TemplateService, $uibModal) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
    $.fancybox.close(true);

    // $scope.sign = function() {
    //     $uibModal.open({
    //         animation: true,
    //         templateUrl: "views/modal/signup.html",
    //         scope: $scope
    //     });
    // };
    $scope.sign = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/signup.html",
            scope: $scope,
            windowClass: "size"
        });
    };
    $scope.signup = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/sign.html",
            scope: $scope,
            windowClass: "size"
        });
    };
    $scope.showDiv = false;

    $scope.openShowDiv = function () {
        $scope.showDiv = true;
    }
    $scope.closeShowDiv = function () {
        $scope.showDiv = false;
    }
})




.controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function () {
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