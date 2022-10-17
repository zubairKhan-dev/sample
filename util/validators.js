/* eslint-disable */

const validators = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z0-9$&+,:;=?@#|'<>.^*()%!-]{8,}$/,
  name: /^[A-zÀ-ÿ][A-zÀ-ÿ' -]+$/,
  phone: /^[+]{0,1}[0-9]{9,16}$/,
}

export default validators
