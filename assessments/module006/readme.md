app deployed to AWS
http://ec2-3-133-118-215.us-east-2.compute.amazonaws.com:8000/

Fixed 3 bugs:

1. Wins counter did not work properly.
2. "See all Bots" failed to show robots.
3. Losses/Wins persisted even page refresh or connect from another client. Moved this logic to client side from server.
