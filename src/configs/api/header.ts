export const HEADERS = {
  header: () => ({
    accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  }),
  authHeader: () => ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `${localStorage.getItem('token')}`,
  }),
}
