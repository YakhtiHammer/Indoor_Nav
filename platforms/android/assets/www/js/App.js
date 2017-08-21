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


var app=angular.module('app',['siyfion.sfTypeahead']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home',{templateUrl:'pages/home.html'})
	.when('/about',{templateUrl:'pages/about.html'})
	.when('/history',{templateUrl:'pages/history.html'})
	.otherwise({redirectTo:'/home'})
});


app.controller('Navigation', function($scope) {
  
  $scope.selectedRoom = "";
  
  // instantiate the bloodhound suggestion engine
  var rooms = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.room); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [
      { room: 'Muller' },
      { room: 'Koch' },
      { room: 'Pawlowksi' },
      { room: 'Jansen' },
      { room: '2-01' },
      { room: '2-34' },
      { room: 'Lofissids' },
      { room: 'Ayoub' },
      { room: 'Abdelah' },
      { room: 'Labo Muller' }
    ]
  });
   
  // initialize the bloodhound suggestion engine
  rooms.initialize();

  $scope.roomsDataset = {
    displayKey: 'room',
    source:rooms.ttAdapter(),
    templates: {
      empty: [
        '<div class="tt-suggestion tt-empty-message">',
        'No results were found ...',
        '</div>'
      ].join('\n'),
    }
  };
  
  
  
  // Typeahead options object
  $scope.exampleOptions = {
    displayKey: 'title'
  };
  
});
