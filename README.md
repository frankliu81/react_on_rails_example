# README

An example showing how to use react_on_rails with multiple bundles and Webpack splitChunks plugin

To run the example:
- `rails s`
- `bin/webpack -w `

Example was generated with:

1. 
```
gem install rails -v 6.0.2.2
rails new react_on_rails_example --webpack=react -T -d postgresql 
bin/rake db:create
bin/rails s
```

  If you didn't pass in -webpack=react in rails new, you can do: (see webpacker Integrations react)
```
bundle exec rails webpacker:install:react
```


2. Add to Gemfile, `gem 'react_on_rails', '11.1.4'`
`bundle install`

3. `rails generate react_on_rails:install` (Note: this generate a hello-world-bundle pack, HelloWorld controller, layout, and iew)

4. Ensure `hello-world-bundle` is loaded when you go to http://localhost:3000/hello_world. 

5. Add `yarn add --dev webpack-bundle-analyzer` in the BundleAnalyzerPlugin to config/webpack/environment.js, so that every time we export WEBPACK_ANALYZER=1, it will automatically pop up the bundle visualization in the browser

6. Replicate a second hello-earth-bundle pack. webpacker.yml
source_entry_path: packs, would pick up everything under the packs directory
If you want to see the config and entries, in the command line, run

`RAILS_ENV=development node -e 'console.dir(require("./config/webpack/development"), { depth: null })'`

7. Ensure `hello-earth-bundle` is loaded when you go to http://localhost:3000/hello_world

8. Add in the lodash dependency with `yarn add lodash`. At the point, lodash would be loaded into both `hello-world-bundle` and `hello-earth-bundle`.

9. In config/webpack/environment.js configure the splitChunks to split out `node_modules` as a separate vendor chunk

10. Redo the `app/views/layout` so that `hello_world.html.erb` would specify
```
<% content_for :bundle do %>
  <title>HelloWorld</title>
  <%= javascript_pack_tag 'hello-world-bundle' %>
<% end %>
<%= render template: "layouts/application" %>
```

And in `application.html.erb`

```
<head>
  ...
  <%= javascript_pack_tag 'runtime' %>
  <%= javascript_pack_tag 'vendors' %>
  <%= yield :bundle %>
</head>
```

The `yield :bundle` insert the pack from the nested layout `hello_world.html.erb`.

Note: Even though we split out vendors chunk, there was a runtime chunk that also got split out in the process, and we need to include it or else the react component won't load.