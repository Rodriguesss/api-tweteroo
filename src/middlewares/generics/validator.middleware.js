function RequestBodyValidator(params) {
    let result = false

    Array.isArray(params) 
    ? params.forEach(param => param === undefined || param === '' && (result = true))
    : params === undefined || params === '' && (result = true)

    return result
}

function PageValidator(page) {
    return parseInt(`${page}0`)
}

export {
    RequestBodyValidator,
    PageValidator
}
