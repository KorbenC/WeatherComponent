({
    doInit : function(component, event, helper) {
        // On component initialization, get the user's location...
        component.set("v.message", "Getting current location...");
        console.log(navigator.geolocation);
        navigator.geolocation.getCurrentPosition(
            function(position) {
                // Store the latitude and longitude in component attributes
                component.set("v.latitude", position.coords.latitude);
                component.set("v.longitude", position.coords.longitude);
                // Get current weather and forecast for user's location
                helper.getWeather(component);
                component.set("v.message", "");
            },
            function(error) {
                component.set("v.message", "");
                alert("Geolocation not available. Please enter a location manually.")
            });
    },
    
    searchHandler: function(component, event, helper) {
        helper.getWeather(component);
    },
    
    showHide: function(component) {
        var isVisible = component.get("v.visible");
        //toggle the visible value
        component.set("v.visible", !isVisible);
    }
})