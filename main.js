$("#submit-transfer").submit(function (e) {
  e.preventDefault();
  $("#menu-transfer").modal("toggle");
  $("#success-notification").modal("toggle");
  // $.ajax({
  //    url: 'some-url',
  //    type: 'post',
  //    dataType: 'json',
  //    data: $('form#myForm').serialize(),
  //    success: function (data) {
  //       // ... do something with the data...
  //    }
  // });
});

$("#submit-request-funds").submit(function (e) {
  e.preventDefault();
  $("#menu-request-funds").modal("toggle");
  $("#success-notification").modal("toggle");
  // $.ajax({
  //    url: 'some-url',
  //    type: 'post',
  //    dataType: 'json',
  //    data: $('form#myForm').serialize(),
  //    success: function (data) {
  //       // ... do something with the data...
  //    }
  // });
});

$("#submit-claimed-point").submit(function (e) {
  e.preventDefault();
  $("#menu-claim-point").modal("toggle");
  $("#point-claimed-notification").modal("toggle");
  // $.ajax({
  //    url: 'some-url',
  //    type: 'post',
  //    dataType: 'json',
  //    data: $('form#myForm').serialize(),
  //    success: function (data) {
  //       // ... do something with the data...
  //    }
  // });
});

var amount = document.getElementById("amount");
if (amount) {
  amount.addEventListener("keyup", function (e) {
    amount.value = formatRupiah(this.value, null);
  });
}

var request_amount = document.getElementById("request-amount");
if (request_amount) {
  request_amount.addEventListener("keyup", function (e) {
    request_amount.value = formatRupiah(this.value, null);
  });
}

var amount_point = document.getElementById("amount-point");
if (amount_point) {
  amount_point.addEventListener("keyup", function (e) {
    amount_point.value = formatRupiah(this.value, null);
  });
}

var format_nominal = document.getElementById("input-nominal");
if (format_nominal) {
  format_nominal.addEventListener("keyup", function (e) {
    format_nominal.value = formatRupiah(this.value, null);
  });
}

function formatRupiah(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }
  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? "Rp. " + rupiah : "";
}

$(".menu-fav").click(function (e) {
  var elmId = $(this).attr("id");
  var elmStatus = $(this).attr("data-status");
  var elmContainer = "#" + elmId;
  var elmIcon = "#icon-" + elmId;
  var elmMessage = "#add-message";
  var iconCheck = "fas fa-heart text-danger";
  var iconPlus = "far fa-heart";
  var elmAlertMessage = "#alert-message";
  var elmLinkMessage = "#link-message";

  if (elmStatus === "false") {
    $(elmContainer).attr("data-status", "true");
    $(elmIcon).removeClass(iconPlus);
    $(elmIcon).addClass(iconCheck);
    $(elmMessage).removeClass("d-none");
    setTimeout(function () {
      $(elmMessage).addClass("d-none");
    }, 3000);

    $(elmAlertMessage).text("Product added to favorites");
    $(elmLinkMessage).attr("href", "dashboard.html");
  } else {
    $(elmContainer).attr("data-status", "false");
    $(elmIcon).removeClass(iconCheck);
    $(elmIcon).addClass(iconPlus);
    $(elmMessage).removeClass("d-none");
    setTimeout(function () {
      $(elmMessage).addClass("d-none");
    }, 3000);
    $(elmAlertMessage).text("Product removed from favorites");
    $(elmLinkMessage).attr("href", "dashboard.html");
  }
});

$(".add-friend").click(function (e) {
  var elmId = $(this).attr("id");
  var elmStatus = $(this).attr("data-status");
  var elmContainer = "#" + elmId;
  var elmIcon = "#icon-" + elmId;
  var elmMessage = "#success-message";
  var iconCheck = "fas fa-check-circle text-success";
  var iconPlus = "fas fa-plus-circle";
  var elmAlertMessage = "#alert-message";
  var elmLinkMessage = "#link-message";

  if (elmStatus === "false") {
    $(elmContainer).attr("data-status", "true");
    $(elmIcon).removeClass(iconPlus);
    $(elmIcon).addClass(iconCheck);
    $(elmMessage).removeClass("d-none");
    setTimeout(function () {
      $(elmMessage).addClass("d-none");
    }, 3000);

    $(elmAlertMessage).text("Friend has been added");
    $(elmLinkMessage).attr("href", "friends.html");
  } else {
    $(elmContainer).attr("data-status", "false");
    $(elmIcon).removeClass(iconCheck);
    $(elmIcon).addClass(iconPlus);
    $(elmMessage).removeClass("d-none");
    setTimeout(function () {
      $(elmMessage).addClass("d-none");
    }, 3000);
    $(elmAlertMessage).text("Friend has been removed");
    $(elmLinkMessage).attr("href", "friends.html");
  }
});

$(".data-saldo-deposit").change(function (e) {
  e.stopImmediatePropagation();
  $("#input-nominal").val("");
});

$("#input-nominal").on("input", function (e) {
  $("input:radio[name=saldo]").each(function () {
    $(this).prop("checked", false);
  });
});
