export const emailValidator = email => {
  const reg = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return "Champs d' Email ne peut pas etre vide.";
  if (!reg.test(email)) return "L'adresse Email n'est pas valide.";

  return "";
};

export const passwordValidator = password => {
  if (!password || password.length <= 0) return "Champs du mot de passe ne peut pas etre vide.";

  return "";
};

export const nameValidator = name => {
  if (!name || name.length <= 0) return "Champs du nom ne peut pas etre vide.";

  return "";
};
