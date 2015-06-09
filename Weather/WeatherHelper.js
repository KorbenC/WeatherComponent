({
	getWeather: function(component, helper) {
        // Get a reference to the getWeather() function defined in the Apex controller
		var action = component.get("c.getWeather");
		// Get the value of the searchKey attribute
        var searchKey = component.get("v.searchKey");
        // If the user provided a search key, use that location as the query string (replacing spaces with underscores as required by the API)
        // otherwise, use the current location as the query string
        action.setParams({
            "q": searchKey ? searchKey.replace(/ /g, '_') : component.get("v.latitude") + "," + component.get("v.longitude")
        });
        // Register the callback function
        action.setCallback(this, function(response) {
            var data = JSON.parse(response.getReturnValue());
            // Set the component attributes using values returned by the API call
            if (data.current_observation) {
                component.set("v.currentWeather", data.current_observation);
                component.set("v.forecast", data.forecast);
            } else {
                alert("Location ambiguous or not found. Specify state or country.");
            }
        });
        // Invoke the service
        $A.clientService.runActions([action]);
	}
    

})