
(function(angular) {
  'use strict';

  // 由于默认angular提供的异步请求对象不支持自定义回调函数名
  // angular随机分配的回调函数名称不被豆瓣支持

  var http = angular.module('moviecat.services.http', []);

  http.service('HttpService', ['$window', '$document', function($window, $document) {
    this.jsonp = function(url, data, callback) {
      var querystring = url.indexOf('?') == -1 ? '?' : '&';
		//console.log('111'+url);
      for (var key in data) {
        querystring += key + '=' + data[key] + '&';
      }
		//console.log('111'+querystring);
      var fnSuffix = Math.random().toString().replace('.', '');
      var cbFuncName = 'my_json_cb_' + fnSuffix;
      querystring += 'callback=' + cbFuncName;

      var scriptElement = $document[0].createElement('script');
		console.log(url + querystring);
      scriptElement.src = url + querystring;
      // 不推荐
      $window[cbFuncName] = function(data) {
        callback(data);
        $document[0].body.removeChild(scriptElement);
      };
      $document[0].body.appendChild(scriptElement);
    };
  }]);
})(angular);
