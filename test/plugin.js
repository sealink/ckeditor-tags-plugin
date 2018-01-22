jasmine.DEFAULT_TIMEOUT_INTERVAL = 9000000;

describe('CKEditor Plugin', function () {
  var editorInstance = null;

  var options = {
      allowedContent: true,
      extraPlugins: 'tags',
      tags: {
        label: 'TestLabel',
        items: [['Item 1', 'Value 1'], ['Item 2', 'Value 2']],
      },
  };

  beforeAll(function() {
    CKEDITOR.basePath = "/base/node_modules/ckeditor/";
    CKEDITOR.plugins.addExternal('tags', '/base/tags/plugin.js');
  });

  beforeEach(function(startTests) {
    setFixtures('<textarea cols="80" id="editor1" name="editor1" rows="10"/>');
    editorInstance = CKEDITOR.replace('editor1', options);
    editorInstance.on('instanceReady', startTests);
  });

  afterEach(function() {
    dialog = CKEDITOR.dialog.getCurrent();
    if (dialog) {
      dialog.hide();
    }

    var instances = CKEDITOR.instances;
    for (var instanceId in instances) {
      instances[instanceId].destroy();
    }
  });

  describe('Displaying the Dialog', function() {
    beforeEach(function(startTests) {
      editorInstance.execCommand('showTags');
      editorInstance.on('dialogShow', function() {
        // make sure the DOM is fully ready
        setTimeout(function(){ startTests() }, 200);
      })
    });

    it('Should initalise the list items', function() {
      var select = $('.cke_dialog_ui_input_select option');

      expect(select.length).toEqual(2)

      expect(select[0].text).toContain('Item 1');
      expect(select[1].text).toContain('Item 2');

      expect(select[0].value).toContain('Value 1');
      expect(select[1].value).toContain('Value 2');
    });

    it('Should set the label', function() {
      expect($(".cke_dialog_ui_labeled_label").text()).toEqual(options.tags.label);
    });

    it('Should validate selection', function() {
      spyOn(window, 'alert');
      CKEDITOR.dialog.getCurrent().click("ok");
      expect(window.alert).toHaveBeenCalledWith('Tag field cannot be empty');
    });

    it('should insert the selected text', function() {
      var select = $('.cke_dialog_ui_input_select');
      select.val("Value 1");
      CKEDITOR.dialog.getCurrent().click("ok");
      expect(editorInstance.getSnapshot()).toContain("Value 1")
    });
  });

  describe('Registration', function() {
    it("Should register the plugin", function () {
      expect(editorInstance.plugins.tags).toBeDefined();
    });

    it('Should register the showTags command', function() {
      expect(editorInstance.commands.showTags).toBeDefined();
    });

    it('Should add toolbar button', function() {
      expect(editorInstance.ui.get('InsertTag')).toBeDefined();
    })
  });
});
