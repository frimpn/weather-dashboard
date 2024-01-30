# weather-dashboard

## Description 

page link : https://frimpn.github.io/weather-dashboard/

In this task i created a weather dashboard that when you use the search input and type in a city of your choice you can see the current weather and the weather for the next five days. 

1. i started by using jquery to access the DOM of input so that i could gain access to the value that was written in.

2. then i stored it in a variable so that i could use it for my api

3. i created a click event for my submit button so when the user submits the information it would run the function

4. in the function i created my api  link by attaching the value variable and my api personal api key that i generated.

5. then i used the fetch method so that i could send out a request and recieve a response

6. once i got the response i created elements and stored the different data in the elements for the date, humidity and temperature.

7. i stored a function in my fetch that would launch and would contain the api link for the five days by sending the lat and lon

8. i used a for loop to create a divs to store that information in

9. for the buttons i used a function  that created the button and added a event listener that would read the data-city and re run the api fetch method

