$(document).ready(function() {

    /*------ВАЛИДАЦИЯ-----форма отпраки на странице*/

    var validName = false;
    var validPhone = false;
    var validComment = false;
    var validCheckbox = false;

    /*ПРОВЕРКА НА ПРАВИЛЬНОСТЬ ЗАПОЛНЕНИЯ*/
    function validFunctionName() {
        //---имя---
        var nameInput = $('input[name="name"]');
        var nameInputValue = $('input[name="name"]').val();
        var nameErr = $('.name-err');
        var rvName = /^[а-яА-ЯЁёa-zA-Z]+$/;
        var nameSymbolValid = rvName.test(nameInputValue);
        if (nameInputValue.length < 2) {
            nameErr.text('Не менее 2х символов').css({ color: 'red' });
            nameInput.css({ borderColor: 'red', backgroundColor: 'rgb(255, 170, 170)', });
            return (validName = false);
        } else if (!nameSymbolValid) {
            nameErr.text('Только буквы').css({ color: 'red' });
            nameInput.css({ borderColor: 'red', backgroundColor: 'rgb(255, 170, 170)', });
            return (validName = false);
        } else {
            nameErr.text('');
            nameInput.css({ borderColor: 'green', backgroundColor: '#94b6f9', });
            return (validName = true);
        }
    }

    function validFunctionPhone() {
        //---телефон---
        var phoneInput = $('input[name="phone"]');
        var phoneInputValue = $('input[name="phone"]').val();
        var phoneErr = $('.phone-err');
        var rvPhone = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        var phoneSymbolValid = rvPhone.test(phoneInputValue);
        if (phoneInputValue == '') {
            phoneErr.text('Поле не заполнено').css({ color: 'red' });
            phoneInput.css({
                borderColor: 'red',
                backgroundColor: 'rgb(255, 170, 170)',

            });
            return (validPhone = false);
        } else if (!phoneSymbolValid) {
            phoneErr.text('Некорректный Телефон').css({ color: 'red' });
            phoneInput.css({
                borderColor: 'red',
                backgroundColor: 'rgb(255, 170, 170)',
            });
            return (validPhone = false);
        } else {
            phoneErr.text('');
            phoneInput.css({ borderColor: 'green', backgroundColor: '#94b6f9', });
            return (validPhone = true);
        }
    }

    function validFunctionComment() {
        //---Комментарии---
        var commentInput = $('textarea[name="comment"]');
        var commentInputValue = $('textarea[name="comment"]').val();
        var commentErr = $('.massage-err');
        if (commentInputValue == '') {
            commentErr.text('Поле не заполнено').css({ color: 'red' });
            commentInput.css({ borderColor: 'red', backgroundColor: 'rgb(255, 170, 170)', });
            return (validComment = false);
        } else {
            commentErr.text('');
            commentInput.css({ borderColor: 'green', backgroundColor: '#94b6f9', });
            return (validComment = true);
        }
    }

    function validFunctionCheckbox() {
        var checkboxInput = $('input[name="agreement"]')
        var checkboxLabel = checkboxInput.next('label')
        if (checkboxInput.is(':not(:checked)')) {
            checkboxLabel.addClass('error-checkbox');
            return (validCheckbox = false);
        } else {
            checkboxLabel.removeClass('error-checkbox');
            return (validCheckbox = true);
        }
    }

    //------------------------------------------

    //------ОТПРАВКА ФОРМЫ СО СТРАНИЦЫ
    $('#form-block__btn').click(function() {

        var nameInputValue = $('input[name="name"]').val();
        var phoneInputValue = $('input[name="phone"]').val();
        var commentInputValue = $('textarea[name="comment"]').val();
        //
        validFunctionName();
        validFunctionPhone();
        validFunctionComment();
        validFunctionCheckbox();
        //
        console.log(validName);
        console.log(validPhone);
        console.log(validComment);
        console.log(validCheckbox);

        if (validName == true &&
            validPhone == true &&
            validComment == true &&
            validCheckbox == true) {
            $.ajax({
                url: 'php/ajaxForm.php',
                type: 'POST',
                cache: false,
                data: {
                    nameInputValue: nameInputValue,
                    phoneInputValue: phoneInputValue,
                    commentInputValue: commentInputValue,
                },
                dataType: 'html',
                success: function(data) {
                    alert('Заявка отправлена!');

                },
            });
            console.log('отправлено');
            $('input[name="name"]').val('');
            $('input[name="phone"]').val('');
            $('textarea[name="comment"]').val('');
            $('input,textarea').attr('style', '');
            $('#form-block__btn').children('.wave-btn').attr('style', '');
            return false;
        } else {

            console.log('Не отправлено');
            $('#form-block__btn').children('.wave-btn').css({ borderColor: 'red' })
            return false;
        }
    });
})