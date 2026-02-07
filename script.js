function addResult() {
  const nameInput = document.getElementById("name");
  const m1Input = document.getElementById("marks1");
  const m2Input = document.getElementById("marks2");
  const m3Input = document.getElementById("marks3");

  const name = nameInput.value.trim();
  const m1 = m1Input.value;
  const m2 = m2Input.value;
  const m3 = m3Input.value;

  
  if (name === "" || m1 === "" || m2 === "" || m3 === "") {
    alert("Please fill all fields!");
    return;
  }

  const total = Number(m1) + Number(m2) + Number(m3);
  const percentage = (total / 300) * 100;

  let grade = "F";
  if (percentage >= 75) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 40) grade = "C";

  const row = `
    <tr>
      <td>${name}</td>
      <td>${total}</td>
      <td>${percentage.toFixed(2)}%</td>
      <td>${grade}</td>
    </tr>
  `;

  document.getElementById("resultTable").innerHTML += row;

  
  nameInput.value = "";
  m1Input.value = "";
  m2Input.value = "";
  m3Input.value = "";
}

