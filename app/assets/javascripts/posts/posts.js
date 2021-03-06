angular.module('flapperNews')

	.factory('posts', [
		'$http',
		function($http) {
			
			var o = {
				posts: []
			};
			
			o.getAll = function() {
				return $http.get('/posts.json').success(
					function(data) {
						angular.copy(data, o.posts);
					}
				);
			};

			o.create = function(post) {
				var res = $http.post('/posts.json', post);
				res.success(
					function(data) {
						o.posts.push(data);
					}
				);
				return res;
			};
			
			o.upvote = function(post) {
				return $http.put('/posts/' + post.id + '/upvote.json')
					.success(function(data) {
						post.upvotes += 1;
					});
			};
			
			return o;
		}
	])
;
