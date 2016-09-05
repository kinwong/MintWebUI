$(document).ready(function() {
  $(".dropdown").hover(
    function() {
      $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("300");
      $(this).toggleClass('open');
    },
    function() {
      $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("300");
      $(this).toggleClass('open');
    }
  );
});

Template.header.helpers({
  create: function() {
    console.log("header created")
  },
  rendered: function() {
    console.log("header rendered")
  },
  destroyed: function() {
    console.log("header destroyed")
  },

  designQuickDraftOptions: () => {
    return {
      "id": "designQuickDraft",
      "title": "Add Quick Draft",
      "defaultButtonText": "Cancel",
      "primaryButtonText": "Add",
      "product": {
        "name": "Draft product"
      }
    }
  },
  designStockWarrantOptions: () => {
    return {
      "id": "designStockWarrant",
      "title": "Add Hong Kong Stock Warrant",
      "defaultButtonText": "Cancel",
      "primaryButtonText": "Add",
      "product": {

      }
    }
  },
  designIndexCBBCOptions: () => {
    return {
      "id": "designIndexCBBC",
      "title": "Add Hong Kong Index CBBC",
      "defaultButtonText": "Cancel",
      "primaryButtonText": "Add",
      "product": {}
    }
  }
});