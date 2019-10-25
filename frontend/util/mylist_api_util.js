export const getMyLists = () => {
    debugger
    return $.ajax({
        method: 'get',
        url: "api/mylists"
    })
}

export const updateMyList = (mylistId) => {
    return $.ajax({
        method: 'post',
        url: "api/mylists",
        data: { mylistId }
    })
}

export const deleteMyList = (id) => {
    return $.ajax({
        method: 'delete',
        url: `api/mylists/${id}`
    })
}