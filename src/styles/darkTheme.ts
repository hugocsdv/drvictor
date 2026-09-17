const darkTheme = {
  colors: {
    primary: "#C89B73",

    secondary: "#0B1320",

    complement: "#C89B7320",

    background: "#07111F",

    surface: "#0F1B2D",

    text: "#F8FAFC",

    textSecondary: "#94A3B8",

    border: "#243244",

    success: "#22C55E",

    danger: "#EF4444",
  },


  fonts: {
    heading: "Verdana, sans-serif",

    body: "Verdana, sans-serif",
  },


  spacing: {
    xs: "4px",

    sm: "8px",

    md: "16px",

    lg: "24px",

    xl: "clamp(24px,4vw,32px)",

    xxl: "clamp(32px,6vw,48px)",

    xxxl: "clamp(48px,8vw,64px)",
  },


  zIndex: {
    header:1000,

    modal:2000,

    tooltip:3000,
  },


  fontSize: {
    xs:"12px",

    sm:"14px",

    md:"16px",

    lg:"18px",

    xl:"20px",

    h1:"clamp(36px,7vw,72px)",

    h2:"clamp(32px,5vw,56px)",

    h3:"clamp(26px,4vw,40px)",

    display:"clamp(40px,8vw,88px)",
  },


  radius:{
    sm:"8px",

    md:"16px",

    lg:"24px",

    pill:"999px",
  },


  shadow:{
    sm:"0 8px 20px rgba(0,0,0,.25)",

    md:"0 15px 35px rgba(0,0,0,.35)",

    lg:"0 25px 70px rgba(0,0,0,.45)",
  },


  transition:{
    default:".35s ease",
  },


  breakpoints:{
    mobile:"480px",

    tablet:"768px",

    desktop:"1400px",
  },
};


export default darkTheme;