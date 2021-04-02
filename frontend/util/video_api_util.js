const allVideosCache = {allVideos: null};

export const allvids = () => {
    if (allVideosCache.allVideos !== null){
        return allVideosCache.allVideos;
    }
    else{
        const allVideos = $.ajax({
            method: "get",
            url: "api/videos",
        });
        allVideosCache.allVideos = allVideos;
        return allVideos;
    }
};

export const fetchVideo = id => {
    return $.ajax ({
        method: "get",
        url: `api/videos/${id}`,
    })
}