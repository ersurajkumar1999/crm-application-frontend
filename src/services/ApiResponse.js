export const successResponse = (response) => {
    return { status: true, data: response?.data ?? null }
}
export const errorResponse = () => {

}