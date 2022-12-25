from instagramy import InstagramUser

# Connecting the profile

user = InstagramUser("oezguencak")

# printing the basic details like

# followers, following, bio

print(user.is_verified())

print(user.popularity())

print(user.get_biography())

# return list of dicts

posts = user.get_posts_details()

print('\n\nLikes', 'Comments')

for post in posts:
    likes = post["likes"]
    comments = post["comment"]
    print(likes,comments)




import instaloader
import pandas as pd
 
# Creating an instance of the Instaloader class
bot = instaloader.Instaloader()
 
# Loading a profile from an Instagram handle
profile = instaloader.Profile.from_username(bot.context, 'oezguencak')
print("Username: ", profile.username)
print("User ID: ", profile.userid)
print("Number of Posts: ", profile.mediacount)
print("Followers Count: ", profile.followers)
print("Following Count: ", profile.followees)
print("Bio: ", profile.biography)
print("External URL: ", profile.external_url)


import instaloader

L = instaloader.Instaloader()
L.interactive_login('oezguencak') 
#L.login('oezguencak', 'jydrEg-waxni4-kynteb') 
profile = instaloader.Profile.from_username(L.context, 'oezguencak')
print(profile.get_posts())

for post in profile.get_posts():
    post_likes = post.get_likes()
    print(post_likes)  # post_likes object
    # Iterate over all likes of the post. A Profile instance of each likee is yielded.
    for likee in post_likes:
        print(likee.username)