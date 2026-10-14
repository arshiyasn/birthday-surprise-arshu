# Birthday Surprise (React + Vite)

A landscape birthday-card website: passcode keypad, playful question pages, a gift hub with five gifts, then a Happy Birthday card, Make a Wish cake, Memories clothesline, "My fav person" letter, "Cutie, in frame" slideshow, photo collage and a final message. Background music included.

## Run it
1. Install Node.js 18+ (nodejs.org).
2. Open the folder that contains `package.json` in VS Code.
3. In the terminal: `npm install` then `npm run dev`.
4. Open the `Local:` link it prints (usually http://localhost:5173). Passcode: **2006**.
5. To publish: `npm run build` and upload the `dist` folder (Netlify, Vercel, GitHub Pages).

## Photos and music (already arranged)
| Folder / file | Used for |
| --- | --- |
| `public/images/birthday/photo.jpeg` | Photo on the Happy Birthday card |
| `public/images/memories/photo1.jpeg` to `photo5.jpeg` | MEMORIES clothesline (5 photos) |
| `public/images/frame/photo7.jpeg` | "CUTIE, IN FRAME" slideshow |
| `public/images/collage/photo9.jpeg` to `photo14.jpeg` | "US in every universe" collage (6 photos) |
| `public/audio/deema.mp3` | Background music (starts on the first tap; speaker button top right) |

To swap a photo, replace the file and keep the same name (or edit the list in `src/data/birthdayContent.js`).

## Edit the text
Everything is in `src/data/birthdayContent.js`: name on the ribbon, passcode, every heading, question wording and button targets, the letter, timings.

## Your own character artwork
The cartoon kid is drawn in code. To use your own pictures instead, put transparent PNGs named `stand.png`, `sign.png`, `tumble.png`, `back.png`, `bust.png`, `cake.png` in `public/images/character/` and set `useCustomCharacterImages: true` in `birthdayContent.js`.

## Page flow
Passcode (wrong code shows WRONG PASSCODE + TRY AGAIN) > "I have made something for you / Do you wanna see it?" (NO > HOW DARE YOU!? > TRY AGAIN) > "Are you really excited?" > Gifts. Gift 1 Birthday card, gift 2 Make a wish, gift 3 Memories, gift 4 Letter, gift 5 Cutie in frame > collage > final message. Opened gifts fade out. The red arrow button returns to the gifts.

On a phone held upright the stage turns sideways to fill the screen; rotating the phone to landscape works too.
