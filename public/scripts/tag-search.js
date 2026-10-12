var input = document.getElementById('tag-search');
var cards = document.querySelectorAll('.tag-card');
var groups = document.querySelectorAll('.tag-group');
var noResults = document.getElementById('no-results');

if (input) {
  input.addEventListener('input', function () {
    var query = input.value.trim().toLowerCase();
    var anyVisible = false;

    groups.forEach(function (group) {
      var groupHasVisible = false;

      group.querySelectorAll('.tag-card').forEach(function (card) {
        var match = card.dataset.search.indexOf(query) !== -1;
        card.hidden = !match;
        if (match) groupHasVisible = true;
      });

      group.hidden = !groupHasVisible;
      if (groupHasVisible) anyVisible = true;
    });

    if (noResults) noResults.hidden = anyVisible;
  });
}
