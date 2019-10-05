export const allvids = videos => {
    return $.ajax({
        method: "get",
        url: "api/videos",
        data: {videos}
    });
};