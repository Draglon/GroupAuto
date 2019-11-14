// =========================================== Window Size ========================================
var win_scroll = 0;
var win_width = 0;
var win_height = 0;

// =========================================== Modal & Sidebar ====================================
function openModal(modal) {
  $(modal).addClass('active');
  $('#overlay').addClass('active');
  $('body').addClass('not-scroll');

  let modalHeight = $(`${modal}, .sidebar`).innerHeight();
  let headerHeight = $(`${modal} .modal__header, .sidebar__header`).innerHeight() || 0;
  let contentHeight = $(`${modal} .modal__content, .sidebar__content`).innerHeight();
  let footerHeight = $(`${modal} .modal__footer, .sidebar__footer`).innerHeight() || 0;

  if(contentHeight > modalHeight) {
    $(`${modal} .modal__content, .sidebar__content`).css({
      'height': modalHeight,
    });
  }
  $(`${modal} .modal__content, .sidebar__content`).css({
    'padding': `${headerHeight}px 1.5em ${footerHeight}px`,
  });
}

function closeModal(modal) {
  $(modal).removeClass('active');
  $('#overlay').removeClass('active');
  $('body').removeClass('not-scroll');
}

// =========================================== Form - validation ==================================
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

// ============================================ Form =============================================
var form = function(formContact) {
  $(formContact + " input").change(function(){
    $(this).val($.trim($(this).val()));
  });
  $(formContact).validate({
    rules: {
      "Form[login]": {
        required: true,
        enonly: true
      },
      "Form[password]": {
        required: true,
        minlength: 8,
        pass: true,
      },
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

// =========================================== Slider ============================================
var slider = function (nameId) {
  $(nameId).flexisel({
      visibleItems: 1,
      itemsToScroll: 1,
      animationSpeed: 500,
      infinite: true,
      navigationTargetSelector: null,
      autoPlay: {
        enable: true,
        interval: 3000,
        pauseOnHover: true,
      }
  });
};

// =========================================== Document Ready ====================================
$(document).ready(function() {
  // Open modal
  $('#btnForgotPassword').on('click', function() { openModal('#modalForgotPassword'); });
  $('#btnForgotPasswordSuccess').on('click', function() { openModal('#modalForgotPasswordSuccess'); });
  $('#btnContacts').on('click', function() { openModal('#modalContacts'); });
  $('#btnDetails').on('click', function() { openModal('#modalDetails'); });
  $('#btnDetailsInfo').on('click', function() { openModal('#modalDetails'); });
  $('.btn-cart').on('click', function() { openModal('#modalCart'); });
  $('#btnShowProduct').on('click', function() { openModal('#modalProductDescription'); });
  $('#btnContracts').on('click', function() { openModal('#modalContracts'); });
  $('#btnFilter').on('click', function() { openModal('#modalFilter'); });
  $('#btnSearch').on('click', function() { openModal('#modalSearch'); });
  $('#btnSelectModel').on('click', function() { openModal('#modalSelectModel'); });
  $('#btnSchedule').on('click', function() { openModal('#modalSchedule'); });
  $('#btnApplicabilityTable').on('click', function() { openModal('#modalApplicabilityTable'); });
  $('#btnCheckAvailability').on('click', function() { openModal('#modalCheckAvailability'); });
  $('#btnCheckAvailabilityAnalogs').on('click', function() { openModal('#modalCheckAvailabilityAnalogs'); });
  $('#btnDetailsModel').on('click', function() { openModal('#modalDetailsModel'); });
  $('#btnSelectOrder').on('click', function() { openModal('#modalSelectOrder'); });
  // Close modal
  $('#modalCancel, #modalClose, #overlay').on('click', function() { closeModal('.modal'); });

  // Open aside panel
  $('#btnMenu').on('click', function() { openModal('#asidePanel'); });
  $('#btnOrderSendPanel').on('click', function() { openModal('#sidebar'); });
  $('#btnOrderDeliveryPanel').on('click', function() { openModal('#sidebar'); });
  // Close aside panel
  $('#asidePanelClose').on('click', function() { closeModal('#asidePanel'); });
  $('#sidebarClose').on('click', function() { closeModal('#sidebar'); });

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

  // Applicability
  $('.applicability__btn').on('click', function() {
    $(this).toggleClass('active');
    $(this).prev().toggleClass('active');
  });

  // Contracts
  $('.contracts__header').on('click', function() {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');

    let modalHeight = $('.modal').innerHeight();
    let headerHeight = $('.modal__header').innerHeight() || 0;
    let contentHeight = $('.modal__content').innerHeight();
    let footerHeight = $('.modal__footer').innerHeight() || 0;

    if(contentHeight > modalHeight) {
      $('.modal__content').css({
        'overflow': 'auto',
        'height': modalHeight,
      });
    }
    $('.modal__content').css({
      'padding': `${headerHeight}px 1.5em ${footerHeight}px`,
    });
  });
  
  // STUBS - (remove after deploy)
  $('#btnOrderSend--stub').on('click', function() { openModal('#modalOrderSend'); });
  $('#btnConfirmOrderSendSuccess--stub').on('click', function() { openModal('#modalOrderSendSuccess'); });
  $('#btnProductCancel--stub').on('click', function() { openModal('#modalProductCancel'); });

  // Forms
  form("#loginForm");

  // Slider
  slider('#slider');
});


// =========================================== Window Resize and Document Ready ==================
var callback = function() {
  win_width = window.innerWidth;
  win_height = window.innerHeight;
};

// =========================================== Window Scroll =====================================
var callbackScroll = function() {
  win_scroll = $(this).scrollTop();
};

$(document).ready(callback);
$(window).resize(callback);
$(window).scroll(callbackScroll);