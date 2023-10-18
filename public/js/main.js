var form = document.getElementById("form");

var list = document.getElementById("list");

async function renderList() {
  try {
    const users = await axios.get("http://localhost:3000/users");

    users.data.forEach((elem) => {
      var li = document.createElement("li");
      var deleteBtn = document.createElement("button");
      var editBtn = document.createElement("button");

      li.className = "items";
      deleteBtn.className = "delete btn ";
      editBtn.className = "edit btn btn-info";
      editBtn.id = elem.id;
      deleteBtn.id = elem.id;
      deleteBtn.appendChild(document.createTextNode("Delete"));
      editBtn.appendChild(document.createTextNode("Edit"));
      let span1 = document.createElement("span");
      span1.textContent = `${elem.name}  `;
      let span2 = document.createElement("span");
      span2.textContent = `${elem.email}  `;
      let span3 = document.createElement("span");
      span3.textContent = `${elem.phone} `;
      li.appendChild(span1);
      li.appendChild(span2);
      li.appendChild(span3);

      li.appendChild(deleteBtn);
      //li.appendChild(editBtn);
      list.appendChild(li);
    });
  } catch (e) {
    console.log(e);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  renderList();
});

async function deleteUser(e) {
 
  if (e.target.classList.contains("delete")) {
    var li = e.target.parentElement;
    let id = e.target.id;
    await axios.get(`http://localhost:3000/deleteUser/${id}`);
    list.removeChild(li);
  }
}

list.addEventListener("click", (e) => {
  deleteUser(e);
});
