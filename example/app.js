var win = Ti.UI.createWindow({
	backgroundColor:'white'
});


if (Ti.Platform.name == 'iPhone OS'){
	// The Napp SearchBar extends the Titanium default searchBar UI component.
	require('dk.napp.searchbar');

	var searchBar = Ti.UI.createSearchBar({
		showCancel:false,
		searchFieldBackgroundImage:"searchbg.png",
		customCancel:{
			barColor:"#333",
			color:"#ddd",
			title:"Hit me",
			font:{
				fontSize:16,
				fontWeight:"bold",
				fontFamily:"Georgia"
			}
		},
		hintText:"my custom search",
		barColor:"transparent",
		color:"red",
		//disableSearchIcon:true, //disables the search icon in the left side
		font:{
			fontSize:16,
			fontWeight:"normal",
			fontFamily:"Georgia"
		},
		backgroundColor:"#666"
		/*backgroundGradient: {
	        type: 'linear',
	        startPoint: { x: '0%', y: '0%' },
	        endPoint: { x: '0%', y: '100%' },
	        colors: [ 
	        	{ color: '555', offset: 0.0}, 
	        	{ color: '333', offset: 0.02 }, 
	        	{ color: '666', offset: 1.0 } 
	        ],
	    },*/
	});
	searchBar.addEventListener("focus", function(){
		searchBar.setShowCancel(true);
	});
	searchBar.addEventListener("cancel", function(){
		searchBar.setShowCancel(false);
		searchBar.blur();
	});
	searchBar.addEventListener("return", function(){
		searchBar.setValue("");
		searchBar.blur();
	});
	
	var tableView = Ti.UI.createTableView({
		data:[],
		search:searchBar
	});
	win.add(tableView);
}
win.open();
