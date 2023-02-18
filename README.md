# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Homepage |
| GET | /places/ | List all places |
| POST | /places/ | Create new place |
| GET | /places/new/ | Form page for creating a new place |
 | GET | /places/:id | Details about a particular place |
 | PUT | /places/:id | Update a particular place |
 | GET | /places/:id/edit/ | Form page for editing an existing place |
 | DELETE | /places/:id/ | Delete a particular place
  | POST | /places/:id/rant/ | Create a rant (comment) about a particular place
 | DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place
 | GET | * | 404 page (matches any route not defined above) |

 ---

 1. As a dev, I need to request data from the server about a specific place so I can populate the places detail page

 2. As a user, I need to be able to create new places and pages for those places

 3. As a user, I need to be able to get details about desired places and update those places info on the pages

 4. As a dev, I need to create the page that allows editing of places, and give the user a function to delete particular places as they choose

 5. As a dev, I need to create the functionality for users to comment about places and delete their comments using a rant page

 6. As a dev, I need to create a catch all page when the user types in an undefined route, which gives them an error message 
