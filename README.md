Zemoga Front End Development - Candidate Test v2.1
==================================================

### Overview

Our client's app Rule of Thumb™️ tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. The website has the following requirement: they need to present their users with an easy way to share their opinion on each presented celebrity, using votes (thumbs up and down), and display the results to the user while the poll is open. These features should be available to all users, regardless of where they're accessing the website from, whether it's a smartphone, a tablet or a desktop computer.

> 👉  **The challenge**: Build a responsive display component for the data provided, and add it to the Rule of Thumb™️ website, complying with the design specifications.

### Acceptance Criteria

Below you will find the minimum requirements we need to consider this challenge as completed 🎉

1. [ ] The interactive component should meet the design criteria, which you can find below in the different required resolutions:
   - [Mobile Prototype](https://www.figma.com/proto/NlQ6PjfanVO2YyuDUaohjx/Rule-of-Thumb---FED-Challenge?node-id=6%3A43&scaling=min-zoom)
   - [Tablet Prototype](https://www.figma.com/proto/NlQ6PjfanVO2YyuDUaohjx/Rule-of-Thumb---FED-Challenge?node-id=84%3A1033&scaling=min-zoom)
   - [Desktop Prototype](https://www.figma.com/proto/NlQ6PjfanVO2YyuDUaohjx/Rule-of-Thumb---FED-Challenge?node-id=84%3A2401&scaling=min-zoom)
   - [Design Handoff (Figma)](https://www.figma.com/file/NlQ6PjfanVO2YyuDUaohjx/Rule-of-Thumb---FED-Challenge)
2. [ ] In mobile version, cards **should only** be displayed as a list of cards, with horizontal scrolling and overflow.
3. [ ] In tablet and desktop versions, user **should be able to switch views** between _list view_ and _grid view_, using the dropdown menu, which should be located at the top right section of the component.
   1. If the _list view_ is selected, all cards should be stacked vertically, according to the design specs.
   2. If the _grid view_ is selected, all cards should be positioned as a grid of elements, according to the design specs.
4. [ ] Each card should contain a **gauge bar** at the bottom, which will display the distribution of positive and negative votes **as a percentage**. (See `assets/data.json` for reference).
5. [ ] Each card should contain three buttons: a **"thumbs down" (yellow)**, a **"thumbs up" (teal)** and a "Vote now" button **which should be disabled** by default.
   1. If either "thumbs up" or "thumbs down" button is pressed, it should **toggle the selected state of that button** (denoted as a white border, see design specs for reference), and enable the "Vote Now" button.
   2. If "Vote Now" button is pressed, **that vote should be posted**, and three other things should happen:
      1. Eyebrow text should change to the copy "Thank you for your vote!"
      2. "Vote now" text should change to the copy "Vote Again"
      3. The **gauge bar** below should reflect the changes in the registered data and **percentage should be updated**.
   3. If "Vote Again" button is pressed, all buttons should return to the initial state, and all modified copy texts should be reverted to their original state. The gauge bar, however, should persist the votes already posted.
6. [ ] **All posted votes should be persisted** by any means, and should be exactly the same count, even if the page is refreshed. Use _any_ persistance mechanisms you prefer: LocalStorage, Cookies, IndexedDB, URL params, a Back End service (Firebase, DynamoDB, Redis, etc).

Tips on Delivery
----------------

Here are some tips to make this challenge truly enjoyable:

- [ ] **Please send us the manual** or at least instructions in a README.md file on how to run your code, if we need to compile/transpile/serve the code you send us. We'll try our best to figure out issues if any problem arises, but a good developer should always ensure that their code works in places other that their own machine. We suggest using the [_engines_ property](https://medium.com/@faith__ngetich/locking-down-a-project-to-a-specific-node-version-using-nvmrc-and-or-engines-e5fd19144245) in a `package.json`, an `.nvmrc` file or [Volta](https://docs.volta.sh/guide/), if you need to lockdown specific tool versions (such as Node.js, yarn, etc).
- [ ] **Cleanup your boilerplate**. Useless files, empty tests, commented out code and everything alike hinders our ability to see your real code. So, if you're using CLIs, generators or code boilerplate of any sort, please be kind and cleanup anything that's not adding value to the result.
- **We value your time.** There's no time limit on this challenge (well, reasonably speaking, we don't expect you to take more than **three days** on it), and as long as you send us working code that meets the criteria described above, we're happy. Don't overthink it though, find an easy way to achieve a good result and stick to it.


### Going above and beyond 🚀

If you feel that covering the basic acceptance criteria isn't enough to showcase the best of your abilities feel free to add a little extra. **This is by no means mandatory** but if there are any valuable additional skills you'd like to show off go right ahead. These are just a few ideas of things you could add:

- Implement any sort of _state management solution_, that deals with data updates in a coherent manner.
- Write some tests. Unit, Integration, E2E, anything that ensures that your code is unbreakable.
- Implement some level of accessibility for impaired people reviewing your code.
- _Containerize_ the entire website and make it run flawlessly on any machine.
- Cleanup your commit history and show us your thought process with atomic commits.
- Document your code. Use any format you know of to generate documentation that allow us to peek under the hood.
- Include any SEO strategy, and show off your score in any popular tool.
- Create configuration for different environments, and optimize your code for production usage.

Challenge complete?
-------------------

[ ] Send a link to your recruiter pointing to your repository (Github or Bitbucket). The **master** branch should contain the entire result, along with the instructions to run your code on the README.md file (if apples).

Happy coding! 🙌
