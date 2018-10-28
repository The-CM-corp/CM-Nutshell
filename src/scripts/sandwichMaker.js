export default Object.create(null, {
    placeOrder: {
        value: (breadType, meat, cheese) => {
            console.log(`Here's your ${meat} sandwich with ${cheese} on ${breadType}`)
            console.table({
                title: `${meat} sandwich`,
                meat: meat,
                cheese: cheese,
                bread: breadType
            })
        }
    }
})
