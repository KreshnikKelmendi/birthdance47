import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeartSvg = () => {
     const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
        });
    return (
        <div className='absolute top-0 right-6 lg:left-[470px] opacity-80'>
            <svg ref={ref} className='' width="80" height="75" viewBox="0 0 88 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }} d="M41.4854 23.6958C45.9977 17.2803 59.3742 -1.73576 66.6241 13.1436C68.3283 16.6411 65.8841 22.1964 64.4747 25.4135C60.623 34.2055 56.3545 41.8959 50.7179 49.6394C47.1366 54.5593 42.0677 59.8516 40.2001 65.5936" stroke="#e31b23" stroke-width="4" stroke-linecap="round" />
                <motion.path initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut', delay: 1.5 }} d="M40.4245 23.7035C36.2461 19.5855 29.2856 17.8783 23.6455 17.2273C19.5599 16.7558 17.8465 17.2328 17.0411 21.7655C16.7705 25.3949 17.4619 28.1728 18.803 31.8146C22.7089 42.4211 31.9403 50.2045 36.5677 60.3766C38.2143 63.9961 40.6522 64.368 40.094 69.0784" stroke="#e31b23" stroke-width="4" stroke-linecap="round" />
            </svg>

        </div>
    )
}

export default HeartSvg