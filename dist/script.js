document.addEventListener("DOMContentLoaded", function () {
  // Seleciona a lista de UCs
  let ul = document.querySelector("ul");

  // Botão para adicionar novas UCs
  let addUcButton = document.createElement("button");
  addUcButton.textContent = "Adicionar UC";
  document.querySelector(".container").appendChild(addUcButton);

  addUcButton.addEventListener("click", function () {
    let newUc = prompt("Digite o nome da nova UC:");
    if (newUc) {
      let li = document.createElement("li");
      li.textContent = newUc;

      // Adiciona botões de movimentação para ordenar UCs
      let upButton = document.createElement("button");
      upButton.textContent = "⬆";
      upButton.onclick = function () {
        if (li.previousElementSibling) {
          ul.insertBefore(li, li.previousElementSibling);
        }
      };

      let downButton = document.createElement("button");
      downButton.textContent = "⬇";
      downButton.onclick = function () {
        if (li.nextElementSibling) {
          ul.insertBefore(li.nextElementSibling, li);
        }
      };

      li.appendChild(upButton);
      li.appendChild(downButton);
      ul.appendChild(li);
    }
  });

  // Adiciona campo de CPF e validação
  let cpfRow = document.createElement("tr");
  cpfRow.innerHTML = `<td><strong>CPF:</strong></td><td><input type="text" id="cpf" placeholder="000.000.000-00"></td>`;
  document.querySelector("table").appendChild(cpfRow);

  let validateCpf = function () {
    let cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(this.value)) {
      alert("CPF inválido. Utilize o formato 000.000.000-00.");
      this.focus();
    }
  };
  document.getElementById("cpf").addEventListener("blur", validateCpf);

  // Modifica o campo de e-mail para validação
  let emailTd = document.querySelector("table tr:nth-child(4) td:nth-child(2)");
  emailTd.innerHTML =
    '<input type="text" id="email" value="matheus.benevides@gmail.com">';

  let validateEmail = function () {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value)) {
      alert("E-mail inválido. Verifique o formato.");
      this.focus();
    }
  };
  document.getElementById("email").addEventListener("blur", validateEmail);

  // Adiciona textarea e botão para inserir novas informações no perfil pessoal
  let inputArea = document.createElement("textarea");
  inputArea.setAttribute(
    "placeholder",
    "Adicione mais informações ao seu perfil..."
  );
  document.querySelector(".container").appendChild(inputArea);

  let updateButton = document.createElement("button");
  updateButton.textContent = "Adicionar ao Perfil pessoal";
  document.querySelector(".container").appendChild(updateButton);

  updateButton.addEventListener("click", function () {
    let newInfo = inputArea.value;
    if (newInfo.trim()) {
      let profileSection = document.querySelector("h2 + p");
      let newParagraph = document.createElement("p");
      newParagraph.textContent = newInfo;
      profileSection.parentNode.insertBefore(
        newParagraph,
        profileSection.nextSibling
      );
      inputArea.value = ""; // Limpa a área de texto após adicionar
    }
  });

  // Adicionando a funcionalidade de ordenação manual das UCs
  const ucsList = ul.querySelectorAll("li");
  ucsList.forEach((uc) => {
    const upButton = document.createElement("button");
    upButton.textContent = "⬆";
    upButton.onclick = function () {
      if (uc.previousElementSibling) {
        ul.insertBefore(uc, uc.previousElementSibling);
      }
    };

    const downButton = document.createElement("button");
    downButton.textContent = "⬇";
    downButton.onclick = function () {
      if (uc.nextElementSibling) {
        ul.insertBefore(uc.nextElementSibling, uc);
      }
    };

    uc.appendChild(upButton);
    uc.appendChild(downButton);
  });

  // Funcionalidade para expandir a foto de perfil
  let profilePic = document.getElementById("profilePic");
  let modal = document.getElementById("modal");
  let expandedImg = document.getElementById("expandedImg");
  let closeBtn = document.getElementById("closeBtn");

  // Abre o modal ao clicar na foto
  profilePic.addEventListener("click", function () {
    modal.style.display = "block";
    expandedImg.src = profilePic.src;
  });

  // Fecha o modal ao clicar no botão de fechar
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Fecha o modal ao clicar fora da imagem
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});