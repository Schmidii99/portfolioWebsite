# What
Kleinanzeigen Plus is a desktop app from the popular website [Kleinanzeigen](https://www.kleinanzeigen.de) (formally Ebay-Kleinanzeigen)
that is a local marketplace comparable to Facebook Marketplace, with a lot of extra features.

# Why
Kleinanzeigen is only available as a website or Android app and has some limitations regarding viewing ads and saving ads.
It was only possible to view 25 pages with 25 ads per page and save only up to 100 ads. Another annoying thing was that there
were too many ads and ads disguised as regular listings.

Also, I wanted to do some data analysis (image 11) for which I needed the data in a machine-readable format, to find 
good listings when buying my motorcycle or computer parts and get an overview of the current market. 

# How
My app uses the [Tauri Framework](https://tauri.app) to create a cross-platform desktop app from a single codebase. 
The app is actually fully functioning and tested on Mac (arm) and Windows. In comparison to Electron my app was a lot faster
and smaller. Unfortunately everything has it's downsides, in this case being that Rust was a lot harder to work with than
Javascript.

In the **frontend** I used SvelteKit as my desired framework, with TailwindCSS for styling and Typescript for type-safety.

In the **backend** rust with the [rusqlite](https://github.com/rusqlite/rusqlite) library to store all data in a single 
sqlite file locally that used to keep track of all saved ads/ searches and viewed ads. Tauri also creates ways to use IPC
to communicate between the JS frontend and the rust backend.

#### Where did the data come from?
While researching this project and iterating on many prototypes in multiple language I found out that I should avoid web
scraping if possible. After a lot of research I found a way to receive data in a machine-readable format and used this going
forward.

# Features 

- No account needed
- No ads
- All data saved locally
- View up to 50 pages with 100 ads each.
- Search analysis
- Export ads
- Export all ads from a search as csv
- Find most popular ads from a search
- Analyze search results
- Save as many ads as you wish
- Anonymity when searching
- Saved ads are kept locally even when deleted
- See how often an ad was saved (was added to Kleinanzeigen as well)

# Why not Open Source
Even though I did not violate any TOS or Copyright law I want to be on the safe side and avoid all possible legal conflicts, so I will not make the source code open.  

# Conclusion

All in all this was one of my largest projects I worked on over multiple months and wrote over 4000 lines of actual code in more
than 60 different files. From this project I learned a lot about SvelteKit, working with apis as well as working on a
project over a longer period of time. 

# Additional infos to the images

#### 3: All dynamic filter options (also depends on the category).
#### 9: Search analysis showing the most viewed/ saved ads.
#### 10: Search analysis showing categories and price distribution.
#### 11: Price per mileage of yamaha MT07 in germany.
This chart was generated in Excel using the exported csv.