[![npm version](https://badge.fury.io/js/%40sealink%2Fckeditor-tags-plugin.svg)](https://badge.fury.io/js/%40sealink%2Fckeditor-tags-plugin)
[![Coverage Status](https://coveralls.io/repos/github/sealink/ckeditor-tags-plugin/badge.svg?branch=master)](https://coveralls.io/github/sealink/ckeditor-tags-plugin?branch=master)
[![Build Status](https://github.com/sealink/ckeditor-tags-plugin/workflows/Build%20and%20Test/badge.svg?branch=master)](https://github.com/sealink/ckeditor-tags-plugin/actions)

## ckeditor-liquidtag-plugin

Allows the user to select from a pre-defined list of records and have
it inserted into the editor at the current selection location.

### How to Install?

`npm -i ckeditor-tags-plugin --save`

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

### Deployment

Build / Deployment is handled via travis CI.
Package management is via NPM.

First create the release branch

```
git branch release/0.3.0
```

Second Update package.json and specify the version you are releasing

Next Tag and push to travis

```
git tag v0.3.0
git push origin master --tags
```
