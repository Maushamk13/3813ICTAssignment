# Chat System Documentation and Planning
## Project Overview
The goal of this project is to build a text/video chat system with three levels of permissions: Super Admin, Group Admin, and User. The system will allow real-time communication within different groups and channels. It will be implemented using the MEAN stack (MongoDB, Express, Angular, Node), sockets.io, and Peer.js.
## Project Phases
This documentation outlines the initial phase (Phase 1) of the project. The subsequent phase (Phase 2) will introduce MongoDB, sockets for real-time communication, image support, video chat, and other enhancements.
Phase 1: Initial Implementation
In Phase 1, we will focus on creating the basic structure of the chat system, including user authentication, user roles, groups, channels, and basic chat functionality. Local storage will be used for data storage until we introduce MongoDB in Phase 2.
## Git Repository Organization
•	Branching: We will follow a branching strategy with a 'master' branch for stable releases and feature branches for development.
•	Update Frequency: Regular updates to the repository will be made to track progress.
•	Structure: The repository will be organised into frontend and backend directories, with clear naming conventions for files and folders.
### Version control: 
•	Regular Commits: Throughout the project, I made it a point to make regular commits to my Git repository. Each commit was focused on a specific task or feature. This approach allowed me to track my progress, keep a history of changes, and easily identify and fix issues if they arose.
•	Single Branch: Since this was a solo project, I decided to work with only one branch, typically the 'master' branch. This simplified the version control process as there were no collaborative efforts that required multiple branches.
•	Commit Messages: For each commit, I used descriptive commit messages that summarized the changes made in that commit. This helped me and potentially others understand the purpose of the commit briefly.
•	Backup Strategy: To ensure that I didn't lose track of my progress or data, I regularly pushed my commits to a remote repository, such as GitHub. This served as a backup and allowed me to access my work from different devices if needed.
•	Branching for Experimentation (if needed): While I primarily used a single branch, there were instances where I needed to experiment with a feature or fix. In such cases, I created a feature-specific branch, made the necessary changes, and then merged it back into the 'master' branch once the feature was complete and tested.
•	Reverting to Last Commit: If I encountered issues or wanted to revert to a previous state of the project, I knew I could always use the Git history to track back to the last commit that represented a stable state of the project. This provided a safety net in case something went wrong during development.
Overall, my version control approach for this solo project focused on simplicity and ensuring that I had a reliable history of changes and backups in case of any unexpected issues or setbacks. It allowed me to work with confidence and maintain control over the project's development.

### Git repository: https://github.com/Maushamk13/3813ICTAssignment.git
### Git Log: 
PS C:\Users\maush\Desktop\3813ICTAssignment> git log
commit 88841ac5bf417948bf97ac98b03a35bf4dda2cea (HEAD -> main, origin/main, origin/HEAD)
Author: Mausham <mausham.kafle@griffithuni.edu.au>
Date:   Thu Sep 7 03:21:13 2023 +1000

    Added mock chat-user function and page.

commit cd5e682ae2f82c233fdf987e2b1ee78a9cffe7fd
Author: Mausham <mausham.kafle@griffithuni.edu.au>
Date:   Thu Sep 7 03:11:22 2023 +1000

    Added mock group-admin function and page.

commit 5c20842c2ef23d5bb537aa4999e9907958dfa756
Author: Mausham <mausham.kafle@griffithuni.edu.au>
Date:   Thu Sep 7 03:08:38 2023 +1000

    Added mock super-admin functions and page.

commit 45b4cd133cee64c01bf57a688ba9b602fd9cfc56
Author: Mausham <mausham.kafle@griffithuni.edu.au>
Date:   Thu Sep 7 00:36:30 2023 +1000

    Added the local storage to store the newly registered users and load them on login.

commit 6af489e1b24a6e92eef8ce9805372d94c9468343
Author: Mausham <mausham.kafle@griffithuni.edu.au>
Date:   Wed Sep 6 23:10:43 2023 +1000

    Fixed the registration through the server side

commit 0beaf2025537848eeb9ed63fd9cdb625e6f3ea9a
Author: Mausham <mausham.kafle@griffithuni.edu.au>
Date:   Wed Sep 6 14:08:52 2023 +1000

    Created the authentication service and made different user type access respective components

commit 40a358798db78df19025124b5194572dec32e966
Author: Mausham <mausham.kafle@griffithuni.edu.au>
Date:   Wed Sep 6 12:37:12 2023 +1000

    Made login and registration accessed from main page, and chat and profile after logged in

commit 0b26681a03bd70c56c1a7d4fbe220b1e623e08a2
Author: Mausham <mausham.kafle@griffithuni.edu.au>
Date:   Tue Sep 5 20:19:00 2023 +1000

    Added basic layout on the component pages and main page.

commit 21181bd5f4d6d4f26b0c3fc29de4f91c7bf96f40
:
 
## Data Structures
•	Client-Side: The client-side will use models and services to represent users, groups, channels, etc., in Angular.
•	Server-Side: The server-side will define modules and functions for handling user roles, group management, and chat functionality.
## Users
	The user’s data structure is an array containing objects representing individual users.
	Each user object contains the following properties:
	username (string): The unique username of the user.
	email (string): The email address of the user.
	password (string): The password of the user.
	roles (array of strings): The roles assigned to the user (e.g., "Super Admin", "Group Admin", "User").
	groups (array): An array representing the groups that the user is a member of.
	channels (array): An array representing the chat channels the user has access to.
