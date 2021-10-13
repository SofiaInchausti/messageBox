function sendMessage(message) {
    return function (dispatch) {
        dispatch({
            type: "MESSAGE",
            payload: message
        })
    }

}

function getMessages() {
    return function (dispatch) {
        dispatch({
            type: 'ALL_MESSSAGES'
        })
    }

}
//
function deleteMessages() {
    return function (dispatch) {
        dispatch({
            type: 'DELETE'

        })
    }
}

module.exports = {
    sendMessage,
    getMessages,
    deleteMessages
}