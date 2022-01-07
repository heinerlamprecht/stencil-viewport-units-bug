# Stencil Viewport Units Bug

This project is used to showcase a bug with viewport units in Safari desktop browser.

Just run the project and open it in Safari.  The app displays two `div` container, which are supposed to
be 45% of the width of the browser.  However, when Safari is resized, the width of the containers is not
adjusted.  Other browsers behave correctly.

The folder `static` contains a static, pure HTML / CSS version of the app, which also work correctly in
Safari.
