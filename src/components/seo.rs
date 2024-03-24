use sycamore::prelude::*;

#[component]
pub fn Seo<G: Html>(cx: Scope) -> View<G> {
    view! { cx,
        meta (
            name = "description",
            content = "Full stack web developer, Automation tester with more than three years experience in Open Source development.")
        meta (
            name = "keywords",
            content = "binh tran, fullstack, automation, developer, tester, web development")
        meta (
            name = "author",
            content = "Binh Tran")
        // favicons
        link (rel="apple-touch-icon", sizes="57x57", href=".perseus/static/favicons/apple-icon-57x57.png")
        link (rel="apple-touch-icon", sizes="60x60", href=".perseus/static/favicons/apple-icon-60x60.png")
        link (rel="apple-touch-icon", sizes="72x72", href=".perseus/static/favicons/apple-icon-72x72.png")
        link (rel="apple-touch-icon", sizes="76x76", href=".perseus/static/favicons/apple-icon-76x76.png")
        link (rel="apple-touch-icon", sizes="114x114", href=".perseus/static/favicons/apple-icon-114x114.png")
        link (rel="apple-touch-icon", sizes="120x120", href=".perseus/static/favicons/apple-icon-120x120.png")
        link (rel="apple-touch-icon", sizes="144x144", href=".perseus/static/favicons/apple-icon-144x144.png")
        link (rel="apple-touch-icon", sizes="152x152", href=".perseus/static/favicons/apple-icon-152x152.png")
        link (rel="apple-touch-icon", sizes="180x180", href=".perseus/static/favicons/apple-icon-180x180.png")
        link (rel="icon", type="image/png", sizes="192x192" , href=".perseus/static/favicons/android-icon-192x192.png")
        link (rel="icon", type="image/png", sizes="32x32", href=".perseus/static/favicons/favicon-32x32.png")
        link (rel="icon", type="image/png", sizes="96x96", href=".perseus/static/favicons/favicon-96x96.png")
        link (rel="icon", type="image/png", sizes="16x16", href=".perseus/static/favicons/favicon-16x16.png")
        link (rel="manifest", href=".perseus/static/favicons/manifest.json")
        meta (name="msapplication-TileColor", content="#ffffff")
        meta (name="msapplication-TileImage", content=".perseus/static/favicons/ms-icon-144x144.png")
        meta (name="theme-color", content="#ffffff")
    }
}
