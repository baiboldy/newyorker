export const asyncGetMovie = () => async dispatch => {
    const resp = await fetch('https://videocdn.tv/api/movies?api_token=nYbiy0xMT0qFugB1vP7uoH1eYb69xKxW&year=2020&limit=15')
    const { data } = await resp.json()
    dispatch({ type: 'FETCH_DATA', payload: data })
}