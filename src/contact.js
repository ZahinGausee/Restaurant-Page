function createContact() {
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.classList.add("tab-content");

  const centerHeading = document.createElement("center");
  const contactUs = document.createElement("h3");
  contactUs.classList.add("contactUs");
  contactUs.textContent = "Contatc Us";
  centerHeading.appendChild(contactUs);

  contact.appendChild(centerHeading);
  contact.appendChild(createForm());

  return contact;
}

function createForm() {
  const form = document.createElement("form");
  form.setAttribute("class", "form");
  form.setAttribute("action", "/submit");
  form.setAttribute("method", "post");
  form.setAttribute("autocomplete", "on");

  const firstName = createInputTag("firstName", "Name", "text", "required");
  firstName.maxlength = "20";
  const lastName = createInputTag("lastName", "Last Name", "text", "required");
  lastName.maxlength = "20";

  const emailId = createInputTag("emailId", "Email Id", "email", "required");
  const contactNumber = createInputTag(
    "contactNumber",
    "Contact Number",
    "tel",
    "required"
  );
  contactNumber.pattern = "[0-9]{10}";

  const feedback = document.createElement("textarea");
  feedback.id = "feedback";
  feedback.name = "feedback";
  feedback.placeholder = "write your messages..";
  feedback.rows = "5";

  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = "Submit";

  form.appendChild(firstName);
  form.appendChild(lastName);
  form.appendChild(contactNumber);
  form.appendChild(emailId);
  form.appendChild(feedback);
  form.appendChild(submit);

  return form;
}

function createInputTag(name, placeHolder, type, required = false) {
  const input = document.createElement("input");
  input.id = name;
  input.name = name;
  input.placeholder = placeHolder;
  input.type = type;
  if (required) input.required = true;

  return input;
}

function loadContact() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createContact());
  return main;
}

export default loadContact;
