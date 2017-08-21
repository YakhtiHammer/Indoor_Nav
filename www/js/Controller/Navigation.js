
function Navigation($scope){
  $scope.panel=0;
  
  $scope.search = function(){


  	 // to switch between the panels
  	$scope.panel   = 1;
  	// to make the svg map readable in the DOM
  var id_room = $('#room').val();
  	
   var a = document.getElementById("svgMap");
   		
	    a.addEventListener("load",function(){

	        // get the inner DOM of alpha.svg
	        var svgDoc = a.contentDocument;
	        // get the inner element by id
	        var path = svgDoc.getElementById(id_room);
	        
	        var position = path.getBoundingClientRect();
			var x = position.right;
			var y = position.top;

			 $(".pin").css({"left":x+"px","top":y+"px","display":"block"})
  			 $(".pulse").css({"left":x+"px","top":y+"px","display":"block"})
	        // add behaviour
	        
	        // marker 
	 
	  }, false);   
  };

  /* automatic search */

   $scope.selectedRoom = "";
  
  // instantiate the bloodhound suggestion engine
  var rooms = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.room); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: [
      { room: 'Mueller' },
      { room: 'Koch' },
      { room: 'Pawlowski' },
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

  /* end automatic search */

  
};



