export const fetchGenre = id => {
    return $.ajax({
        method: "get",
        // url: `api/videos${id}`,
        url: `api/genres/${id}`,
        // data: {id}
    })
}