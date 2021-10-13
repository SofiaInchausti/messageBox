const initialState = {
    messages: [],
}

export default function reducer(state =initialState, action) {
    switch (action.type) {
        case 'MESSAGE':
            if (!window.localStorage.getItem('message')) {
                console.log(action.payload)
                window.localStorage.setItem('message', JSON.stringify(state.messages.concat(action.payload)))
                let message = state.messages.concat(JSON.parse(window.localStorage.getItem("message")))
                console.log(state.messages,'asi guardo msj')
                return {
                    messages: message
                }
            }
            if(window.localStorage.getItem('message')){
                console.log(state.messages,'estado')
                let localMessages =state.messages?.concat(action.payload)
                window.localStorage.setItem('message', JSON.stringify(JSON.parse(window.localStorage.getItem("message")).concat(action.payload)));
                return {
                    messages: localMessages
                }
            }
            case 'ALL_MESSSAGES':
                return {
                    messages: JSON.parse(window.localStorage.getItem("message"))
                }
                // case 'DELETE':
                //     window.localStorage.removeItem('message')
                //     return {
                //         messages: []
                //     }
                    default:
                        return state;
    }

}