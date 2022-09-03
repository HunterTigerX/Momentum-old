let smallBlock = "175px"
let bigBlock = `${(blockList.childElementCount) * 25}px`;


function openCloseLinksMenu() {
  bigBlock = `${(blockList.childElementCount) * 25}px`;
  blockList.style.marginLeft = "0";
  document.documentElement.style.setProperty(
    "--links-animation-length",
    `${(blockList.childElementCount-1)*0.1}s`
  );
  if (!linksBlock.classList.contains("hide_links_block")) {
    linksBlock.classList.add("hide_links_block");
    linksBlock.style.height = "0px";
    blockList.style.height = "0px";
  } else if (linksBlock.classList.contains("hide_links_block")) {
    linksBlock.classList.remove("hide_links_block");
    linksBlock.style.height = bigBlock;
    blockList.style.height = bigBlock;
    blockCreate.style.height = bigBlock;
  }
}

function returnListMenu() {
  bigBlock = `${(blockList.childElementCount) * 25}px`;
  linksBlock.style.height = bigBlock;
  blockList.style.height = bigBlock;
  blockCreate.style.height = bigBlock;



  blockList.style.marginLeft = "0";
  inputOne.value = "";
  inputTwo.value = "";
  clickedLinkBlock = "";
}

function editDotsFunction() {
  let filteredClass = this.classList[1].replace(/\D/g, "");
  clickedLinkBlock = filteredClass;

  editOrDeleteBlock.style.minHeight = "60px";
  editOrDeleteBlock.style.Height = "60px";

  var rect = this.getBoundingClientRect();
  editOrDeleteBlock.style.marginTop = `${rect.top - 0}px`;
  editOrDeleteBlock.style.marginLeft = `${rect.left - 215}px`;
}

function deleteLinksFunction() {
  document.querySelector(`.stringNumber${clickedLinkBlock}`).remove();
  localStorage.setItem(`nameLink${clickedLinkBlock}`, null);
  localStorage.getItem(`nameLink${clickedLinkBlock}`);
  editOrDeleteBlock.style.minHeight = "0";
  editOrDeleteBlock.style.Height = "0";
  linksBlock.style.height = `${(blockList.childElementCount) * 25}px`;
  blockList.style.height = `${(blockList.childElementCount) * 25}px`;
  document.documentElement.style.setProperty(
    "--links-end-width",
    `${blockList.offsetHeight}`
  );
  clickedLinkBlock = "";
}

document.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("editOrDelete--block") ||
    event.target.classList.contains("changeButtons") ||
    event.target.classList.contains("editDeleteButtonsText") ||
    event.target.classList.contains("editDots")
  ) {
  } else {
    editOrDeleteBlock.style.minHeight = "0";
    editOrDeleteBlock.style.Height = "0";
  }
});

function editLinksFunction() {
  linksBlock.style.height = "auto";
  inputOne.value = `${localStorage.getItem(`nameLink${clickedLinkBlock}`)}`;
  inputTwo.value = `${localStorage.getItem(`emailLink${clickedLinkBlock}`)}`;
  editOrDeleteBlock.style.minHeight = "0";
  editOrDeleteBlock.style.Height = "0";
  blockList.style.marginLeft = "-230px";
  linksBlock.style.height = smallBlock;
  blockList.style.height = smallBlock;
  blockCreate.style.height = smallBlock;
  inputOne.addEventListener("change", function () {
    localStorage.setItem(`nameLink${clickedLinkBlock}`, nameInput);
    document.querySelector(
      `.valueNumber${clickedLinkBlock}`
    ).value = `${inputOne.value}`;
  });

  inputTwo.addEventListener("change", function () {
    localStorage.setItem(`emailLink${clickedLinkBlock}`, emailInput);
    document.querySelector(
      `.stringNumber${clickedLinkBlock}`
    ).action = `https://${inputTwo.value}`;
  });

  inputOne.removeEventListener("change", function () {
    localStorage.setItem(`nameLink${clickedLinkBlock}`, nameInput);
    document.querySelector(
      `.valueNumber${clickedLinkBlock}`
    ).value = `${inputOne.value}`;
  });

  inputTwo.removeEventListener("change", function () {
    localStorage.setItem(`emailLink${clickedLinkBlock}`, emailInput);
    document.querySelector(
      `.stringNumber${clickedLinkBlock}`
    ).action = `https://${inputTwo.value}`;
  });
}

