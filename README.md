### ckeditor-liquidtag-plugin  

Present a list of tags via an html select which can be selected and inserted into a document.


### How to Install?

```
npm -i ckeditor-tags-plugin --save```
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
