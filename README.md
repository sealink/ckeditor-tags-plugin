## ckeditor-liquidtag-plugin  

Allows the user to select from a pre-defined list of records and have
it inserted into the editor at the current selection location.

### How to Install?

```npm -i ckeditor-tags-plugin --save```


### Configuration

```
CKEDITOR.config.extraPlugins: 'tags'
CKEDITOR.config.tags: {
  'label': 'Tags',
  'items': []
}
```

Items have the format

```
[
  ["Item 1", "Value 1"],
  ["Item 2", "Value 2"],
]
```

### How to publish?

```
Update changelog
npm version patch
git push --follow-tags
```