let numberOfLinks = 0;
let nameInput = inputOne.value;
let emailInput = inputTwo.value;

inputOne.addEventListener("change", function () {
  nameInput = inputOne.value;
});
inputTwo.addEventListener("change", function () {
  emailInput = inputTwo.value;
});

createlinkbutton.addEventListener("click", function () {
  validateName();
  validateEmail();
  if (inputTwo.value !== "" && inputOne.value !== "") {
    createNewLink(nameInput, emailInput);
    inputOne.value = "";
    inputTwo.value = "";
    blockList.style.marginLeft = "0";
    bigBlock = `${(blockList.childElementCount) * 25}px`;
    linksBlock.style.height = bigBlock;
    blockList.style.height = bigBlock;
    blockCreate.style.height = bigBlock;
    document.documentElement.style.setProperty(
      "--links-end-width",
      `${blockList.offsetHeight}`
    );
  }
});

function createNewLink(nameInput, emailInput) {
  if (clickedLinkBlock === "" || clickedLinkBlock === undefined) {
    inputOne.removeEventListener("change", function () {
      localStorage.setItem(`nameLink${clickedLinkBlock}`, nameInput);
      document.querySelector(
        `.valueNumber${clickedLinkBlock}`
      ).value = `${inputOne.value}`;
    });

    inputTwo.removeEventListener("change", function () {
      localStorage.setItem(`emailLink${clickedLinkBlock}`, emailInput);
      document.querySelector(
        `.stringNumber${clickedLinkBlock}`
      ).action = `https://${inputTwo.value}`;
    });

    const formLink = document.createElement("form");
    formLink.action = `https://${emailInput}`;
    formLink.classList.add("newLink");
    formLink.classList.add(`stringNumber${numberOfLinks}`);
    formLink.setAttribute("target", "_blank");
    const divLink = document.createElement("button");
    divLink.classList.add("link_button--logo");
    const inputLink = document.createElement("input");
    inputLink.setAttribute("type", "submit");
    inputLink.classList.add("link_button--addedText");
    inputLink.classList.add(`valueNumber${numberOfLinks}`);
    inputLink.value = nameInput;

    const dotsButton = document.createElement("div");
    dotsButton.classList.add("editDots");
    dotsButton.classList.add(`dotsStringNumber${numberOfLinks}`);
    formLink.append(divLink, inputLink, dotsButton);
    blockList.insertBefore(
      formLink,
      blockList.children[`${blockList.childElementCount - 1}`]
    );
    localStorage.setItem(`nameLink${numberOfLinks}`, nameInput);
    localStorage.setItem(`emailLink${numberOfLinks}`, emailInput);
    document
      .querySelector(`.dotsStringNumber${numberOfLinks}`)
      .addEventListener("click", editDotsFunction);
    document
      .querySelector(`.editDots`)
      .addEventListener("click", editDotsFunction);
    numberOfLinks++;
    localStorage.setItem(`numberOfElementsCreated`, `${numberOfLinks}`);
  } else {
    clickedLinkBlock = "";
  }
}

