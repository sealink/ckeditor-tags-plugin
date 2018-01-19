/*
The tags dialog definition.

Created out of the CKEditor Plugin SDK:
http://docs.ckeditor.com/#!/guide/plugin_sdk_sample_1
 */
CKEDITOR.dialog.add("tagDialog", function(editor) {
  config = editor.config.tags;

  return {
    title: "Tag Properties",
    minWidth: 300,
    minHeight: 100,
    contents: [
      {
        id: "tab-basic",
        label: "Tag Settings",
        elements: [
          {
            type: 'select',
            id: config.id,
            label: config.label,
            items: config.items,
            validate: CKEDITOR.dialog.validate.notEmpty("Tag field cannot be empty"),
            setup: function(element) {
              return this.setValue(element.getText());
            },
            commit: function(element) {
              return element.setText(this.getValue());
            }
          }
        ]
      }
    ],
    onShow: function() {
      var element, selection;
      selection = editor.getSelection();
      element = selection.getStartElement();
      if (element) {
        element = element.getAscendant("abbr", true);
      }
      if (!element || element.getName() !== "abbr") {
        element = editor.document.createElement("abbr");
        this.insertMode = true;
      } else {
        this.insertMode = false;
      }
      this.element = element;
      if (!this.insertMode) {
        return this.setupContent(this.element);
      }
    },
    onOk: function() {
      var abbr, dialog;
      dialog = this;
      abbr = this.element;
      this.commitContent(abbr);
      if (this.insertMode) {
        return editor.insertElement(abbr);
      }
    }
  };
});
