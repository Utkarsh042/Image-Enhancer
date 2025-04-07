import axios from "axios";

const API_KEY = "wxfx0tp45pevluabz";
const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async (file) => {
  // code to call api and get enhanced image url

  try {
    const taskId = await uploadImage(file);
    console.log("Image upload Successfully, Task ID:", taskId);

    const enhancedImageData = await fetchEnhancedImage(taskId);
    console.log("Enhanced Image Data:", enhancedImageData);
    
    console.log(enhancedImageData);
    //return enhancedImageData;
  } catch (error) {
;    console.log("Error enhancing image:", error.message);
  }
};

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  console.log(data);
  // return taskId;
};
const fetchEnhancedImage = async (taskId) => {
  //fetch enhanced image
  // "/api/tasks/visual/scale/{task_id}";     ---get
};





/*{status: 200, message: 'success', data: {…}}
data
: 
{task_id: '55b924d5-f3e5-4990-8878-f21353923b9a'}
message
: 
"success"
status
: 
200*/