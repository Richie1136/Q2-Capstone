export default function ValidateEmailInfo(values) {
  let errors = {};

  // if(/#/.test(values.email) ) {
  //   errors.email = 'Email Adress contains invalid character'
  //   console.log('guard clause')
  // } else {

  // }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.email2) {
    errors.email2 = "Email required";
  } else if (values.email2 !== values.email) {
    errors.email2 = "Emails do not match";
  }
  return errors;
}
