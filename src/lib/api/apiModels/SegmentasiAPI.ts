import api from "../core/axiosInstance"

export async function uploudImage(file : File) {
    const formData = new FormData()
    formData.append("file", file)

    const respond = await api.post("", formData, {
        headers : {"Content-Type": "multipart/form-data"},
        responseType: "blob"
    })

    const imgUrl = URL.createObjectURL(respond.data)
    return imgUrl

}

