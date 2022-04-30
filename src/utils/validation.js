const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function isEmailAddress(str) {
  return str.match(pattern);
}
function isAlphaNumeric(str) {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123) &&
      !(str.charAt(i) === " ")
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
}

const signUpFormValidation = (formData) => {
  console.log(formData);
  const error = {};
  const fields = ["email", "password", "name", "gender", "phoneNumber"];
  fields.forEach((field) => {
    if (!formData[`${field}`]) {
      error[[field]] = `All fields are mandatory`;
    }
  });
  if (formData.gender && formData.gender === "") {
    error["gender"] = "Please identify as male, female or others";
  }
  if (
    formData.phoneNumber &&
    !(formData.phoneNumber.match(/^[0-9]+$/) !== null)
  ) {
    error["phoneNumber"] = "Phone Number must contain only numbers";
  }

  if (formData.name && !isAlphaNumeric(formData.name)) {
    error["name"] = "Name is not alphanumeric";
  }
  if (formData.password && formData.password.length < 6) {
    error["password"] = "Password must contain atleast 6 letters";
  }
  //isEmailAddress(formData.email) === null
  if (formData.email && !formData.email.includes("@")) {
    error["email"] = "Email must contain @";
  }
  if (Object.keys(error).length === 0) return null;
  console.log(error);
  return error;
};

export { signUpFormValidation };
