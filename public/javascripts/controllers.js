(function(){

	var fuzzyApp = angular.module('fuzzyApp', []);
	fuzzyApp.controller('FuzzyController', function() {
		this.users = users;
	});

	  var users = [
	    { name: 'Bruce', psw: 295, surname : 'Wayne', admin : true },
	    { name: 'Peter', psw: 595, surname : 'Parker', admin : true },
	    { name: 'Clark', psw: 395, surname : 'Kent', admin : true}
	  ];
})();