# js-clone-coding
This is a momentum clone coding project.

Implementation:
1. Clock⏱ - Shows realtime.
2. Random🎲 - Changes background and the quotes randomly when the browser is refreshed.
3. Login🔑 - used localStorage of the broswer to keep the person logged.
4. Logout🚪 - logout removes username and todos in the localstorage and refreshes the browser.
4. Weather API☔️ - Gets the current location data and shows the current weather.
5. News API📰 - Gets news headlines with link when login happens.
6. Map API🗺 - Gets current longitude and latitude to show the location on the map.

## Issues in APIs
- everything was fine when I run the projects on the localhost.
- However, when I deployed the project on github-pages, Some of the APIs didn't work (or not responded)
1. NewsAPI threw me a CORS error. "not allowed by Access-Control-Allow-Origin. Status code: 200"
2. Browser couldn't find the "kakao" variable for KakaoMapAPI.

Supposed to work like this 🥲
![Screen Shot 2022-07-17 at 11 13 50 PM](https://user-images.githubusercontent.com/76804681/179402732-87e5121f-0d3d-4ec2-9235-9151e7c6b5ee.png)
