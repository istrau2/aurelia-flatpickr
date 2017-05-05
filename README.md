# aurelia-flatpickr

This is an aurelia flatpickr plugin. Use as a custom element.

## Getting Started

Install from npm:

```shell
  npm install aurelia-flatpickr
  ```
In your application entry file:
```html
  export async function configure(aurelia) {
    aurelia.use
        .plugin(PLATFORM.moduleName('aurelia-flatpickr'))
        ...
  }
  ```

Then use as a custom element anywhere throughout your application:
```html
  <aurelia-flatpickr config.bind="config" value.bind="value"></aurelia-flatpickr>
  ```
### Using Custom Input Groups
The default template for the input element can be replaced to customise the buttons available. Here's an example:

```html
<aurelia-flatpickr config.bind="{wrap:true}">
  <div class="input-group aurelia-flatpickr">
      <input type="text" class="form-control" placeholder="Select date" data-input>
      <span class="input-group-btn">
          <button class="btn btn-default" type="button" data-clear>Clear</button>
          <button class="btn btn-default" type="button" data-toggle>Show</button>
      </span>
  </div>
</aurelia-flatpickr>
   ```
## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
