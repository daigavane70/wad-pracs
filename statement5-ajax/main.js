function FetchData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.send();
  xhr.onload = () => {
    let response = xhr.responseText;
    localStorage.setItem("users", response);
  };
  DisplayData();
}

function DisplayData() {
  let tbody = document.getElementById("tbody");
  let users = JSON.parse(localStorage.getItem("users"));
  tbody.innerHTML = "";
  users.forEach((element) => {
    tbody.innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.email}</td>
        </tr>
    `;
  });
}

FetchData();

document.getElementById("btn").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone_no").value;
  let email = document.getElementById("Div").value;

  if (!name) {
    alert("Name cannot be empty");
    return;
  } else if (!phone) {
    alert("Phone cannot be empty");
    return;
  } else if (!email) {
    alert("email cannot be empty");
    return;
  } else if (!(email.split("@").length >= 2)) {
    alert("Enter a valid email");
    return;
  }

  let postObj = {
    name,
    phone,
    email,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
  xhr.setRequestHeader("Content-type", "application/json", "charset=UTF-8");
  xhr.send(JSON.stringify(postObj));

  xhr.onload = () => {
    if (xhr.status == 201) {
      let arr = JSON.parse(localStorage.getItem("users"));
      arr.unshift(postObj);
      localStorage.setItem("users", JSON.stringify(arr));
      DisplayData();
    }
  };
});
