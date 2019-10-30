// =========================================== Window Size ========================================
var win_scroll = 0;
var win_width = 0;
var win_height = 0;

// =========================================== Modal =======================================
function openModal(modal) {
  $(modal).addClass('active');
  $('#overlay').addClass('active');
  $('body').addClass('not-scroll');
}

function closeModal(modal) {
  $(modal).removeClass('active');
  $('#overlay').removeClass('active');
  $('body').removeClass('not-scroll');
}

// =========================================== Form - validation =======================================
$.validator.addMethod("customemail",
  function(value, element) {
    return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
  },
  "Invalid email"
);
$.validator.addMethod("uname",
  function(value, element) {
    return (/^([a-z]\w*)$/ig).test(value);
  },
  "Invalid user name"
);
$.validator.addMethod("pass",
  function(value, element) {
    return (/^([A-Z0-9-_!@$&()])+$/ig).test(value);
  },
  "Invalid password"
);
$.validator.addMethod("enonly",
  function(value, element) {
    if(value == '') {
      return true;
    }
    return (/^([A-Z0-9-_ .,])+$/ig).test(value);
  },
  "Invalid value"
);
$.validator.addMethod("enletter",
  function(value, element) {
    if(value == '') {
      return true;
    }
    return (/^([A-Z-_ ])+$/ig).test(value);
  },
  "Invalid value"
);
$.validator.addMethod("nphone",
  function(value, element) {
    if(value == '') {
      return true;
    }
    return (/^[+0-9() -]{14,20}$/i).test(value);
  },
  "Invalid phone"
);

// ============================================ Form =====================================
var form = function(formContact) {
  $(formContact + " input").change(function(){
    $(this).val($.trim($(this).val()));
  });
  $(formContact).validate({
    rules: {
      "Form[email]": {
        required: true,
        customemail: true
      },
      "Form[ssn]": {
        required: true,
        minlength: 4,
        enonly: true
      },
      "Form[zip]": {
        required: true,
        enonly: true
      }
    },
    errorElement: "span",
    errorClass: "invalid",
    validClass: "valid",
    submitHandler: function(form) {
      alert("Send form");
      form.submit();
    }
  });
};

// =========================================== Document Ready ======================================
$(document).ready(function() {
  // Open modal
  $('#btnForgotPassword').on('click', function() { openModal('#modalForgotPassword'); });
  $('#btnContacts').on('click', function() { openModal('#modalContacts'); });
  $('#btnDetails').on('click', function() { openModal('#modalDetails'); });
  $('#btnDetailsInfo').on('click', function() { openModal('#modalDetails'); });
  $('.btn-cart').on('click', function() { openModal('#modalCart'); });
  $('#btnShowProduct').on('click', function() { openModal('#modalProductDescription'); });
  $('#btnContracts').on('click', function() { openModal('#modalContracts'); });
  // Close modal
  $('#modalCancel, #modalClose, #overlay').on('click', function() { closeModal('.modal'); });

  // Open aside panel
  $('#btnMenu').on('click', function() { openModal('#asidePanel'); });
  // Close aside panel
  $('#asidePanelClose').on('click', function() { closeModal('#asidePanel'); });

  // Close alert
  $('#alertClose').on('click', function() {
    $(this).parent().parent().hide();
  });

  // Search 
  $('#searchField').on('click', function() {
    $('#searchDropdown').toggleClass('active');
  });

  // Orders Show more
  $('.order__show-more').on('click', function() {
    $(this).toggleClass('active').parent().find('.order__item').toggleClass('visible');
  });

  // Orders dropdown
  $('.order__select').on('click', function() {
    $(this).toggleClass('active').parent().next().toggleClass('visible');
  });

  // Product cancel
  $('.product__cancel').on('click', function() {
    $(this).on('click', function() { openModal('#modalProductCancel'); });
  });
  $('#btnOrderSend').on('click', function() {
    $(this).on('click', function() { openModal('#modalOrderSend'); });
  });
  $('#btnConfirmOrderSendSuccess').on('click', function() {
    closeModal('.modal');
    $(this).on('click', function() { openModal('#modalOrderSendSuccess'); });
  });
});

// =========================================== Window Resize and Document Ready ====================
var callback = function() {
  win_width = window.innerWidth;
  win_height = window.innerHeight;
};

// =========================================== Window Scroll ====================
var callbackScroll = function() {
  win_scroll = $(this).scrollTop();
};

$(document).ready(callback);
$(window).resize(callback);
$(window).scroll(callbackScroll);