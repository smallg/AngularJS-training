/**
 * Created by wpguo on 10/23/2014.
 */
'use strict';
angular
    .module('training', ['ngRoute','ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/list.html',
                controller: ListCtrl
            })
            .when('/model-page', {
                templateUrl: 'views/model.html',
                controller: ModelCtrl
            })
            .otherwise({
                redirectTo: '/'
            });
    });

angular.element(document).ready(function() {
    angular.bootstrap(document, ['training']);
});