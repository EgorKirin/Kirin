const form = document.forms["form"]; // считываем форму
const formArr = Array.from(form); // формируем массив из элементов формы
const validFormArr = []; // в этом массиве хранятся поля, которые нужно проверить
const button = form.elements["button"]; // считываем кнопку



$(function() {
   
    
    $("form").each(function() {
      $(this).validate({
        rules: {
          course: {
            required: true,
            minlength: 3
          },
          block: {
            required: true,
            minlength: 1
          },
          user_name: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            email: true
          },
          phone_number: {
            required: true
          },
         },
        messages: {
          course: {
            required: "Название курса не может быть пустым",
            minlength: jQuery.validator.format("Введите не менее {3} символов.")
          },
          block: {
            required: "Номер блока не может быть пустым",
            minlength: jQuery.validator.format("Введите не менее {1} символов.")
          },
          user_name: {
            required: "Имя не может быть пустым",
            minlength: jQuery.validator.format("Введите не менее {3} символов.")
          },
          email: {
            required: "Email не может быть пустым",
            email: "Неверный формат Email"
          },
          Phone: {
            required: "Телефон не может быть пустым"
          },
          }
      });
    });
   
  });