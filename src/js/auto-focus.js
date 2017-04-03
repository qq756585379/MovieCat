

(function(angular) {
	'use strict';
	angular.module('moviecat.directives.auto_focus', [])
		.directive('autoFocus', ['$location', function($location) {
			// var path = $location.path(); //     /coming_soon/1
			//第一次进来path是null，然后重定向后path就有值了
			return {
				restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
				link: function($scope, iElm, iAttrs, controller) {
					//iElm是指令用在哪个元素上,这里是li标签
					$scope.$location = $location;
					$scope.$watch('$location.path()', function(now) {
						console.log($location.path());
						// 当path发生变化时执行，now是变化后的值
						var aLink = iElm.children().attr('href');//获取a标签的href属性
						//      /#\/coming_soon\/\d+/    正则表达式开头结尾是/，中间的/需要\转义,数字一个或者多个\d+
						var type = aLink.replace(/#(\/.+?)\/\d+/, '$1'); // /coming_soon   '$1'提取第一组成员
						if (now.startsWith(type)) {
							// 访问的是当前链接
							iElm.parent().children().removeClass('active');
							iElm.addClass('active');
						}
					});

					// iElm.on('click', function() {
					// 	console.log(111);
					  // iElm.parent().children().removeClass('active');
					  // iElm.addClass('active');
					// });

				}
			};
		}]);
})(angular);
