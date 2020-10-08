export const increment = (num = 1) => {
  return {
    type: 'increment',
    num,
  }
}
export const decrement = (num = 1) => {
  return {
    type: 'decrement',
    num,
  }
}

export const addUser = () => {
  return {
    type: 'addUser'
  }
}
