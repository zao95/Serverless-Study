const usersGet = () => {
    return 'apple!'
}

interface paramsType {
    fruit: string
}
const usersPost = (params: paramsType) => {
    return `Banana! and ${params.fruit}`
}

const usersPut = () => {
    return 'Cherry!'
}

const usersDelete = () => {
    return 'Donut!'
}


module.exports = {
    get: usersGet,
    post: usersPost,
    put: usersPut,
    delete: usersDelete,
}