
export const getMoviesByFeature = async (feature: string) => {
    try {
        const url = `https://api.themoviedb.org/3/movie/${feature}?language=en-US&page=1&sort_by=popularity.desc`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDUyOGIwZTA4N2Y1YmJlYjE5MjhmYzc4MTk5YzAwNyIsIm5iZiI6MTcyNzgyNTA3MS4xNTM5OTk4LCJzdWIiOiI2NmZjODRhZmJhZTM4M2MxMGNkMDU1OGUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.i-qR82Nxm6NZvibbkOQrN6iWDy4nqREtHQOkabkdSvQ'
            }
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching movies by feature:", error);
        throw error;
    }
}
