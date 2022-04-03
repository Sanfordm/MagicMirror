/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			//default clock module. matches system time.
			module: "clock",
			position: "top_left"
		},
		{
			module: 'MMM-Worldclock',
			position: 'top_left', // This can be any of the regions, best in top_left or top_right regions
			config: {
			// See 'Configuration options' for more information.
				timeFormat: 'hh:mm A', //Global time format, as defined in moment.js format()
				style: 'left', // Which way do you want the flag and description from the clock? choices are 'top', 'left','right','bottom'
				offsetTimezone: "America/Denver", // Timezone you want to show the difference from. null, "", or omitted from config will be UTC.
				clocks: [
					{
						title: "Japan", // Too long of a title could cause bad text align.
						timezone: "Asia/Tokyo", //When omitted, Local time will be displayed. 
						flag: "jp", // If you'd like a flag from the standard library 
					},
					{
						title: "Thailand",
						timezone: "Asia/Bangkok",
						flag: "th",
					},
					{
						title: "Ecuador",
						timezone: "America/Guayaquil",
						flag: "ec",
					},
					{
						title: "Singapore",
						timezone: "Asia/Singapore",
						flag: "sg",
					},
					{
						title: "California",
						timezone: "America/Los_Angeles",
						flag: "us"
					}
				]
			},
		},
		//Weather current condition in F
		{
			module: "MMM-OpenWeatherMapForecast",
			header: "Current Weather",
			position: "top_right",
			classes: "default everyone",
			disabled: false,
			config: {
			  apikey: "c68b0292de25113d28b225481cfb19f2",
			  latitude: "39.903000",
			  longitude: "-104.977630", 
			  updateInterval: 15,     
			  iconset: "2c",
			  useAnimatedIcons: true,
			  animateMainIconOnly: false,
			  concise: false,
			  forecastLayout: "table",
			  showSummary: false,
			  showHourlyForecast: false,
			}
		  },
		  //Weather current condition in C
		{
			module: "MMM-OpenWeatherMapForecast",
			header: "",
			position: "top_right",
			classes: "default everyone",
			disabled: false,
			config: {
			  apikey: "c68b0292de25113d28b225481cfb19f2",
			  latitude: "39.903000",
			  longitude: "-104.977630", 
			  updateInterval: 15,     
			  iconset: "2c",
			  units: "metric",
			  useAnimatedIcons: true,
			  animateMainIconOnly: false,
			  concise: true,
			  forecastLayout: "table",
			  showSummary: false,
			  showHourlyForecast: false,
			  showExtraCurrentConditions: false,
			}
		  },
		  {
			module: "MMM-OpenWeatherMapForecast",
			header: "Forecast",
			position: "top_right",
			classes: "default everyone",
			disabled: false,
			config: {
			  apikey: "c68b0292de25113d28b225481cfb19f2",
			  latitude: "39.903000",
			  longitude: "-104.977630", 
			  updateInterval: 15,     
			  iconset: "2c",
			  useAnimatedIcons: true,
			  animateMainIconOnly: false,
			  concise: false,
			  forecastLayout: "tiled",
			  showSummary: false,
			  //config for hourly forecast
			  showHourlyForecast: false,
			  showCurrentConditions: false,
			  maxDailiesToShow: 5,
			  requestDelay: 1000
			}
		  },
		//   {
		// 	module: "MMM-BurnIn",
		// 	position: "bottom_bar", // whatever, doesn't render anything
		// 	config: {
		// 	   updateInterval: 15, // in Minutes
		// 	   invertDuration: 5 // in Seconds
		// 	}
        // }
		//   {
		// 	module: "MMM-UVIndex",
		// 	position: "top_right",  // This can be any of the regions.
		// 								// Best results in left or right regions.
		// 	config: {
		// 		latitude: 30.5433 , //simply Google these values for the location you are interested in knowing the UV Index
		// 		longitude: -97.6482, 
		// 		accessToken: "27dffc132cfbda5e8943d02a5d252996", //You can get one for free at https://www.openuv.io
		// 	}
		// }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
