
$(function() {
  $(".mbr-background-video").on("VPReady", function(e) {
    $(".vimeo_player_overlay").remove();
  });
  $(".mbr-background-video").on("VPPause", function(e) {
  });
});
