type PlayActionType = {
  type: 'playAction'
  payload: boolean
}

export default function playActionReducer(state: boolean, action: PlayActionType) {
  switch (action.type) {
    case 'playAction': {
      return (state = !state)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
