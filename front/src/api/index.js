import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://localhost:5000',
// })

const url = 'http://localhost:5000';

// export const getTodos = async ()=> await api.get('/')
// export const getCustomList = (payload) => api.post(`/customList`)

const data = [{
    name: "personal",
    items: [{
        name: "car", status: false
        }, {
        name: "iPad", status: false
        }]
    }, {
    name: "work",
    items: [{
        name: "promotion", status: false
        }, {
        name: "salary", status: false
        }]
    }]

export const getTodos = async(customList)=>{
    // let changeableUrl = url;
    // if (customList){
    //     changeableUrl = `${url}/${customList}`
    // }
    try{
        // const {data} = await api.get('/')
        // const {data} = await axios.get(changeableUrl)
        // console.log(data)
        return data;
    }
    catch (error) {
        // throw new Error(error)
    }
}

// export const addCustomList = async(name)=>{
//     try{
//         // const customListName = {
//         //     name: payload
//         // }
//         const saveCustomList = await axios.post(url + '/customList', name)
//         return saveCustomList
//     } catch(error){
//         throw new Error(error)
//     }
// }

// export const getCustomList = async()=>{
//     try{
//         const todos = await axios.get(`${url}/customList`)
//         console.log(todos)
//         return todos
//     }
//     catch (error) {
//     throw new Error(error)
//     }
// }

// export const getCustomTodo = async()=>{
//     try{
//         const customTodo = await axios.get(url)
//     }
// }

