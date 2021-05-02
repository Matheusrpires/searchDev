import axios from 'axios';

// const user = 'https://api.github.com/users/Matheusrpires'
const user = 'https://api.github.com/users/DanielHe4rt'

// const userRepo = 'https://api.github.com/users/Matheusrpires/repos'
const userRepo = 'https://api.github.com/users/DanielHe4rt/repos'

export const fetchUserData = async () => {
  try {
    const { data } = await axios.get(user)
    // console.log("index api" , data)
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const fetchRepoData = async () => {
  try {
    const {data} = await axios.get(userRepo)
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error)
  }
}