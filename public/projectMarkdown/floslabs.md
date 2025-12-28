# Why

I create this board game website because I wanted to play some small online games with my friends who don't have a gaming
pc with a strong graphics card. My problem with the already existing games was, they all required an account or were loaded
with ads.

That's why I created my own website with easy link share, no accounts and no ads.

# What I learned from it

In this project I used a iterative development process and I published my website at an early stage and just then started
to add more game modes.

For this project I used redis as a central backend, since I do not store data for a longer time, and everything else is
containerized. The NGINX is serving the static html and functioning as a load balancer in front of the api server.
The api servers are containerized and there can be as many as you wish.

Everything is also routed through Cloudflare and completely secured with TLS.

# Conclusion
From this project I learned a lot about publishing your website and making a project available to end users, since I must
say I underestimated the efforts needed to do that.