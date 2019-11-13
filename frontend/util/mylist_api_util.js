export const getMyLists = () => {
    return $.ajax({
        method: 'get',
        url: "api/mylists"
    })
}

export const createList = (videoId) => {
    return $.ajax({
        method: 'post',
        url: "api/mylists",
        data: { videoId }
    })
}

export const deleteMyList = (id) => {
    return $.ajax({
        method: 'delete',
        url: `api/mylists/${id}`
    })
}