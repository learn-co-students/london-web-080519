login or signup

FE /login or /signup => LoginForm or SignupForm

fill out form, hit submit

API sends email and password to BE

BE validates the user, sends user details AND a JWT

FE recieves JWT and use details, saves JWT in storage and saves user details in state

create a post

FE /posts/new => NewPostForm

user fills out form, hits submit

API send title and content along with the JWT

BE decodes the JWT, finds the user, creates a post using that user's ID, responds with post

FE redirects to post show page
