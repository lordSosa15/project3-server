// image, name, details, price
// to run this file and save products to products collection, we use node db/seeds.js

const mongoose = require("mongoose");

const Product = require("../models/Product.model");

// this is the file where we establish connection with database
require("./index.js");

const products = [
  {
    image: [
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/headphones_c_1_ttluym.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/headphones_c_2_tho1i6.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/headphones_c_3_ihflwp.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/headphones_c_4_hfgbm6.webp",
    ],
    name: "boAt rockerz 451",
    details:
      "Set your mind ablaze with boAt Rockerz 451 — our slick headphones that offer immersive sound quality and add luxury to your sound. Propelled by crystal clear 40mm dynamic drivers, slip into an alternate HD immersive audio reality. The soft cornered matte black finish allows for a comfortable fit, propagated by plush foam in adaptive and adjustable design. Choose your mode, go wireless with Bluetooth V4.2 or connect an aux wire that doesn’t cause any drain on the 300mAh rechargeable lithium battery.",
    price: 49,
  },
  {
    image: [
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/speaker1_udgfjf.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/speaker2_eno510.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/speaker3_sjv6el.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/speaker4_vrej1m.webp",
    ],
    name: "boAt Party Pal 50",
    details:
      "Immerse in the 20W RMS Stereo Sounds with the powerful Party Pal 50 bluetooth speaker. Set the vibes of the party just right with the RGB LEDs. Keep worries at bay and party poolside with IPX5 resistant! Get, set, grooving as Party Pal 50 comes with a powerful playback of 4.5 Hrs. Access Instant Voice Assistant and enjoy the multiple connectivity modes- USB, AUX, Bluetooth v5.1, and FM. Coming with Type-C interface, Party Pal 50 is all you need to set the mood just about right.",
    price: 55,
  },
  {
    image: [
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/headphones_a_1_ea7c7b.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/headphones_a_2_z8zsbc.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/headphones_a_3_hq2h2i.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/headphones_a_4_oqbplo.webp",
    ],
    name: "boAt Immortal 1000D",
    details:
      "The game begins here. With Immortal 100D gaming headphones, don't just play the game - feel it, live it, and own it. Level up your audio game with 7.1 Channel Surround Sound and Dolby Atmos that unleashes the winning beast inside you. Equipped with 50mm driver, get a powerful 360° gaming experience like no other. Now, you can conquer every game with a sounds that provides position accuracy and abstracts. Your everyday gaming is now double the fun with its RGB LED lights. Its lightweight and ergonomics build ensure you have a comfortable blender with your friends. Don't look further, level up with Immortal 1000D headphones",
    price: 99,
  },
  {
    image: [
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465987/earphones_a_1_ftbism.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465987/earphones_a_2_pgeyqv.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465987/earphones_a_3_jsllyy.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465987/earphones_a_4_fpqcyd.webp",
    ],
    name: "boAt bassHeads 242",
    details:
      "Get ready to redefine fitness fashion and utility with the wired headphone boAt Bassheads 242, it’s time to get your sport on. It carries ear hooks that are crafted from silicon to maximize comfort and a secure fit that allows you to maximize your workouts. Coated with IPX 4 sweat and water protection, the Bassheads 242 emphasizes on all-around ability with 10mm drivers that reproduce a quality sound. Move around freely with the superior coated cable that reaches comfortably from your pocket till your ears. Connect to a number of devices with ease using the 3.5mm straight jack, because there’s no stress, only sweetness when you’re riding the waves on this boAt. You can tune in and out with the pause/play button that can also take calls (With In-line Mic.) and control volume in-between exercise reputations.",
    price: 34,
  },
  {
    image: [
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/watch_1_c3zkt7.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/watch_2_ijc6rg.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/watch_3_kujlp8.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465989/watch_4_gzqlfh.webp",
    ],
    name: "Watch Blaze",
    details: `Whatever you need to hustle to your goal -- now do it Faster with Blaze. It's powered by Apollo 3 Blue Plus high-performance processor that makes its interface 25% faster. Navigate through your world effortlessly with its 1.75" HD display-- the largest by boAt. We understand your hustle, that's why its Fast Charge technology gives 24HRS of backup with just 10MINS of charge. Keep your fitness in check with heart rate and SpO2 monitoring, daily activity tracker, and 14 sport modes. Smart Watch Blaze -- for trailblazers like you`,
    price: 69,
  },
  {
    image: [
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/earphones_b_1_lyf3qq.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/earphones_b_2_iyhskf.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/earphones_b_3_kn7ykn.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/earphones_b_4_whsptz.webp",
    ],
    name: "boAt Airdopes 281 Pro",
    details:
      "Life seems better if the right music is heard the right way. Plug into a blissful listening experience with boAt Airdopes 281 Pro - a truly wireless earbuds powered by boAt Signature Sound. Equipped with ENx™ Technology and four mics, it makes your everyday calling experience hit the roof. Win matches while playing multiplayer games with your friends through its optimum noise cancellation and crystal-clear audio input. So, where are you? Because your perfect audio match is right here - boAt Airdopes 281.",
    price: 49,
  },
  {
    image: [
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/headphones_b_1_tpqkth.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/headphones_b_2_i7mggf.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/headphones_b_3_ycswuw.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/headphones_b_4_pt6yub.webp",
    ],
    name: "boAt BassHeads 900",
    details:
      "The boAt BassHeads 900 wired headphones come with an amalgamation of style with performance. Now get ready to enjoy your favourite tunes with Super Extra Bass and crystal-clear sound performance with Bass Heads 900 wired headphones. Experience powerful, dynamic sound with punchy bass and clear, natural vocals with the responsive 40mm Neodymium drivers, the drivers effectively reproduce sound equally across the whole audio band. The ergonomic design creates passive attenuation of ambient noise while providing maximum comfort for hours of listening pleasure in a snuggly fit without fatigue. The sleek, lightweight, and compact design makes portability extremely convenient. The foldable and compact Feather Light Headphone weighs even less than 150 g, moreover, the ear cups can be folded for easy, convenient storage.",
    price: 239,
  },
  {
    image: [
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/earphones_c_1_ezkpci.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/earphones_c_2_yq828g.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/earphones_c_3_uxdth1.webp",
      "https://res.cloudinary.com/dro7gwdx3/image/upload/v1654465988/earphones_c_4_bbu0dk.webp",
    ],
    name: "boAt Rockerz 333",
    details:
      "When your taste in music is so unique, why should your audio wear be any different? Speak your unique style with Rockerz 333 - a bold and powerful wireless earphones for the part of you that wants more. More of sound, more of style, and more of power. Immerse into your jam with boAt Signature Sound and 30 HRS of non stop playback. Let nothing limit your hustle with Dual Pairing that lets you connect two devices at once. Don’t hold back, choose your vibe with Rockerz 333.",
    price: 79,
  },
];

Product.create(products)
  .then((productFromDB) => {
    // all went good

    productFromDB.forEach((oneProduct) => {
      console.log(oneProduct.name);
    });

    mongoose.connection.close();
  })
  .catch((err) => console.log(`Error while seeding the database: ${err}`)); // something bad happened
