import { BASE_URL } from "./base_url";
import axios from 'axios'

// REGISTER FOR EMPLOYEE
export const SignUpEmployee = async (payload) => {
  await axios.post(`${BASE_URL}/register/employee`, payload)
}


// REGISTER FOR EMPLOYER
export const SignUpEmployer = async (payload) => {
  await axios.post(`${BASE_URL}/register/employer`, payload)
}


// LOGIN 
export const SignIn = async (payload) => {
  const response = await axios.post(`${BASE_URL}/login`, payload)
  return response.data
}

// LOGIN ADMIN

export const AdminLogin = async (payload) => {
  const response = await axios.post(`${BASE_URL}/admin/login`, payload);
  return response.data
}




// GET EMPLOYEE

export const getEmployee = async () => {
  let employee;
  await axios.get(`${BASE_URL}/employee`).then((res) => {
    employee = res.data
  })

  return employee;
}


// GET EMPLOYER

export const getEmployer = async () => {
  let employer;
  await axios.get(`${BASE_URL}/employer`).then((res) => {
    employer = res.data
  })

  return employer;
}

//GET SERVICES

export const getServices = async () => {
  let services;
  await axios.get(`${BASE_URL}/servives`).then((res) => {
    services = res.data;
  })

  return services;
}

//delete SERVICES by  ID
export const deleteServicesByID = async (ID) => {
  let deletedServices;
  await axios.delete(`${BASE_URL}/servives/${ID}`).then((res) => {
    deletedServices = res.data
  });

  return deletedServices;
};
// POST SEERVICES
export const postServices = async (payload) => {
  await axios.post(`${BASE_URL}/servives`, payload);
};

// GET ALL VACANCIES

export const getvacancies = async (name, time) => {
  let vacancies;
  let URL;
  if (!name) {
    URL = BASE_URL + '/vacancies';
  }
  else {
    URL = BASE_URL + '/vacancies' + `?name=${name}`;
  }
  if (!time) {
    URL = BASE_URL + '/vacancies'
  }
  else {
    URL = BASE_URL + '/vacancies' + `?time=${time}`;
  }
  await axios.get(URL).then((res) => {
    vacancies = res.data.data

  })

  return vacancies
}
// GET VACANCIES BY ID
export const getvacanciesByID = async (ID) => {
  let globalData;
  await axios.get(`${BASE_URL}/vacancies/${ID}`).then((res) => {
    globalData = res.data
  });
  return globalData;
};

//delete VACANCIES by  ID
export const deleteVacantieByID = async (ID) => {
  let deletedVacancie;
  await axios.delete(`${BASE_URL}/vacancies/${ID}`).then((res) => {
    deletedVacancie = res.data
  });
}

// POST VACANCIES 

export const postVacancies = async (payload) => {
  await axios.post(`${BASE_URL}/vacancies`, payload)
}



// GET ALL BLOGS

export const getBlogs = async () => {
  let blogs;
  await axios.get(`${BASE_URL}/blogs`).then((res) => {
    blogs = res.data
  })

  return blogs
}

// GET BLOG BY ID

export const getBlogById = async (ID) => {
  let blogs;
  await axios.get(`${BASE_URL}/blogs/${ID}`).then((res) => {
    blogs = res.data
  })

  return blogs
}

//delete BLOGS by  ID
export const deleteBlogByID = async (ID) => {
  let deletedBlog;
  await axios.delete(`${BASE_URL}/blogs/${ID}`).then((res) => {
    deletedBlog = res.data
  });

  return deletedBlog;
};
// POST BLOG
export const postBlog = async (payload) => {
  await axios.post(`${BASE_URL}/blogs`, payload);
};

// EDIT BLOG
export const editBlog = (ID, payload) => {
  axios.put(`${BASE_URL}/blogs/${ID}`, payload)
};

// GET ALL PRICES

export const getPrices = async () => {
  let price;
  await axios.get(`${BASE_URL}/prices`).then((res) => {
    price = res.data
  })

  return price
}
// GET Prices BY ID

export const getPricesId = async (ID) => {
  let prices;
  await axios.get(`${BASE_URL}/prices/${ID}`).then((res) => {
    prices = res.data
  })

  return prices
}
//delete PRICE by  ID
export const deletePriceByID = async (ID) => {
  let deletedPrice;
  await axios.delete(`${BASE_URL}/prices/${ID}`).then((res) => {
    deletedPrice = res.data
  });

  return deletedPrice;
};
// POST PRICES
export const postPrice = async (payload) => {
  await axios.post(`${BASE_URL}/prices`, payload);
};
// EDIT PRICES
export const editPrices = (ID, payload) => {
  axios.put(`${BASE_URL}/prices/${ID}`, payload)
};

// GET ALL OURTEAM

export const getOurTeam = async () => {
  let ourteam;
  await axios.get(`${BASE_URL}/ourteam`).then((res) => {
    ourteam = res.data
  })

  return ourteam
}

// GET OURTEAM BY ID

export const getOurTeamId = async (ID) => {
  let ourteam;
  await axios.get(`${BASE_URL}/ourteam/${ID}`).then((res) => {
    ourteam = res.data
  })

  return ourteam
}

//delete OURTEAM by  ID
export const deleteOurTeamByID = async (ID) => {
  let deletedOurTeam;
  await axios.delete(`${BASE_URL}/ourteam/${ID}`).then((res) => {
    deletedOurTeam = res.data
  });

  return deletedOurTeam;
};

// POST OURTEAM
export const postOurTeam = async (payload) => {
  await axios.post(`${BASE_URL}/ourteam`, payload);
};

// EDIT OURTEAM
export const editOurTeam = (ID, payload) => {
  axios.put(`${BASE_URL}/ourteam/${ID}`, payload)
};

// GET ALL COMMENTS

export const getComment = async () => {
  let comment;
  await axios.get(`${BASE_URL}/comment`).then((res) => {
    comment = res.data
  })

  return comment
}

export const getCommentById = async (ID) => {
  let comment;
  await axios.get(`${BASE_URL}/comment/${ID}`).then((res) => {
    comment = res.data
  })

  return comment
}

//delete COMMENT by  ID
export const deleteCommentByID = async (ID) => {
  let deletedComment;
  await axios.delete(`${BASE_URL}/comment/${ID}`).then((res) => {
    deletedComment = res.data
  });

  return deletedComment;
};

// POST COMMENT
export const postComment = async (payload) => {
  await axios.post(`${BASE_URL}/comment`, payload);
};

// EDIT COMMENT
export const editCommentById = (ID, payload) => {
  axios.put(`${BASE_URL}/comment/${ID}`, payload)
};

// GET ALL CONTACTUS

export const getContactUs = async () => {
  let contactus;
  await axios.get(`${BASE_URL}/contactus`).then((res) => {
    contactus = res.data
  })

  return contactus
}

//delete CONTACTUS by  ID
export const deleteContactUsByID = async (ID) => {
  let deletedContactUs;
  await axios.delete(`${BASE_URL}/contactus/${ID}`).then((res) => {
    deletedContactUs = res.data
  });

  return deletedContactUs;
};

// POST CONTACTUS
export const postContactUs = async (payload) => {
  await axios.post(`${BASE_URL}/contactus`, payload);
};

// EDIT CONTACTUS
export const editContactUsById = (ID, payload) => {
  axios.put(`${BASE_URL}/contactus/${ID}`, payload)
};
