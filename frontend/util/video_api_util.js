export const allvids = () => {
    return $.ajax({
        method: "get",
        url: "api/videos",
        // data: {videos}
    });
};

export const fetchVideo = id => {
    return $.ajax ({
        method: "get",
        // url: `api/videos${id}`,
        url: `api/videos/${id}`,
        // data: {id}
    })
}