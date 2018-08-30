/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Redux
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
export const ACTION_TYPES = {
  SET_LOCALE: 'SET_LOCALE',
}

export const initialState = {
  locale: localStorage.getItem('locale'),
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
      }

    default:
      return state
  }
}

export default reducer


export const actionSetLocale = (locale) => ({
  type: ACTION_TYPES.SET_LOCALE,
  locale,
})
