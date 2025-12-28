# What is r/place?
In 2023 I was really engaged in the Reddit rPlace event, where users could collaboratively create pixel art on a massive canvas. It was fascinating to see how different communities came together to contribute to various designs, and I enjoyed participating in the creation of some pieces myself. The event highlighted the power of collective creativity and the importance of collaboration in achieving something larger than what individuals could accomplish alone. 
Especially the german community was really present and collaborative created some art.

# The Data
The data was published [here](https://placedata.reddit.com/data/canvas-history/2023/index.html) as 53 csv files containing the position, time, color and user. I processed the data and inserted them into a sqlite database. This brought the total file size down to 6.5Gb.

# Results
With the data in the database I ran a query to find out how often some pixels were replaced and colored them whiter accordingly (Image 1). I used a logarithmic scale.
<br>
In the Image you can clearly make out the different expansions of the canvas that were happening during the event.

Most replaced pixels:
(0:0) 63235
(-1500:-1000) 44336
(20:-401) 29147
(999:499) 22997
(-251:-415) 22758
(-251:-416) 22511
(1499:999) 21029
(-8:13) 18929
(-8:12) 18918
(-500:-500)18913

In general one can see that controversial topics were replaced very often.

I also published a small [reddit post](https://www.reddit.com/r/place/comments/15cyao9/heatmap_of_most_replaced_pixels/).

### Special thanks to [Marcel](https://marcelschwarz.net), who helped me develop some of these scripts.