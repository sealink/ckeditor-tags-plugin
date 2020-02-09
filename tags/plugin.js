/* global CKEDITOR */
CKEDITOR.plugins.add("tags", {
  icons: "tags",
  init: function(editor) {
    editor.addCommand("showTags", new CKEDITOR.dialogCommand("tagDialog"));
    editor.ui.addButton("InsertTag", {
      label: "Insert Tag",
      command: "showTags",
      icon: this.path + "icons/tags.png"
    });
    return CKEDITOR.dialog.add("tagDialog", this.path + "dialogs/tags.js");
  }
});
