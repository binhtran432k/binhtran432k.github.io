mod components;
mod error_views;
mod templates;

use perseus::prelude::*;
use sycamore::prelude::view;

#[perseus::main(perseus_axum::dflt_server)]
pub fn main<G: Html>() -> PerseusApp<G> {
    PerseusApp::new()
        .template(crate::templates::index::get_template())
        .error_views(crate::error_views::get_error_views())
        .index_view(|cx| {
            view! { cx,
                html (lang="en") {
                    head {
                        meta(charset = "UTF-8")
                        meta(name = "viewport", content = "width=device-width, initial-scale=1.0")
                        crate::components::seo::Seo()
                        // fonts
                        link (rel="preconnect", href="https://fonts.googleapis.com")
                        link (rel="preconnect", href="https://fonts.gstatic.com", crossorigin="crossorigin")
                        link (href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap", rel="stylesheet")
                        // style
                        link(rel="stylesheet", href=".perseus/static/styles/base.css")
                    }
                    body {
                        // Quirk: this creates a wrapper `<div>` around the root `<div>` by necessity
                        PerseusRoot()
                    }
                }
            }
        })
}
