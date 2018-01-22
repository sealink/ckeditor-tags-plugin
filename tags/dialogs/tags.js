CKEDITOR.dialog.add("tagDialog", function(editor) {
  config = editor.config.tags;

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
            type: 'select',
            id: 'tag-id',
            label: config.label,
            items: config.items,
            validate: CKEDITOR.dialog.validate.notEmpty('Tag field cannot be empty'),
            required: true
          }
        ]
      }
    ],
    onOk: function() {
      value = this.getValueOf('tab-tags', 'tag-id');
      return editor.insertText(value);
    }
  };
});
