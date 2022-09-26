import {
  createRef,
  // CSSProperties,
  // ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import htmlIcon from "../../assets/icons8-html-5.svg";
import cssIcon from "../../assets/icons8-css3.svg";
import tailwindIcon from "../../assets/tailwind-css.svg";
import jsIcon from "../../assets/icons8-javascript.svg";
import sassIcon from "../../assets/icons8-sass.svg";
import nextIcon from "../../assets/nextjs.svg";
import reduxIcon from "../../assets/icons8-redux.svg";
import materialIcon from "../../assets/icons8-material-ui.svg";
import reactIcon from "../../assets/icons8-react.svg";
import typescript from "../../assets/typescript-svgrepo-com.svg";
import photoshopIcon from "../../assets/photoshop.svg";
import github from "../../assets/bxl-github.svg";
import antD from '../../assets/ant-design-svgrepo-com.svg'

const defaultStyles = {
  getContainer: (radius, fullWidth, fullHeight) => ({
    position: "relative",
    width: fullWidth ? "100%" : `${2 * radius}px`,
    maxWidth: "100%",
    minHeight: `${2 * radius}px`,
    height: fullHeight ? "100%" : `${2 * radius}px`,
    touchAction: "none",
  }),
};

const { innerWidth } = window;

const computeInitialPosition = (index, textsLength, size) => {
  const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
  const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
  return {
    x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
    y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
    z: (size * Math.cos(phi)) / 2,
  };
};

const updateItemPosition = (item, sc, depth) => {
  const newItem = { ...item, scale: "" };
  const rx1 = item.x;
  const ry1 = item.y * sc[1] + item.z * -sc[0];
  const rz1 = item.y * sc[0] + item.z * sc[1];

  const rx2 = rx1 * sc[3] + rz1 * sc[2];
  const ry2 = ry1;
  const rz2 = rz1 * sc[3] - rx1 * sc[2];

  const per = (2 * depth) / (2 * depth + rz2); // todo
  newItem.x = rx2;
  newItem.y = ry2;
  newItem.z = rz2;

  if (newItem.x === item.x && newItem.y === item.y && newItem.z === item.z) {
    return item;
  }

  newItem.scale = per.toFixed(3);
  let alpha = per * per - 0.25;
  alpha = parseFloat((alpha > 1 ? 1 : alpha).toFixed(3));

  const itemEl = newItem.ref.current;
  // @ts-ignore
  const left = (newItem.x - itemEl.offsetWidth / 2).toFixed(2);
  // @ts-ignore
  const top = (newItem.y - itemEl.offsetHeight / 2).toFixed(2);
  const transform = `translate3d(${left}px, ${top}px, 0) scale(${newItem.scale})`;

  // @ts-ignore
  itemEl.style.WebkitTransform = transform;
  // @ts-ignore
  itemEl.style.MozTransform = transform;
  // @ts-ignore
  itemEl.style.OTransform = transform;
  // @ts-ignore
  itemEl.style.transform = transform;
  // @ts-ignore
  itemEl.style.filter = `grayscale(${(alpha - 1) * -8}) blur(${
    (alpha - 1) * -5 > 1 ? Math.floor((alpha - 1) * -8) : 0
  }px)`;
  // itemEl.style.zIndex = Math.floor(alpha * 1000);
  // @ts-ignore
  itemEl.style.opacity = alpha;

  return newItem;
};

const createItem = (text, index, textsLength, size, itemRef) => {
  const transformOrigin = "50% 50%";
  const transform = "translate3d(-50%, -50%, 0) scale(1)";
  const itemStyles = {
    willChange: "transform, opacity, filter",
    position: "absolute",
    top: "50%",
    left: "50%",
    // zIndex: index + 1,
    filter: "alpha(opacity=0)",
    opacity: 0,
    WebkitTransformOrigin: transformOrigin,
    MozTransformOrigin: transformOrigin,
    OTransformOrigin: transformOrigin,
    transformOrigin: transformOrigin,
    WebkitTransform: transform,
    MozTransform: transform,
    OTransform: transform,
    transform: transform,
  };
  // @ts-ignore
  const itemEl = (
    <span ref={itemRef} key={index} style={itemStyles}>
      {text}
    </span>
  );

  return {
    ref: itemRef,
    el: itemEl,
    ...computeInitialPosition(index, textsLength, size),
  };
};

const defaultState = {
  texts: [
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={htmlIcon} alt={""} />
      HTML
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={reduxIcon} alt={""} />
      Redux thunk
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={cssIcon} alt={""} />
      Css
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={sassIcon} alt={""} />
      Sass/ Scss
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={jsIcon} alt={""} />
      JavaScript
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={typescript} alt={""} />
      Typescript
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img
        width={25}
        src={"https://cdn.svgporn.com/logos/figma.svg"}
        alt={""}
      />
      Figma
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={materialIcon} alt={""} />
      MUI
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={tailwindIcon} alt={""} />
      TailwindCss
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={reactIcon} alt={""} />
      React
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={photoshopIcon} alt={""} />
      Photoshop
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={github} alt={""} className="bg-white rounded-full" />
      Github
    </div>,
    <div className="flex flex-col text-center text-sm items-center">
      <img width={40} src={antD} alt={""}  />
      Ant Design
    </div>,
  ],
  maxSpeed: 5,
  initialSpeed: 5,
  initialDirection: 135,
  keepRollingAfterMouseOut: false,
  useContainerInlineStyles: true,
  fullWidth: false,
  fullHeight: false,
};

export default function TagSphere(props) {
  const {
    maxSpeed,
    initialSpeed,
    texts,
    initialDirection,
    keepRollingAfterMouseOut,
    fullHeight,
    fullWidth,
    style,
    useContainerInlineStyles,
  } = { ...defaultState, ...props };

  let radius = props.radius;

  const resize = () => {
    if(innerWidth < 500 ) return 12
    else if (innerWidth < 800) return 20
    else return 22
  };

  if (!radius) {
    radius = texts.length * resize();
  }

  const depth = 2 * radius;
  const size = 1.5 * radius;
  const itemHooks = texts.map(() => createRef());
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(() =>
      texts.map((text, index) =>
        createItem(text, index, texts.length, size, itemHooks[index])
      )
    );
  }, [texts]);

  const containerRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);
  const [lessSpeed, setLessSpeed] = useState(maxSpeed);
  const [active, setActive] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    // @ts-ignore
    const rect = containerRef.current.getBoundingClientRect();

    setMouseX(() => (e.clientX - (rect.left + rect.width / 2)) / 5);
    setMouseY(() => (e.clientY - (rect.top + rect.height / 2)) / 5);
  };

  const checkTouchCoordinates = (e) => {
    // @ts-ignore
    const rect = containerRef.current.getBoundingClientRect();
    const touchX = e.targetTouches[0].clientX;
    const touchY = e.targetTouches[0].clientY;

    if (
      touchX > rect.left &&
      touchX < rect.right &&
      touchY < rect.bottom &&
      touchY > rect.top
    ) {
      return true;
    }

    return false;
  };

  const next = () => {
    setItems((items) => {
      if (lessSpeed == 0) return items;

      let a, b;
      if (!keepRollingAfterMouseOut && !active && !firstRender) {
        setLessSpeed((lessSpeedCurrent) => {
          const lessConstant = lessSpeed * (maxSpeed / 200);

          return lessSpeedCurrent - lessConstant > 0.01
            ? lessSpeedCurrent - lessConstant
            : 0;
        });

        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * lessSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * lessSpeed;

        /*setMouseX(
                                                                                                                Math.abs(mouseX - mouseX0) < 1 ? mouseX0 : (mouseX + mouseX0) / 2,
                                                                                                              );
                                                                                                              setMouseY(
                                                                                                                Math.abs(mouseY - mouseY0) < 1 ? mouseY0 : (mouseY + mouseY0) / 2,
                                                                                                              );*/
      } else if (!active && !firstRender && keepRollingAfterMouseOut) {
        a =
          -(Math.min(Math.max(-mouseY, -size), size) / radius) *
          (maxSpeed * 0.5);
        b =
          (Math.min(Math.max(-mouseX, -size), size) / radius) *
          (maxSpeed * 0.5);
      } else {
        a = -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeed;
        b = (Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeed;
      }

      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return items; // pause

      // calculate offset
      const l = Math.PI / 180;
      const sc = [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l),
      ];

      return items.map((item) => updateItemPosition(item, sc, depth));
    });
  };

  const init = () => {
    setActive(false);
    const mouseX0 = initialSpeed * Math.sin(initialDirection * (Math.PI / 180));
    const mouseY0 =
      -initialSpeed * Math.cos(initialDirection * (Math.PI / 180));

    setMouseX(() => mouseX0);
    setMouseY(() => mouseY0);

    next();
  };

  useEffect(() => {
    init();
    setItems((items) => [...items]);
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(next);
    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, lessSpeed, active, items, props.radius]);

  return (
    <div
      ref={containerRef}
      onMouseOver={() => {
        setActive(() => true);
        setFirstRender(() => false);
        setLessSpeed(() => maxSpeed);
      }}
      onMouseOut={() => {
        setActive(() => false);
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={() => {
        setActive(true);
        setLessSpeed(() => maxSpeed);
        setFirstRender(() => false);
      }}
      onTouchMove={(e) => {
        if (checkTouchCoordinates(e)) {
          handleMouseMove(e.targetTouches[0]);
        } else {
          setActive(false);
        }
      }}
      style={
        useContainerInlineStyles
          ? style || defaultStyles.getContainer(radius, fullWidth, fullHeight)
          : undefined
      }
    >
      {items.map((item) => item.el)}
    </div>
  );
}
