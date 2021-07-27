

// const urlApiKey = 'https://api.themoviedb.org/3/discover/movie?api_key=f6137efa514fa2ea34c8d2237d45116d';
const url = 'https://api.themoviedb.org/3';
export const get = (path) => {
    return (fetch(url+path, {
        header: {
            Authorization: `Bearer f6137efa514fa2ea34c8d2237d45116d`,
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then(result => result.json()));
}