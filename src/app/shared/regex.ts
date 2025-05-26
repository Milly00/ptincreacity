export const RegularExpressions = {
  alfanumeric: /^[a-zA-Z0-9]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
  user: /^[a-zA-Z0-9_]{3,16}$/,
  nit_with_points: /^\d{3}\.\d{3}\.\d{3}-\d{1}$/,
  nit: /^\d{9,10}-?\d$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  name: /^[a-zA-ZÀ-ÿ\s']{1,50}$/,
  code: /^[a-zA-ZÀ-ÿ\s']{1,7}$/,

  phone: /^[0-9-() ]{7,20}$/,
  number: /^-?\d+(\.\d+)?$/,
  text: /^[a-zA-ZáéíóúüÜÁÉÍÓÚ0-9\s.]+$/,
};
