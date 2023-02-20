 const DELETE = (anyArray = [], idOfClickedItem = 0) => {
    return anyArray.filter((item) => {
        return item.id !== idOfClickedItem
    })
}
 const universalFilter = (anyArrayInUseStateAsInitialArray = [], comparisionBoolTrueOrFalse = '') => {
    return anyArrayInUseStateAsInitialArray.filter((item) => {
           // eslint-disable-next-line
        return eval("item." + comparisionBoolTrueOrFalse)
    })
}
module.exports = {
    universalFilter,
    DELETE,
}