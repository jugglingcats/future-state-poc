future-state-poc
================

Experimenting with lazy loaded future states in AngularJS

To build/run:

    bower install
    grunt server
  
Then browse to localhost:9000/index.html.

### Issues

- After navigating to state /module1/sub, hitting refresh does not reload correctly
- Navigating from Module 1 and Module 2 and back gives an error:

    Error: State 'module1.sub'' is already defined
