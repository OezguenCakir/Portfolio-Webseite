$(function () {
  function runEffect() {
    $("body").hide("scale", {}, 1000);
  }
  $("#selfDestruction").on("click", function () {
    runEffect();
  });
});
