 // CONTACTS-SECTION

const validationContacts = new JustValidate('#form-contacts');

validationContacts.addField('#name-contacts', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Мин. значение 3 символа'
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#email-contacts', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный e-mail',
    },
  ])
  .addField('#tel-contacts', [
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'Введите номер телефона',
    },
    {
      rule: 'required',
      errorMessage: 'Введите номер телефона',
    },
  ]);

  let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function(form) {
        let formData = new FormData(form);
  
        let xhr = new XMLHttpRequest();
  
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }
  
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
  
        form.reset();
  
        fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
      }
    });
  }
  
  validateForms('.form', { subname: {required: true, email: true}, email: {required: true, email: true}, tel: {required: true} }, '.thanks-popup', 'send goal');
