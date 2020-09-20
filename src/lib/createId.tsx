// let id = 0
// const createId = ()=>{
//  id+=1
//   return id
// }
//
// export default createId

let id = parseInt(window.localStorage.getItem('idMax') || '0')
const createId = ()=>{
 id+=1
 window.localStorage.setItem('idMax',JSON.stringify(id))
 return id
}

export default createId