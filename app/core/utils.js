export const emailValidator = email => {
    const reg = /\S+@\S+\.\S+/;
  
    if (!email || email.length <= 0) return "Email cannot be empty.";
    if (!reg.test(email)) return "Ooops! We need a valid email address.";
  
    return "";
  };
  
  export const passwordValidator = password => {
    if (!password || password.length <= 0) return "Password cannot be empty.";
  
    return "";
  };
  
  export const nameValidator = name => {
    if (!name || name.length <= 0) return "Name cannot be empty.";
  
    return "";
  };
  