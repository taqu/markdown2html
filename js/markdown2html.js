function markdown2html() {
    var markdownarea = $('#markdown');
    var html = DOMPurify.sanitize(marked(markdownarea.val()));
    var htmlarea = $('#html');
    htmlarea.val(html);
}

$(function() {
    var clipboard = new ClipboardJS('#copyclipboard');
    clipboard.on('success', function(e) {
    });
    clipboard.on('error', function(e) {
    });
});
$('#markdown').keyup(markdown2html);
$('#markdown').change(markdown2html);
$('#convert').click(markdown2html);


