angular.module('flapperNews', ['ui.router', 'templates'])

	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
		
			// home state
			$stateProvider.state('home', {
				url: '/home',
				templateUrl: 'home/_home.html',
				controller: 'MainCtrl',
				resolve: {
					postPromise: ['posts', function(posts) {
							return posts.getAll();
					}]
				}
			});
			
			// posts state
			$stateProvider.state('posts', {
				url: '/posts/{id}',
				templateUrl: 'posts/_posts.html',
				controller: 'PostsCtrl',
				resolve: {
					post: ['$stateParams', 'posts', function($stateParams, posts) {
						return posts.get($stateParams.id);
					}]
				}
			});

			$urlRouterProvider.otherwise('home');
		}
	])
;
