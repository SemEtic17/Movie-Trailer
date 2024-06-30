import { delay } from "framer-motion";

export const slideDownNav = {
    hidden: {
      y: -250
    },
    show: {
      y: 0,
      transition: {
        delay: 2, 
        duration: 0.8, 
        type: "tween",
        when: "beforeChildren",
      }
    },
  };
  
export const slideInBrandName = {
    hidden: {
        x: -250
    },
    show: {
         x: 0,
    transition: {
        duration: 0.2, type: "spring", stiffness: "60"
    },
    }
}
  
export const slideInForm = {
    hidden: {
        x: 950
    },
    show: {
        x: 0,
    transition: {
        type: "spring",
        stiffness: "60",
        duration: 0.5,
        ease: "easeOut",
        damping: 11,
    },
    },
};

export const fadeInVarients = {
  hidden: {
    opacity: 0,
    y: 100
  },
  show: index => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * index
    }
  })
}

export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: "60",
          duration: 0.5,
          delay: delay,
        },
      },
    };
  };

  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };