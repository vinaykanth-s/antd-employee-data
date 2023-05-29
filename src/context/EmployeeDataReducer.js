import employeeData from '../employee_data.json'

export const initialState = {
  displayEdit: false,
  displayModalEdit: false,
  currentEmpData: {},
  employeeData: employeeData.data,
}

export const actions = {
  SET_EDIT: 'SET_EDIT',
  SET_MODAL_EDIT: 'SET_MODAL_EDIT',
  RESET_STATE: 'RESET_STATE',
  SET_EMPLOYEE_DATA: 'SET_EMPLOYEE_DATA',
}

const employeeDataReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_EDIT':
      return {
        ...state,
        currentEmpData: payload.currentEmployeeData,
        displayEdit: true,
        displayModalEdit: false,
      }
    case 'SET_MODAL_EDIT':
      return {
        ...state,
        displayModalEdit: true,
        displayEdit: false,
        currentEmpData: payload.currentEmployeeData,
      }
    case 'RESET_STATE':
      return {
        ...state,
        displayEdit: false,
        displayModalEdit: false,
        currentEmpData: {},
      }
    case 'SAVE_EDIT_DATA': {
      const updatedData = state.employeeData?.map((element) => {
        if (element.id === payload.empRecord.id) {
          return payload.empRecord
        } else {
          return element
        }
      })
      return { ...state, employeeData: updatedData }
    }
    default:
      return state
  }
}

export default employeeDataReducer
