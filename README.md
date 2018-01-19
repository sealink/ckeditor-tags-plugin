## ckeditor-liquidtag-plugin  

Adds a toolbar icon and dialogue which allows the user to select a record from a pre-defined list of records.

### How to Install?

```npm -i ckeditor-tags-plugin --save```


### Configuration

```
CKEDITOR.config.extraPlugins: 'tags'
CKEDITOR.config.tags: {
  'id': 'liquidtag',
  'label': 'Tags',
  'items': []
}
```

Items have the format

```
[
  ["Item 1", "Value 1" ],
  ["Item 2", "Value 2"],
]
```
