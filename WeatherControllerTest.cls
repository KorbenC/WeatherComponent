@isTest
private class WeatherControllerTest {
	
    @isTest
	static void testGetWeather() {
        String str = WeatherController.getWeather('Boston_MA');
        System.debug(str);
        System.assertNotEquals(str, null);
    }
}