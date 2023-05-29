
export default (req, resp) => {
    return resp.status(404).json({error: 'Not Found'})
}