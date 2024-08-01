export const sleep = (time: number = 1) => {
    return new Promise((resolve) => {
        setTimeout(resolve, time * 1000)
    })
}