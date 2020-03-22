export const asyncFindMovies = (title) => async dispatch => {
    const resp = await fetch(`https://videocdn.tv/api/movies?api_token=nYbiy0xMT0qFugB1vP7uoH1eYb69xKxW&query=${title}&limit=10`)
    const { data } = await resp.json()
    dispatch({ type: 'SEARCH_DATA', payload: data })
}