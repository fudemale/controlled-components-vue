export default function validateEmail(email){
    return email.length >= 4 && email.length > 0;
}


// :class="{
//     'is-valid': modelValue.length >= 4 && modelValue.length > 0,
//     'is-invalid': modelValue.length < 4 && modelValue.length > 0,
//   }"

//   for props: ["modelValue"]