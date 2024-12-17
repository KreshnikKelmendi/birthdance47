import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Svg = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className="">
            <motion.svg
                ref={ref}
                className="lg:w-[328px] w-[190px] lg:h-[155px] absolute top-16 lg:top-2 2xl:top-36 left-[-10px] lg:left-[-2vh] 2xl:left-[10vh]"
                viewBox="0 0 388 155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* First path (stroke animation) */}
                <motion.path
                    d="M3.04372 60.2185C1.88294 31.824 23.9377 9.0285 57.0199 3.82951C68.7245 1.96321 131.6 3.8293 181.514 3.82951C226.156 3.8297 339.261 6.61603 364.046 15.827C389.874 25.4254 386.391 77.4152 381.748 94.6118C378.034 108.369 342.862 108.876 325.741 107.409C325.064 108.342 324.116 114.288 325.741 130.605C327.2 145.259 332.358 150.687 335.496 151.931C335.84 152.028 336.168 152.118 336.478 152.201C336.182 152.16 335.852 152.073 335.496 151.931C328.628 150.005 315.168 145.382 309.2 140.203C302.931 134.764 294.787 117.941 291.498 110.209H247.388C216.047 110.209 150.173 114.208 75.5926 110.209C1.01243 106.21 4.2045 88.613 3.04372 60.2185Z"
                    fill="none"
                    stroke="#FADEEA"
                    strokeWidth="5"
                    strokeDasharray="1200"
                    strokeDashoffset="1200"
                    animate={inView ? { strokeDashoffset: 0 } : {}}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Second path (background fill, appearing after the stroke animation) */}
                <motion.path
                    d="M57.0199 3.82951C23.9377 9.0285 1.88294 31.824 3.04372 60.2185C4.2045 88.613 1.01243 106.21 75.5926 110.209C150.173 114.208 216.047 110.209 247.388 110.209C272.461 110.209 287.242 110.209 291.498 110.209C294.787 117.941 302.931 134.764 309.2 140.203C315.468 145.642 329.997 150.468 336.478 152.201C333.576 151.801 327.366 146.922 325.741 130.605C324.116 114.288 325.064 108.343 325.741 107.409C342.862 108.876 378.034 108.369 381.748 94.6118C386.391 77.4152 389.874 25.4254 364.046 15.827C339.261 6.61603 226.156 3.8297 181.514 3.82951C131.6 3.8293 68.7245 1.96321 57.0199 3.82951Z"
                    fill="#FFFFFF"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 2 }}
                />

                {/* Text Animation Inside SVG */}
                <motion.text
                    className="font-custom tracking-[3px]"
                    x="50%"
                    y="39%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="black"
                    fontSize="24"
                    fontWeight="bold"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    I love Youuuuuuu
                </motion.text>
            </motion.svg>
        </div>
    );
};

export default Svg;
