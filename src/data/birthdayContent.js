// ==================================================================
//  EVERYTHING YOU NEED TO EDIT IS IN THIS FILE (plus your photos).
//  Photo paths are relative to the /public folder.
//
//  PHOTO FOLDERS (replace the placeholder files, keep the names):
//    public/images/birthday/photo.jpeg            -> Happy Birthday card photo
//    public/images/memories/photo1..photo5.jpeg   -> MEMORIES clothesline
//    public/images/frame/photo7.jpeg              -> "CUTIE, IN FRAME" slideshow
//    public/images/collage/photo9..photo14.jpeg   -> "US in every universe" collage
//    public/audio/deema.mp3                      -> background music
// ==================================================================
const content = {
  name: 'achu',           // shown on the red ribbon of the birthday card
  passcode: '2006',           // any mix of 0-9, * and #. Boxes follow its length.

  music: { src: 'audio/deema.mp3', volume: 0.6 },

  // Set to true if you add your own character pictures in public/images/character/
  // (stand.png, sign.png, tumble.png, back.png, bust.png, cake.png)
  useCustomCharacterImages: false,

  password: { label: 'Enter a passcode' },
  wrong: { text: 'WRONG PASSCODE', button: 'TRY AGAIN' },

  // The three question pages. `to` = which page the button opens.
  questions: {
    see: {
      arc: 'I have made something for you',
      sub: 'Do you wanna see it?',
      pose: 'stand', face: 'happy',
      buttons: [{ label: 'YES', to: 'excited' }, { label: 'NO', to: 'angry' }],
    },
    angry: {
      arc: 'HOW DARE YOU!?',
      pose: 'tumble', face: 'angry',
      buttons: [{ label: 'TRY AGAIN', to: 'see' }],
    },
    excited: {
      arc: 'Are you really excited?',
      pose: 'back', face: 'happy',
      buttons: [{ label: 'YES', to: 'gifts' }, { label: 'YES', to: 'gifts' }],
    },
  },

  gifts: { title: 'Each gift has something for you..', cta: 'CLICK ON THE GIFTS' },

  birthday: {
    happy: 'HAPPY',
    word: 'Birthday',
    line: 'Happy birthday! Wishing you a little bit of happiness, love, laughter, and joy today always.',
    photo: 'images/birthday/photo.jpeg',
  },

  wish: { title: 'MAKE A WISH', side: 'i love you' },

  memories: {
    title: 'MEMORIES',
    photos: ['images/memories/photo1.jpeg', 'images/memories/photo2.jpeg', 'images/memories/photo3.jpeg', 'images/memories/photo4.jpeg', 'images/memories/photo5.jpeg'],
  },

  letter: {
    title: 'My fav person',
    greeting: 'Dear bestie,',
    body: [
      'Happy Birthday, Bestie!',
      "I honestly don't know how to put into words how grateful I am to have you in my life. Thank you for being my biggest supporter, my partner in crime, and the person I can always count on. Through all the laughs, random conversations, inside jokes, and even the tough days, you've made life so much better just by being a part of it.",
      "I hope this year brings you everything you've been wishing for: happiness, success, peace, good health, and countless reasons to smile. Never forget how amazing, kind, and loved you are. You deserve nothing but the very best.",
      'No matter where life takes us, I hope we always stay this close and keep making memories together. Thank you for being the wonderful person you are and for making my life brighter every single day.',
      'Have the happiest birthday, and enjoy every moment of your special day. I love you so much!',
    ],
    signoff: 'Love you',
  },

  frame: {
    title: 'CUTIE, IN FRAME',
    photos: ['images/frame/photo7.jpeg'],
    secondsPerPhoto: 2.2,
  },

  collage: {
    text: 'US in every universe',
    photos: ['images/collage/photo9.jpeg', 'images/collage/photo10.jpeg', 'images/collage/photo11.jpeg', 'images/collage/photo12.jpeg', 'images/collage/photo13.jpeg', 'images/collage/photo14.jpeg'],
    seconds: 4.5,
  },

  final: { text: "May you achieve everything you've been waiting for!" },

  // Pages that go back to the gifts by themselves (like the video). 0 = wait for the arrow button.
  autoReturnSeconds: { birthday: 6, wish: 7, memories: 7 },
}

export default content
