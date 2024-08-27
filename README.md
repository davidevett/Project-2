# FoodBook

## Description
FoodBook is a social app designed for food lovers who enjoy exploring new cuisines while traveling. This platform allows users to search, save, and share their culinary experiences from around the world. With FoodBook, users can create personalized food itineraries, discover hidden gems in different cities, and connect with other food enthusiasts.

## Table of Contents
- [User Story](#user-story)
- [Goals](#goals)
- [Concept](#concept)
- [Technologies Used](#technologies-used)
- [Tasks and Roles](#tasks-and-roles)
- [Challenges](#challenges)
- [Successes](#successes)
- [Future Development](#future-development)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## User Story
Exploring Culinary Delights with FoodBook

As a passionate food lover who frequently travels,  
I want to have a convenient platform where I can discover, save, and share my food experiences from different parts of the world,  
So that I can keep track of my culinary adventures, find new food spots to explore, and connect with other food enthusiasts who share similar tastes.

## Goals
We set out to create a fun social media platform that combines the exploration of exotic culinary experiences with the opportunity to share these adventures with friends.

## Concept
**Description:** A social media platform dedicated to users sharing their experiences at restaurants and diners around the country.  
**Motivation:** We developed the concept of a user-based travel blog, enabling users to share their travels with friends and learn about new destinations along the way.  
**User Story:** As a user, I want a website where I can discover exciting new places to eat and share them with the world!

## Technologies Used
- MVC Architecture
- Node.js - JavaScript runtime environment
- Express.js - Web framework for Node.js
- Handlebars.js - Templating engine
- SQL and Sequelize ORM - For database management
- Axios - For making HTTP requests
- Bulma - CSS framework for styling
- Foursquare API - Third-party API for fetching restaurant data
- Render - Platform for deployment

## Tasks and Roles
- **Roberto Ulloa:** API and Routes
- **Connor Neale:** Models and Views
- **David Evett:** Styling and Responsive Design

## Challenges
- Issues with the API source not providing all the required information.
- Unable to implement a profile page and friend requests.

## Successes
- Successful implementation of login and user functions.
- Capability to search, save, and comment on restaurants.

## Future Development
- Adding a map for more detailed searches.
- Implementing reservation capabilities.
- Allowing users to post their own pictures.
- Adding rating systems for locations.
- Enabling user profiles with profile pictures and friend requests.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/davidevett/Project-2
   cd Project-2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node server.js
   ```

## Usage

1. Access the application:
   - Open your web browser and navigate to http://localhost:3001.
   - You will see the landing page of the FoodBook application.

2. Search for a food place:
   - Enter a city or location and a type of cuisine or dish you're interested in.
   - Click on the "Search" button to find food places.

3. Save a place:
   - From the search results, click on "Save Post" to add a place to your saved list.

4. View saved places:
   - Go to the "Explore" section to see all your saved food adventures.

5. Delete a post:
   - Click on the "Delete Post" button next to any saved place to remove it.

## Deployment
To deploy the application to Render, follow these steps:

1. Create a new Web Service on Render:

   - Go to your Render dashboard and click on "New" -> "Web Service".
   - Connect your GitHub repository.
   - Fill in the deployment details:
     - Name: FoodBook
     - Language: Node
     - Branch: main
     - Root Directory: (leave blank)
     - Build Command: npm install
     - Start Command: node server.js

2. Deploy the service:
   - Click on "Create Web Service" to start the deployment process.
   - Render will build and deploy your application.
   - Once complete, Render will provide a URL where your application is hosted.

3. Access the deployed application:
   - Open the provided URL in your web browser to use your FoodBook application.

   **Deployed Application URL:** [FoodBook on Render](https://foodbook-pyfq.onrender.com)

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Questions
For any questions, please contact us with the information below:

- **Roberto Ulloa**
  - GitHub: [Robert-Ulloa](https://github.com/Robert-Ulloa)
  - Email: roanuc8@gmail.com

- **Connor Neale**
  - GitHub: [Cneale92](https://github.com/Cneale92)
  - Email: connorneale92@gmail.com

- **David Evett**
  - GitHub: [davidevett](https://github.com/davidevett)
  - Email: davidevett55@gmail.com

## Acknowledgement
We would like to thank everyone who contributed to this project. Special thanks to our team members for their hard work and dedication in making FoodBook a success.
```

This README now includes a Table of Contents, Technologies Used, Contributors, License, Usage, Deployment steps, and links to the deployed application. 
```