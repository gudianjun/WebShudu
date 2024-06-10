//import * as wijmo from '../wijmo/controls/wijmo.min.js';
//import * as input from '../wijmo/controls/wijmo.input.min.js';
import Common from '../../lib/common.js';
import log from '../../lib/loglevel.js';

document.readyState === 'complete' ? init() : window.onload = init;
//InputColor
//InputDate
//InputDateRange
//InputDateTime
//InputMask
//InputNumber
//InputTime
function alertPopup(options, callback) {
    let dialog = createDialog(options), popup = new wijmo.input.Popup(dialog);
    //
    popup.show(true, (sender) => {
        if (callback) {
            callback(sender.dialogResult);
        }
    });
}
function propmtPopup(options, callback) {
    let dialog = createDialog(options, true), popup = new wijmo.input.Popup(dialog);

    //
    popup.show(true, (sender) => { 
        if (callback) {
            let result = sender.dialogResult && sender.dialogResult.indexOf('ok') > -1
                ? dialog.querySelector('input').value
                : null;
            callback(result);
        }
    });

   
}
function getOptions() {
    return {
        header: 'header',
        body: 'body.text',
        small: false,
        ok: 'OK',
        cancel: 'Cancel',
        clsDialog: 'modal-dialog',
        clsHeader: 'modal-header',
        clsBody: 'modal-body',
        clsInput: 'form-control',
        clsFooter: 'modal-footer',
        clsOK: 'btn btn-primary',
        clsCancel: 'btn btn-default'
    };
}
 
function createDialog(options, input = false) {
    // create dialog
    let template = '<div class="{clsDialog}" role="dialog">' +
        '<div class="{clsHeader}">' +
        '<h4>{header}</h4>' +
        '</div>' +
        '<div class="{clsBody}">' +
        '<p>{body}</p>' +
        (input ? '<input class="{clsInput}">' : '') +
        '</div>' +
        '<div class="{clsFooter}">' +
        '<button id="requestOK" class="{clsOK} wj-hide-ok">{ok}</button>' +
        '<button class="{clsCancel} wj-hide">{cancel}</button>' +
        '</div>' +
        '</div>';
    //
    let dialog = wijmo.createElement(wijmo.format(template, options));

    // honor 'small' option
    dialog.style.width = options.small ? '20%' : '40%';
    //
    // dialog is ready
    return dialog;
}
function setEvent(wijmoCtl) {
    // attach a Wijmo event handler
    wijmoCtl.valueChanged.addHandler(function (s, e) {
        log.debug('the value has changed to ' + s.value);
    });

    // attach an HTML event handler
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'keypress', function (e) {
        log.debug('you pressed ' + e.charCode);
    });


    // 表单事件
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'change', () => log.debug('Change event'));
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'input', () => log.debug('Input event'));

    // 键盘事件
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'keydown', () => log.debug('Keydown event'));
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'keypress', () => log.debug('Keypress event'));
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'keyup', () => log.debug('Keyup event'));

    // 鼠标事件
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'click', () => log.debug('Click event'));
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'dblclick', () => log.debug('Double-click event'));

    // 焦点事件
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'focus', () => log.debug('Focus event'));
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'blur', () => log.debug('Blur event'));

    // 剪贴板事件
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'copy', () => log.debug('Copy event'));
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'cut', () => log.debug('Cut event'));
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'paste', () => log.debug('Paste event'));

    // 其他事件
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'select', () => log.debug('Select event'));
    wijmoCtl.addEventListener(wijmoCtl.hostElement, 'contextmenu', () => log.debug('Context menu event'));
}
function init() {

    //log.debug("InputColor");
    //let inputColor = new wijmo.input.InputColor('#theInputColor');

    //log.debug("InputDate");
    //let inputDate = new wijmo.input.InputDate('#theInputDate');

    //log.debug("InputDateRange");
    //let inputDateRange = new wijmo.input.InputDateRange('#theInputDateRange');

    //log.debug("InputDateTime");
    //let inputDateTime = new wijmo.input.InputDateTime('#theInputDateTime');

    //log.debug("InputMask");
    //let inputMask = new wijmo.input.InputMask('#theInputMask');

    //log.debug("InputNumber");
    //let inputNumber = new wijmo.input.InputNumber('#theInputNumber');

    //log.debug("InputTime");
    //let inputTime = new wijmo.input.InputTime('#theInputTime');

    //setEvent(inputColor);
    //setEvent(inputDate);
    //setEvent(inputDateRange);
    //setEvent(inputDateTime);
    //setEvent(inputMask);
    //setEvent(inputNumber);
    //setEvent(inputTime);

   
    var form = $('#Form');
    var formId = form.data('id');
    var data = {
        Id: formId,
        EventType: 1
    };
    var refreshed = localStorage.getItem('refreshed');

    if (!refreshed) {
        $.ajax({
            url: eventUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                if (response.success) {
                    localStorage.setItem('refreshed', 'true');
                    //window.location.reload(true);
                    window.location.href = formUrl;
                } else {
                    $('#result').html('<p>Error: ' + response.message + '</p>');
                }
            },
            error: function () {
                $('#result').html('<p>An error occurred while processing your request.</p>');
            }
        });

    }
    else {
        localStorage.removeItem('refreshed');
    }
}

function SendMessageBox() {

    var data = {
        Id: $(this).attr('id'),
        EventType: 4
    };
    $.ajax({
        url: eventUrl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (response) {
            if (response.success) { 
                window.location.href = formUrl;
            } else {
                $('#result').html('<p>Error: ' + response.message + '</p>');
            }
        },
        error: function () {
            $('#result').html('<p>An error occurred while processing your request.</p>');
        }
    });
}

$('#Form').on('click', 'button',  function () {
    console.log('Text changed in input with id:', $(this).attr('id'));
    console.log('New value:', $(this).val());

    var data = {
        Id: $(this).attr('id'),
        EventType: 3
    };
    $.ajax({
        url: eventUrl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (response) {

            if (response.success) {
                localStorage.setItem('refreshed', 'true');

                if (response.exitType == 0) { // Messagebox
                    let options = getOptions();
                    alertPopup(options, result => {
                        SendMessageBox();
                    });
                }
                else if (response.exitType == 1) // AutoExit
                {
                    window.location.href = formUrl;
                }
                
                //window.location.reload(true);
                
                 
                // window.location.href = formUrl;
            } else {
                $('#result').html('<p>Error: ' + response.message + '</p>');
            }
        },
        error: function () {
            $('#result').html('<p>An error occurred while processing your request.</p>');
        }
    });

});

$('#Form').on('input', 'input[type="text"]', function () {
    console.log('Text changed in input with id:', $(this).attr('id'));
    console.log('New value:', $(this).val());
 
    var data = {
        Id: $(this).attr('id'),
        AttributeName: 'Text',
        AttributeValue: $(this).val()
    };
    $.ajax({
        url: attributeUrl,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function (response) {
            if (response.success) {
                localStorage.setItem('refreshed', 'true');
                //window.location.reload(true);
                window.location.href = formUrl;
            } else {
                $('#result').html('<p>Error: ' + response.message + '</p>');
            }
        },
        error: function () {
            $('#result').html('<p>An error occurred while processing your request.</p>');
        }
    });

});

