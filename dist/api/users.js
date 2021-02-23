"use strict";
const usersGet = () => {
    return 'apple!';
};
const usersPost = (params) => {
    return `Banana! and ${params.fruit}`;
};
const usersPut = () => {
    return 'Cherry!';
};
const usersDelete = () => {
    return 'Donut!';
};
module.exports = {
    get: usersGet,
    post: usersPost,
    put: usersPut,
    delete: usersDelete,
};
