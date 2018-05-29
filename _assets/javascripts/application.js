//= require_self

$(function() {
  $(".mbr-background-video").on("VPReady", function(e) {
    $('.mbr-background-video-preview').hide();
    $('.mbr-background-video').v_play();
  });
});
