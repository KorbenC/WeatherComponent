# WeatherComponent
This Salesforce1 Lightning Component was forked from [Christophe Coenraets](https://developer.salesforce.com/blogs/developer-relations/author/ccoenraets). I improved the component by adding an option for the user to choose Fahrenheit or Celsius via toggle.

The Weather Component leverages the Weather Underground API and shows the current conditions at your current location, as well as a three day forecast. You can also specify specific locations in the search bar. For example: Boston MA, San Francisco CA, Mumbai, Paris France, SFO, LHR, etc.

The component doesn’t call the Weather Underground API directly. Instead, it invokes an @AuraEnabled method in its Apex Controller which makes the API call on the client application’s behalf. This workflow allows you to use the Remote Sites security infrastructure to control which services your Lightning Components can acccess.

## Installation Instructions
To install the Weather Component in your own org:

Click [this link](https://login.salesforce.com/packaging/installPackage.apexp?p0=04ti0000000Te9Z) to install the unmanaged package in your org

1. Sign up for a free Weather Underground API key
2. In the developer console, open the WeatherController Apex class, replace YOUR_API_KEY with your actual Weather Underground API key, and save the file
3. In Setup, select Administer > Security Controls > Remote Site Settings, click New Remote Site, specify WeatherUnderground as the Remote Site Name and http://api.wunderground.com as the Remote Site URL. Click Save.

## Testing as a Lightning App

1. Open the developer console
2. Select File > Open Lightning Resources, select WeatherApp, and click Open Selected
3. Click Preview (upper right corner)

##Testing as a Component in the Salesforce1 App
Add the component to the Salesforce1 menu:

1. In Setup, select Administer > Mobile Administration > Mobile Navigation
2. Select Weather in the Available list
3. Click the Add button to add the Weather tab to the Selected list
4. Click the Up button to move the Weather tab closer to the top of the menu
5. Click Save

Test the component in the Salesforce1 application simulator:

1. In Salesforce, remove the part of the URL that comes immediately after salesforce.com and append /one/one.app to the URL immediately after salesforce.com
2. This starts the Salesforce1 Application simulator
3. Click the menu button in the upper left corner
4. Select Weather in the menu
5. Preview the component
