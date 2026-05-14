import axios from "axios"
import { WP_BASE_URL } from "./constants"

const client = axios.create({
  baseURL: WP_BASE_URL,
  timeout: 10000,
})

const getErrorMessage = (error, fallback) => {
  if (error?.response?.data?.message) {
    return error.response.data.message
  }

  return error?.message || fallback
}

export const getBlogs = async () => {
  try {
    const response = await client.get("/wp-json/wp/v2/posts?_embed&per_page=10")
    return { data: response.data || [], error: null }
  } catch (error) {
    return { data: [], error: getErrorMessage(error, "Failed to fetch blogs") }
  }
}

export const getBlogById = async (id) => {
  try {
    const response = await client.get(`/wp-json/wp/v2/posts/${id}?_embed`)
    return { data: response.data || [], error: null }
  } catch (error) {
    return { data: [], error: getErrorMessage(error, "Failed to fetch blog") }
  }
}

export const getTestimonials = async () => {
  try {
    const response = await client.get("/wp-json/wp/v2/testimonials?_embed&per_page=20")
    return { data: response.data || [], error: null }
  } catch (error) {
    return { data: [], error: getErrorMessage(error, "Failed to fetch testimonials") }
  }
}

export const submitEnquiry = async (formData) => {
  try {
    const response = await client.post("/wp-json/wpforms/v1/form/submit", {
      id: "26",
      fields: {
        "1": formData.name,
        "2": formData.email,
        "3": formData.phone,
        "4": formData.destination,
        "5": formData.message,
      }
    })
    return { data: response.data, error: null }
  } catch (error) {
    return { 
      data: null, 
      error: getErrorMessage(error, "Failed to submit enquiry") 
    }
  }
}
export const getMediaById = async (id) => {
  try {
    const response = await client.get(`/wp-json/wp/v2/media/${id}`)
    return { data: response.data?.source_url || null, error: null }
  } catch (error) {
    return { data: null, error: getErrorMessage(error, "Failed to fetch media") }
  }
}