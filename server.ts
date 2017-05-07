import * as Koa from "koa";
import * as Router from "koa-router";
import * as path from "path";

const bodyParser = require("koa-bodyparser");
const hbs = require("koa-hbs");

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 4000;
const TEMPLATES = path.resolve(__dirname, "templates");
const LAYOUTS = path.resolve(TEMPLATES, "layouts");
const DEFAULT_LAYOUT = "default";

router.get("/", ctx => {
  // await ctx.render("pages/home", {
  //   title: "Home Page"
  // });
  
});

app.use(bodyParser());
app.use(router.routes());
app.use(hbs.middleware({
  defaultLayout: DEFAULT_LAYOUT,
  layoutsPath: LAYOUTS,
  viewPath: TEMPLATES
}))
app.listen(PORT);

process.stdout.write(`Contacts app listening on port ${PORT}...`);
