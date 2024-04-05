// const firtNameChange = (e) => {
//   const val = e.target.value;
//   if (val.length > 3) {
//     console.log("correct");
//   }
// };

// function submitForm = (e) => {
//   var firstName = document.getElementById("fname").value;
//   var lastName = document.getElementById("lname").value;
//   var formData = {
//     firstName: firstName,
//     lastName: lastName,
//   };
//   console.log(formData);
// };
function submitForm(e) {
  e.preventDefault();

  const t = e.target;
  const res = {
    hobbies: [],
  };

  for (let i = 0; i < t.length; i++) {
    const ty = t[i].type;

    // console.dir(t[i], type);s
    console.log(ty, vl);

    if (ty != "submit") {
      res[nm] = vl;
      const vl = t[i].value;
      const nm = t[i].name;
      if (ty == "checkbox" && t[i].checked) {
        //   console.log(t[i].checked);
        res.hobbies.push(vl);
      }
      if (ty != "checkbox") {
        res[nm] = vl;
      }
    }
  }
  console.log(res);
}
