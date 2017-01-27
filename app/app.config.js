(function () {
	'use strict';

	angular
		.module('jazzhands.consulting')
        .config(config);
        function config ($stateProvider, $urlRouterProvider){
            $stateProvider.state({
                name: 'landing',
                url: '/',
                component: 'landing'
            });
            $stateProvider.state({
                name: 'stages',
                url: '/stages',
                component: 'stages'
            });
            $stateProvider.state({
                name: 'proof',
                url: '/proof',
                component: 'proof'
            });
            $stateProvider.state({
                name: 'secret',
                url: '/secret',
                component: 'secretSauce'
            })


            $urlRouterProvider.otherwise('/');
        }

})();
