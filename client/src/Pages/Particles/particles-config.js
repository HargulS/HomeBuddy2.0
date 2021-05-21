
// import house from "../../assets/images/house.png"
const particlesConfig=
{
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 580.7928075194122
      }
    },
    color: {
      value: "#FFFFFF"
    },
    
    shape: {
      type: ["image"],
      stroke: {
        width: 0,
        color: "#52616b"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src:
        "https://www.freepnglogos.com/uploads/dollar-sign-png/dollar-sign-clip-art-clkerm-vector-clip-art-online-11.png",
        // "https://www.freepnglogos.com/uploads/dollar-sign-png/dollar-sign-index-content-uploads-10.png",
        // "https://www.freepnglogos.com/uploads/money-png/sack-dollar-money-31.png",
        width: 100,
        height: 100,
        color: "#52616b"
      },
    },
    
    opacity: {
      value: .8,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 9.086636697997551,
      random: true,
      anim: {
        enable: false,
        speed: 0,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 750,
      color: "#007aff",
      
      opacity: 1,
      width: .8
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 700,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
  
};
export default particlesConfig