# Finity Theme for Jellyfin

![Finity Logo](finity.png)

Now in beta. There is still polishing to be done here and there, and some areas of the UI haven't been completely finalized yet, but most of the main styling is present. PRs are welcomed - whether it be to make things more efficient, performant, or to polish the overall theme.

Finity is a modern, minimal, and elegant theme for [Jellyfin](https://jellyfin.org). Designed with clarity and immersiveness in mind, it introduces sleek typography, and a clean layout to elevate your media browsing experience.

> [!IMPORTANT]
> This theme is meant to be used in conjunction with Jellyfin's included "Dark" user theme (found in your user settings). **Using any other built-in Jellyfin theme is NOT supported at this time, and will almost certainly look terrible.**
>
> Music libraries are not supported at this time, and at the moment I have no immediate plans to work on this. However, I will gladly look at any PRs for music libraries.
> 
> Finally, make sure to **enable blurred placeholders for images** and **disable backdrops** in your user display settings. Not doing so may cause several important aspects of the theme to not render correctly (such as the gradient mask for show backdrops)

---

## Features

- Grid-style season view, aiming to somewhat emulate Plex's look
- Minimalist UI adjustments for improved readability and visual polish
- Customizable theme powered by CSS variables for colors, sizing, layout, and visibility
- Rubik font integration for sleek typography
- Hover effects, shadows, and lift transitions for a more dynamic, tactile feel
- Redesigned cards and buttons with rounded corners
- Collapsible, pill-styled tags

---

## Screenshots

<div align="center">

<img src="screenshots/home_featured.png" alt="Home w/ featured content" width="500px" />
<img src="screenshots/home_drawers.png"      alt="Home - Drawers"            width="500px" />

<img src="screenshots/show_season.png"       alt="Show - Season page"        width="500px" />
<img src="screenshots/movie.png"             alt="Movie"                     width="500px" />

</div>


---

## Installation

There are two different variants available for you to choose from:
### 1. Complete
   Contains ALL features and is exactly as pictured in the preview screenshots. Contains some subjective tweaks and UI decisions.
   > [!IMPORTANT]
   > The "complete" variant of this theme relies on several external scripts, and an additional CSS ruleset. You **must** add some lines in your Jellyfin webroot's `index.html` file, **just before `</head>`**:
   ```
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script><script src="https://cdn.jsdelivr.net/npm/dompurify@3.2.5/dist/purify.min.js"></script><script async src="https://cdn.jsdelivr.net/gh/prism2001/finity@main/clickableTitles.js"></script>     <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/prism2001/jellyfin-featured-slideshow@main/  slideshowpure.css" />
   <script async src="https://cdn.jsdelivr.net/gh/prism2001/jellyfin-featured-slideshow@main/slideshowpure.js"></script>
   ```
   You can usually find the webroot in the following locations:
   
   Linux: `/usr/share/jellyfin/web/index.html`
   
   Windows: `C:\Program Files\Jellyfin\Server\jellyfin-web\index.html`

   Finally, in your webroot, create an `avatars` directory, and inside of it, a `list.txt` file. Then format it like this:

   ```
   Featured
   ID1
   ID2
   ID3
   ```

   Replace the `IDx` lines with an ID from a movie or show in your library. You can get this by clicking on something, and copying the `&id=` from your browser's URL bar:
   
   ![image](https://github.com/user-attachments/assets/76bb3f70-fb44-44fe-907e-e814ebdcc773)

   Ideally you would put 8 different IDs in this file, but if you download `slideshowpure.js`, copy it to your webroot and change the `src=` in `index.html` to point to your local copy, you can change the variables to your liking.


   ---
   
   After completing the steps above, add this to the **top** of your Jellyfin's custom CSS field:
   
   ``@import url("https://cdn.jsdelivr.net/gh/prism2001/finity@main/complete/finity-complete.css");
   ``

   ---

### 2. Minimal

  <div align="center"><img src="screenshots/minimal_home_drawers.png"      alt="Home - Drawers"            width="500px" /></div>
  
   Reduced featureset with no external dependencies required. In the minimal theme, you lose these features:
   - No featured slideshow on homepage
   - No clickable episode titles in the season's grid view

   Add this to the **top** of your Jellyfin's custom CSS field:
   
   ``@import url("https://cdn.jsdelivr.net/gh/prism2001/finity@main/minimal/finity-minimal.css");``

---

## Customization

*(WIP, still a lot to fix here)* You can modify colors, roundness, blur, layout padding & spacing by editing the CSS file manually. The CSS is organized to try to make customization relatively straightforward.

---

## Compatibility

- Tested with Jellyfin 10.10.7 and later
- Works across desktop and mobile interfaces
- Not guaranteed to be compatible with unofficial forks or third-party clients

---

## Special Thanks

MakD's [Jellyfin-Media-Bar](https://github.com/MakD/Jellyfin-Media-Bar) was kind of the catalyst that inspired me to start making this theme. Additionally, some design choices are borrowed from [Jamfin](https://github.com/JamsRepos/Jamfin) and [Glassmorphism](https://github.com/alexyle/jellyfin-theme).

## License

GPLv3

---

## Feedback and Contributions

Feel free to open an issue or pull request if you encounter a bug or want to contribute improvements.

---
