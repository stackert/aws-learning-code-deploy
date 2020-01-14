import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
    const theHtml = `
    <html>
    <head><title>My First SSR</title></head>
    <body>
    <h1>My First Server Side Render</h1>
    <div id="reactele">{{{reactele}}}</div>
    This uses handlebars - not part of this project.
    page is here to verify all is set-up

    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>

    </body>
    </html>
    `;
    res.send(theHtml);
});




export default router;