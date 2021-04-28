import axios from 'axios'

export const poster = async (
  url,
  data,
  successCallback,
  errorCallback,
  loader,
  finallyCallback
) => {
  loader(true)
  await axios
    .post(url, data)
    .then((res) => {
      successCallback(res.data.message)
    })
    .catch((err) => {
      if (err.response) {
        errorCallback(err.response.data.error)
      } else {
        errorCallback('Something wrong happened')
      }
      console.log(err)
      loader(false)
    })
    .finally(() => {
      loader(false)
      finallyCallback()
    })
}

// const handleSubmit = async (e) => {
//     e.preventDefault()

//     setPostLoading(true)
//     await axios
//       .post('http://localhost:5000/students/add', {
//         name,
//         address,
//         email,
//         contact: phone,
//         moduleID: selectedModule,
//       })
//       .then((res) => {
//         setPostError(null)
//         setPostLoading(false)
//       })
//       .catch((err) => {
//         if (err.response) {
//           setPostError(err.response.data.error)
//           console.log('this has response')
//         } else {
//           setPostError('Something wrong happened')
//         }
//         console.log('this excutes at last in catch')
//         setPostLoading(false)
//       })
//       .finally(() => {
//         setPostLoading(false)
//       })
//   }
