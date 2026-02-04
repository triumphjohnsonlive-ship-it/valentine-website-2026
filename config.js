const config = {
  // =========================
  // BASIC INFORMATION
  // =========================
  valentineName: "Kemi",
  pageTitle: "Kemi, will you be my Valentine? ❤️",

  // =========================
  // FLOATING BACKGROUND
  // =========================
  floatingEmojis: {
    hearts: ["❤️", "💖", "💗", "💓"],
    bears: ["🧸"]
  },

  // =========================
  // QUESTIONS FLOW
  // =========================
  questions: {
    first: {
      text: "Kemi, do you know how much I care about you?",
      yesBtn: "I do 😌",
      noBtn: "Tell me",
      secretAnswer: "I don’t just care about you. I choose you. Every day. ❤️"
    },

    second: {
      text: "So… how much do you love me?",
      startText: "This much 👀",
      nextBtn: "Keep going ❤️"
    },

    third: {
      text: "Will you be my Valentine, Kemi?",
      yesBtn: "Yes ❤️",
      noBtn: "Try again"
    }
  },

  // =========================
  // LOVE METER MESSAGES
  // =========================
  loveMessages: {
    extreme: "Okay wow. I feel very loved right now 🥰",
    high: "This feels serious… I like it 😌",
    normal: "That’s already a lot ❤️"
  },

  // =========================
  // FINAL CELEBRATION
  // =========================
  celebration: {
    title: "Yay 🥹❤️",
    message: "Now come here. Your Valentine is waiting.",
    emojis: "❤️🤍✨🥰💋"
  },

  // =========================
  // COLORS (SOFT + ELEGANT)
  // =========================
  colors: {
    backgroundStart: "#f6d1d1",
    backgroundEnd: "#fbeaea",
    buttonBackground: "#d6336c",
    buttonHover: "#e64980",
    textColor: "#7a1f3d"
  },

  // =========================
  // ANIMATIONS (SUBTLE)
  // =========================
  animations: {
    floatDuration: "18s",
    floatDistance: "40px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.4
  },

  // =========================
  // MUSIC
  // =========================
  music: {
    enabled: true,
    autoplay: true,
    musicUrl: "PASTE_YOUR_CLOUDINARY_MP3_URL_HERE",
    startText: "🎵 Play our song",
    stopText: "🔇 Pause",
    volume: 0.4
  }
};

export default config;
