# Wedding Website
My personal wedding website taking inspiration from wedding.rampatra.com

# Highlights
1. Slick and fully __responsive__ design.
2. __RSVP feature__ which directly uploads data to a Google Sheets. 
      Uses REST API via Google Apps Script gs.
3. __Event Gallery__ so guests can upload their event photos and see them update live on the page for all users. 
      Powered by Cloudflare Worker to handle the api posts and gets from a private image host. 
      Lightweight database handled by Cloudflare KV.
4. __Receive automated email alerts__ when someone RSVPs. 
      Handled by Google Apps Script gs automating gmail sends.
5. __Add to Calendar__ feature which supporting different calendars (google, ical, outlook, yahoo).
6. __Digital Seating chart__ searchable by both name and table
      Implemented using simple json string search.
7. __Countdown Timer__ showing time remaining until event.
8. __Flight booking__ button to help guests book their travel plans. Source location will default to visitor's.
9. __Interactive Google Maps__ showing your ceremony and reception location. 
      Integrated using Google Maps Platform API and Google Developer Program.
10. __Weather Forecast__ to help guests dress for the weather especially if you have anything outdoors.
11. __Embedded Youtube video__ showing off your venue/location, also has fallback image for mobile support
12. __Custom domain__ hosted via GH Pages and my own squarespace domain. 

# Documentation
The person I took inspriation from wrote a [blog post describing all the features of his wedding website](https://blog.rampatra.com/wedding-website) and how to
customize some of them according to your needs.
