export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
}
export const stagger = {
    initial: {},
    animate: {
        transiotion: {
            staggerChildren: 0.1,
        },
    },
}
