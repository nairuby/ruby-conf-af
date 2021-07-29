# README

This site is built using [Nanoc](https://nanoc.app) with
Ruby templating done using [HAML](https://haml.info).

Previous sites upon which this one is derived from include
- [Ruby Conf AU](https://github.com/rubyaustralia/ruby-conf-au)
- [Ruby Conf KE](https://github.com/nairuby/ruby-conf-ke)

A great example site using [Nanoc](https://nanoc.app)
and [HAML](https://haml.info) is
[Dan Healy's Resume](https://github.com/danhealy/danhealy-resume).

An example [Nanoc template](https://github.com/lifepillar/nanoc4-template).

Information on changing HTML form submissions to json
- [Amjad Abujamous "Submit HTML Forms to JSON APIs easily"](https://dev.to/amjadmh73/submit-html-forms-to-json-apis-easily-137l)
- [Jordan Finners "How to easily convert HTML Form to JSON"](https://jordanfinners.dev/blogs/how-to-easily-convert-html-form-to-json)
- [MDN Documentation "FormData"](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
- [Sheikh005 "How to send a JSON object to a server using Javascript?"](https://www.geeksforgeeks.org/how-to-send-a-json-object-to-a-server-using-javascript/)
- [MDN Documentation "XMLHttpRequest"](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)

## Getting started

- Clone this repository

  `$git clone https://github.com/nairuby/ruby-conf-af` 

- Go into the directory

  `$cd ruby-conf-af`

- Install the dependencies

  `$bundle config set --local path 'vendor/bundle'`
  
  `$bundle install`

- Build the site

  `$bundle exec nanoc`

- Locally view the site

  `$bundle exec nanoc view`

Note that the generated website will be in the folder
`output` which you can place on a webserver for production
use.

The registration page sends the data to an endpoint API
which is specified in the file content/js/register.js

## Contributing

### Suggestions or Error Reports

- Raise an issue

### New Content or Fixes
- Fork this repository
- Make a new branch
- Add changes to your branch
- Make a pull request
