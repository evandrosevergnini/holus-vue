HolusVue is a library of accessible components for creating web applications, developed with the Vue.js framework.

#How do I add it to a project?

```
npm install holus-vue
OR
yarn add holus-vue
```
Then import Holus as a plugin
```
import HolusVue from "holus-vue/dist/holus-vue.common.js";
import "holus-vue/dist/holus-vue.css";
Vue.use(HolusVue);
```
By default, components has a "holus" prefix.
Example:
```
<holus-button label="My Button" />
```
To change it use prefix in options object, like this:
```
const options = {
  prefix: 'h'
}
Vue.use(HolusVue, options);
OR
Vue.use(HolusVue, {
  prefix: 'h'
})
```
Now, use your prefix instead "holus" prefix.
```
<h-button label="My Button" />
```