function reCreateNewLink(nameInput, emailInput, cx) {
  const formLink = document.createElement("form");
  formLink.action = `https://${emailInput}`;
  formLink.classList.add("newLink");
  formLink.classList.add(`stringNumber${cx}`);
  formLink.setAttribute("target", "_blank");
  const divLink = document.createElement("button");
  divLink.classList.add("link_button--logo");
  const inputLink = document.createElement("input");
  inputLink.setAttribute("type", "submit");
  inputLink.classList.add("link_button--addedText");
  inputLink.classList.add(`valueNumber${cx}`);
  inputLink.value = nameInput;
  const dotsButton = document.createElement("div");
  dotsButton.classList.add("editDots");
  dotsButton.classList.add(`dotsStringNumber${cx}`);
  formLink.append(divLink, inputLink, dotsButton);
  blockList.insertBefore(
    formLink,
    blockList.children[`${blockList.childElementCount - 1}`]
  );

  document
    .querySelector(`.dotsStringNumber${cx}`)
    .addEventListener("click", editDotsFunction);
  document
    .querySelector(`.editDots`)
    .addEventListener("click", editDotsFunction);
}

function loadLinks() {
  getNumberOfLinks = localStorage.getItem(`numberOfElementsCreated`);
  if (getNumberOfLinks > 0) {
    numberOfLinks = getNumberOfLinks;
  }

  for (let cx = 0; cx < getNumberOfLinks; cx++) {
    if (localStorage.getItem(`nameLink${cx}`) === `null`) {
    } else {
      nameX = localStorage.getItem(`nameLink${cx}`);
      emailX = localStorage.getItem(`emailLink${cx}`);
      reCreateNewLink(nameX, emailX, cx);
    }
  }
}

function validateName() {
  if (inputOne.value === "") {
    if (state.language === "ru") {
      alert("Введите пожалуйста название");
    } else if (state.language === "en") {
      alert("Enter name please");
    }
  }
}

function validateEmail() {
  if (inputTwo.value === "") {
    if (state.language === "ru") {
      alert("Введите пожалуйста почту");
    } else if (state.language === "en") {
      alert("Enter email please");
    }
  }
}

function replaceLinkMenu() {
  clickedLinkBlock = "";
  linksBlock.style.height = smallBlock;
  blockList.style.height = smallBlock;
  blockCreate.style.height = smallBlock;
  blockList.style.marginLeft = "-230px";
}

document.addEventListener("click", function (event) {
  if (
    event.target.classList.contains("links_block ") ||
    event.target.classList.contains("block__list") ||
    event.target.classList.contains("newLink") ||
    event.target.classList.contains("link_button--logo") ||
    event.target.classList.contains("link_button--addedText") ||
    event.target.classList.contains("editDots") ||
    event.target.classList.contains("newLink") ||
    event.target.classList.contains("addNewLink") ||
    event.target.classList.contains("addlink_button--logo") ||
    event.target.classList.contains("link_button--text") ||
    event.target.classList.contains("editOrDelete--block") ||
    event.target.classList.contains("changeButtons") ||
    event.target.classList.contains("block__create") ||
    event.target.classList.contains("block__create--button") ||
    event.target.classList.contains("block__create--text") ||
    event.target.classList.contains("block__create--line") ||
    event.target.classList.contains("block__create--input") ||
    event.target.classList.contains("create__link--button") ||
    event.target.classList.contains("links_button") ||
    event.target.classList.contains("editDeleteButtonsText")
  ) {
  } else {
    blockList.style.marginLeft = "0";
    inputOne.value = "";
    inputTwo.value = "";
    clickedLinkBlock = "";

    linksBlock.classList.add("hide_links_block");
    linksBlock.style.height = "0px";
  }
});

window.addEventListener("load", loadLinks);
window.addEventListener("load", function () {
  document.documentElement.style.setProperty(
    "--links-end-width",
    `${blockList.offsetHeight}`
  );
});

linksButton.addEventListener("click", openCloseLinksMenu);
returnToList.addEventListener("click", returnListMenu);

deleteButton.addEventListener("click", deleteLinksFunction);
editButton.addEventListener("click", editLinksFunction);
addNewLink.addEventListener("click", replaceLinkMenu);
