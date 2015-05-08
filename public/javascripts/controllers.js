(function(){

	var fuzzyApp = angular.module('fuzzyApp', []);
	fuzzyApp.controller('FuzzyController', function() {
		this.users = users;

		this.toggleAdmin = function(me) {
			users[me + 1].admin = false
		};

	});


  	fuzzyApp.controller('TabController', function(){
    	this.tab = 1;

    	this.setTab = function(newValue){
    	  this.tab = newValue;
    	};

    	this.isSet = function(tabName){
      		return this.tab === tabName;
    	};
  	});


	  var users = [
	    { hero : 'Batman', name: 'Bruce', psw: 295, surname : 'Wayne', admin : true },
	    { hero : 'Spiderman', name: 'Peter', psw: 595, surname : 'Parker', admin : true },
	    { hero : 'Superman', name: 'Clark', psw: 395, surname : 'Kent', admin : true}
	  ];
})();