/* global CKEDITOR */
CKEDITOR.dialog.add("tagDialog", function(editor) {
  return {
    title: "Tag Properties",
    minWidth: 300,
    minHeight: 100,
    contents: [
      {
        id: "tab-tags",
        label: "Tag Settings",
        elements: [
          {
            type: "select",
            id: "tag-id",
            label: editor.config.tags.label,
            items: editor.config.tags.items,
            validate: CKEDITOR.dialog.validate.notEmpty(
              "Tag field cannot be empty"
            ),
            required: true
          }
        ]
      }
    ],
    onOk: function() {
      return editor.insertHtml(this.getValueOf("tab-tags", "tag-id"));
    }
  };
});
