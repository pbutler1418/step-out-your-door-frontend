### Stepping Out Your Door Travel App

### Deployed Site: http://stepoutyourdoor.surge.sh/

### Description
	The Stepping Out Your Door Travel App will allow the user to find and get inspired by new travel experiences, save those experiences to a bucket list, and even post their own unique adventures to inspire others!

### MVP
Users can create a user profile for repeated use.
Users can  journal their own experiences, browse through previously posted experiences.
Utilize a “Teleporter” component that will let the user search for a location and return a 360 image covering the whole page, allowing the user to “experience” a location from all over the world. 
Styling to create an immersive experience for the user.

### Post MVP
Add a google maps component to the home page that will display where all the experiences logged into the app are located and/or embed the Atlas Obscura interactive map to let users discover new experiences.
Implement an extra third party api to let the user access travel information to get them started on their next journey. 
Add a feature to save their favorite to a bucket list.


### Component Hierarchy

https://drive.google.com/file/d/1LdFobG4C6KZswyXudGRgLuJYlyAQQNFf/view?usp=sharing

### Server Side Routes

get '/users/', to: 'users#index'
get '/experiences/', to: 'experiences#index'
post '/users/:id/', to: 'users#show'
post '/users/:id/experiences', to: 'experiences#create'
get '/users/:id/experiences', to: 'experiences#show'
put '/users/:id/', to: 'users#update'
delete '/users/:user_id/experiences/:id', to: 'experiences#delete'


# ============== Auth =====================
post '/users/', to: 'users#create'
post '/auth/login', to: 'authentication#login'
get '/auth/verify', to: 'authentication#verify'
end

### Outside Sources Used

Airpano.com. Airpano is a website that allows you to search for 360 degree images and videos from around the world. A cool way to get inspiration for your next trip!
