document.addEventListener('deviceready',function(){
    //Code au lamcement de l'App
    // TODO: Add functionality if needed.
		var listPorts = function() {
            // list the available BT ports:
            bluetoothSerial.list(
                function(results) {
                    app.display(JSON.stringify(results));
                },
                function(error) {
                    app.display(JSON.stringify(error));
                }
            );
        }

        // if isEnabled returns failure, this function is called:
			var notEnabled = function() {
				alert("Diese App braucht Bluetooth.");
							bluetoothSerial.enable(
		function() {
			console.log("Bluetooth is enabled");
		},
    function() {
        console.log("The user did *not* enable Bluetooth");
    }
);
        }

         // check if Bluetooth is on:
        bluetoothSerial.isEnabled(
            listPorts,
            notEnabled
        );
		hyper.log('onDeviceReady')
},false);


var app=angular.module('app',[]);

app.config(function($routeProvider){
	$routeProvider
	.when('/home',{templateUrl:'pages/home.html'})
	.when('/about',{templateUrl:'pages/about.html'})
	.when('/history',{templateUrl:'pages/history.html'})
	.otherwise({redirectTo:'/home'})
});