## Groups
	The groups data structure is an array containing objects representing chat groups.
	Each group object contains the following properties:
	name (string): The name of the group.
	channels (array): An array representing the chat channels within the group.
	admins (array): An array containing the administrators (Group Admins) of the group.
	members (array): An array containing the members (Users) of the group.
## Channels
	The channels data structure is an array containing objects representing chat channels.
	Each channel object contains the following properties:
	name (string): The name of the chat channel.
	group (string): The name of the group to which the channel belongs.
	messages (array): An array representing the chat messages within the channel.
These data structures are used to organize and manage users, groups, and channels within the chat system. Users can be associated with specific groups and channels, and groups can contain multiple channels and have administrators and members. Channels, in turn, store chat messages for communication between users.

## Angular Architecture
### Components
1.	Login Component: This component is responsible for handling user login. Users can enter their credentials to authenticate themselves in the system.
2.	Registration Component: The registration component allows new users to create accounts by providing essential registration information, such as username, password, and user type.
3.	Super Admin Component: This component is designed for Super Admin users. It provides the user interface for Super Admin-specific actions, such as adding, modifying, or deleting users, groups, and channels. It leverages the user service to access user data.
4.	Group Admin Component: The Group Admin component caters to users with the "Group Admin" role. It offers features for creating groups and channels within groups, managing group-related actions, and handling user permissions within their administered groups.
5.	Chat User Component: This component is for regular Chat Users. It provides the interface for selecting groups and channels, as well as engaging in real-time chat conversations.
### Services
1.	Authentication Service: This service plays a crucial role in connecting your Angular application to the server for user authentication. It handles user login requests, sending user credentials to the server, and receiving authentication responses.
2.	Registration Service: The registration service manages user registration requests, sending the new user's data to the server for account creation.
3.	User Service: The user service acts as an intermediary to fetch user data from the login component and share it with other components, such as Super Admin, Group Admin, and Chat User components. This service likely helps in displaying user-specific data and managing user interactions across the application.
### Models
The server model defines the structure and attributes of user objects, which are essential for representing user data in the system. While this data may be hardcoded initially, it's a good practice as it helps in defining the expected structure of user data.
### Routes
Angular application uses routing to navigate between different components. Here's an overview of the routing configuration:
•	The application has a pre-login layout that includes Login and Registration components. Users are redirected to the login component when accessing the root path.
•	Individual routes are defined for each user role component: Super Admin, Group Admin, and Chat User components. This routing structure ensures that users are directed to the appropriate component based on their role.

## Node Server Architecture
•	Modules: The Node.js server will use modules for user authentication, group management, and chat functionality.
•	Functions: Server-side functions will be responsible for specific actions like creating groups, managing channels, and authenticating users.
•	Files: Configuration files, routes, and middleware will be organized systematically.
•	Global Variables: Global variables will be used sparingly, with an emphasis on encapsulation.
## Server-Side Routes (APIs)
•	/api/login: 
HTTP Method: POST
Endpoint: /login
Description: This route is used for user registration. It allows clients to register a new user with a username, password, and user type (or role).
Parameters:
	Request Body: Contains JSON data with the following fields:
	username (string): The username of the user being registered.
	password (string): The password for the user account.
	usertype (string or array of strings): The type or role of the user (e.g., "Super Admin", "Group Admin", "User").
Return Values:
	200 OK: If registration is successful, it responds with JSON containing the following:
	success (boolean): True to indicate success.
	message (string): A success message.
	roles (array of strings): The roles assigned to the registered user.


•	/api/registration: Registering new users and updating the user data present in the server side.
HTTP Method: POST
Endpoint: /register
Description: This route is used for user registration. It allows clients to register a new user with a username, password, and user type (or role).
Parameters:
	Request Body: Contains JSON data with the following fields:
	username (string): The username of the user being registered.
	password (string): The password for the user account.
	usertype (string or array of strings): The type or role of the user (e.g., "Super Admin", "Group Admin", "User").
Return Values:
	200 OK: If registration is successful, it responds with JSON containing the following:
	success (boolean): True to indicate success.
	message (string): A success message.
	roles (array of strings): The roles assigned to the registered user.

## Interaction Between Client and Server
•	Authentication: Users will log in with their username and password, with roles determining access.
•	User Interface: UI will change based on user roles, allowing actions like adding/modifying/deleting users, groups, and channels.
•	Chat Functionality: Real-time chat will be implemented using sockets.io, and messages will be added to the chat history.
## User Authentication
•	Initial authentication with a hardcoded super admin user ('super' with password '123').
•	User roles (Super Admin, Group Admin, User) will determine site access and features visible to users.
Data Storage
•	Browser-based local storage will be used to store data structures temporarily until MongoDB integration in Phase 2.

## Conclusion
Phase 1 of the chat system development focuses on creating the basic structure and functionality. Phase 2 will introduce MongoDB, sockets, image support, video chat, and other advanced features. 

