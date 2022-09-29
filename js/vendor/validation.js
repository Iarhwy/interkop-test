// CONTACTS-SECTION
const form = document.querySelector(".form");
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask("+7 (999) 999-99-99");
inputMask.mask(telSelector);

const validation = new JustValidate("#form-contacts");

validation
  .addField("#name-contacts", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Введите 3 и более символов",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Введите не более 30 символов",
    },
    {
      rule: "required",
      value: true,
      errorMessage: "Введите имя",
    },
  ])
  .addField("#email-contacts", [
    {
      rule: "required",
      value: true,
      errorMessage: "Введите Email",
    },
    {
      rule: "email",
      value: true,
      errorMessage: "Введите корректный Email",
    },
  ])
  .addField("#tel-contacts", [
    {
      rule: "required",
      value: true,
      errorMessage: "Введите телефон",
    },
    {
      rule: "function",
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: "Введите корректный телефон",
    },
  ])
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    event.target.reset();
  });
