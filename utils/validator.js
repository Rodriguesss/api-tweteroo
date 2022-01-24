function checkIfParameterIsEmpty(params) {
    let result = false

    Array.isArray(params) 
    ? params.forEach(param => param === undefined || param === '' && (result = true))
    : params === undefined || params === '' && (result = true)

    return result
}

function multiplyByTen(page) {
    return page * 10
}

export {
    checkIfParameterIsEmpty,
    multiplyByTen
}
