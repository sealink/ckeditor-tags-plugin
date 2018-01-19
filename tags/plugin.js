/*
Basic sample plugin inserting abbreviation elements into CKEditor editing area.

Created out of the CKEditor Plugin SDK:
http://docs.ckeditor.com/#!/guide/plugin_sdk_sample_1
 */
CKEDITOR.plugins.add("tags", {
  icons: "tags",
  init: function(editor) {
    editor.addCommand("showTags", new CKEDITOR.dialogCommand("tagDialog"));
    editor.ui.addButton("InsertTag", {
      label: "Insert Tag",
      command: "showTags",
      icon: this.path + 'icons/tags.png'
    });
    if (editor.contextMenu) {
      editor.addMenuGroup("tagGroup");
      editor.addMenuItem("tagItem", {
        label: "Edit Tag",
        icon: this.path + "icons/tags.png",
        command: "showTags",
        group: "tagGroup"
      });
      editor.contextMenu.addListener(function(element) {
        if (element.getAscendant("abbr", true)) {
          return {
            tagItem: CKEDITOR.TRISTATE_OFF
          };
        }
      });
    }
    return CKEDITOR.dialog.add("tagDialog", this.path + "dialogs/tags.js");
  }
});
