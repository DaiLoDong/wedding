# Wedding Website
My personal wedding website taking a lot of inspiration from wedding.rampatra.com

# Core Features and Highlights
1. Fully __responsive__ design on both desktop and mobile (ios and android).
2. __RSVP form__ which directly records data to a Google Sheets via Google Apps Script GS.
3. __Event Gallery__ so guests can upload their own event photos and see them update live on the page for all users. 
      Powered by a self-hosted docker container which serves uploaded images in a gallery website hosted through my own cloudflare domain.
4. __Receive automated email alerts__ when someone RSVPs. 
      Handled by Google Apps Script GS.
5. __Add to Calendar__ feature which supporting different calendars (google, ical, outlook, yahoo).
6. __Digital Seating chart__ searchable by both name and table.
      Implemented using simple js string search.
7. __Countdown Timer__ showing time remaining until event.
8. __Flight booking__ button to help guests book their travel plans. Source location will default to visitor's.
9. __Interactive Google Maps__ showing your ceremony and reception location. 
      Integrated using Google Maps Platform API.
10. __Weather Forecast__ to help guests dress for the weather especially if you have anything outdoors.
      Implemented via third party API.
12. __Embedded Youtube video__ showing off your venue/location, also has fallback image for mobile support.
13. __Custom domain__ hosted via GH Pages and my own cloudflare domain. 

# Documentation
The person I took inspriation from Ram Patra who wrote a [blog post describing all the features of his wedding website](https://blog.rampatra.com/wedding-website) and how to
customize some of them according to your needs.
Things not included: Changing the MD5, I used a MD5 hasher to add/change the invite code password