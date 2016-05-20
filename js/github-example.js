;
$("[id^=demo]").each(function () {
    var demo = $(this).parent();
    demo.append($("<pre type='syntaxhighlighter' class='brush: js;html-script: true;collapse: true;class-name: paper-code;'>"
        + demo.html() + "</pre>"));
});
$(document).ready(function () {
    $("[id^=js]").each(function (i) {
        var index = this.id.substring(2, this.id.length);
        $("#demo" + index).parent().append($("<div class='paper-div'>&nbsp;Javascript Source</div>"
            + "<pre type='syntaxhighlighter' class='brush: js;class-name: paper-code; toolbar: false'>"
            + $(this).text().replace(/</g, '&lt;') + "</pre>"));
    });
    SyntaxHighlighter.config.strings.expandSource = "Click To Expand Html Source";
    SyntaxHighlighter.all();
});
